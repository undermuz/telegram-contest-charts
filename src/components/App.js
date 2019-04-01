import BaseComponent, { cre } from "components/base"

import Charts from "components/Charts"
import IndexSelector from "components/IndexSelector"
import LineSwitcher from "components/LineSwitcher"

import { throttle, getClickPosition } from "helpers/utils"
import DataChart from 'helpers/DataChart'

import {
    MODE_COLOR_DAY,
    MODE_COLOR_NIGHT,
    MAP_MODE_COLOR_TO_TEXT,
    MAP_MODE_COLOR_TO_CHART_COLORS,
} from 'constants/COLORS'

import style from "./style.css"

class App extends BaseComponent {
    static calcLimitOffset(length, width, scroll) {
        const limit = length > 0 ? Math.floor((length / 100) * width) : 0

        const offset = length > 0 ? Math.floor((length / 100) * scroll) - limit : 0

        return { limit, offset }
    }

    static defaultProps = {
        startIndex: 0
    }

    state = {
        title: "",
        mode: MODE_COLOR_DAY,
        scroll: 100,
        width: 25,
        dataset: [],
        labels: [],
        init: false,
        loading: true,
        index: 0,
    }

    element = false

    cart = false

    cartMiniMap = false

    /* LIFECIRCLE */

    constructor(props) {
        super(props)

        this.state.index = props.startIndex
    }

    componentDidMount() {
        this.prepareOwnElement()

        this.attachEvents()

        this.state.layout = {
            width: this.element.clientWidth,
            height: this.element.clientHeight,
        }

        this.setState({
            init: true,
        })

        this.handleLoadDataCharts()
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            labels = [],
            dataset = [],
            visibled = [],
            scroll,
            width,
            layout,
            mode,
            title = "",
            index = 0,
            loading = false,
            charts = 0,
        } = this.state

        const init =
            this.cart && this.minimap && this.minimapZone && this.cartMiniMap

        this.handleUpdateFontSize()

        if (this.element) {
            if (!init) {
                this.handleInitilizeCharts()
            } else {
                if (
                    prevState.visibled !== visibled ||
                    prevState.dataset !== dataset ||
                    prevState.labels !== labels ||
                    prevState.scroll !== scroll ||
                    prevState.width !== width ||
                    prevState.mode !== mode
                ) {
                    const visibledDataset = dataset.filter(item =>
                        visibled.includes(item.id),
                    )

                    const length =
                        visibledDataset.length > 0 ? visibledDataset[0].list.length : 0

                    const { limit, offset } = App.calcLimitOffset(length, width, scroll)

                    this.cart.setProps({
                        id: index,
                        dataset: visibledDataset,
                        labels,
                        offset,
                        limit,
                        scroll,
                        width,
                        colors: MAP_MODE_COLOR_TO_CHART_COLORS[mode],
                    })

                    if (
                        prevState.dataset !== dataset ||
                        prevState.visibled !== visibled
                    ) {
                        this.cartMiniMap.setProps({
                            dataset: visibledDataset,
                        })

                        this.lineSwitcher.setProps({
                            dataset,
                            visibled,
                        })
                    }

                    if (prevState.mode !== mode) {
                        this.handleApplyColorMode()
                    }
                }

                if (prevState.layout !== layout) {
                    this.cart.setProps({
                        layout: {
                            width: layout.width - 15 * 2,
                            height: (window.innerHeight / 100) * 40,
                        },
                    })

                    this.cartMiniMap.setProps({
                        layout: {
                            width: layout.width - 15 * 2,
                            height: 50,
                        },
                    })
                }

                if (prevState.scroll !== scroll || prevState.width !== width) {
                    this.handleUpdateMiniMap()
                }

                if (prevState.title !== title || prevState.loading !== loading) {
                    this.handleUpdateTitle()
                }

                if (prevState.index !== index) {
                    this.handleLoadDataCharts()
                }

                if (prevState.index !== index || prevState.charts !== charts) {
                    this.indexSelector.setProps({
                        index,
                        charts,
                    })
                }
            }
        }
    }

    componentWillUnmount() {
        this.dettachEvents()

        if (this.cart) {
            this.cart.destroy()
            this.cart = null
        }

        if (this.cartMiniMap) {
            this.cartMiniMap.destroy()
            this.cartMiniMap = null
        }
    }

    /* EVENTS */

    dettachEvents() {
        document.removeEventListener("mousemove", this.documentEventMouseMove)
        document.removeEventListener("mouseup", this.documentEventMouseUp)
        document.removeEventListener("touchmove", this.documentEventMouseMove)
        document.removeEventListener("touchend", this.documentEventMouseUp)
    }

    attachEvents() {
        window.onresize = throttle(() => {
            this.setState({
                layout: {
                    width: this.element.clientWidth,
                    height: this.element.clientHeight,
                },
            })
        }, 100)

        this.documentEventMouseMove = this.eventMouseMove.bind(this)
        this.documentEventMouseUp = this.eventMouseUp.bind(this)

        document.addEventListener("mousemove", this.documentEventMouseMove)
        document.addEventListener("mouseup", this.documentEventMouseUp)
        document.addEventListener("touchmove", this.documentEventMouseMove)
        document.addEventListener("touchend", this.documentEventMouseUp)
    }

    eventLeftZoneMouseDown = e => {
        const { width, scroll } = this.state

        this.isChangeSize = true
        this.changeSizeEvent = {
            ...getClickPosition(e),
            side: "left",
            width,
            scroll,
        }
    }

    eventRightZoneMouseDown = e => {
        const { width, scroll } = this.state

        this.isChangeSize = true
        this.changeSizeEvent = {
            ...getClickPosition(e),
            side: "right",
            width,
            scroll,
        }
    }

    eventZoneMouseDown = e => {
        const { scroll } = this.state

        this.isChangePosition = true
        this.changePositionEvent = {
            ...getClickPosition(e),
            scroll,
        }
    }

    eventMouseMove = e => {
        if (this.isChangePosition) {
            const { layout, width } = this.state
            const { scroll } = this.changePositionEvent

            const clickPosition = {
                x: this.changePositionEvent.x,
                y: this.changePositionEvent.y,
            }

            const currentPosition = getClickPosition(e)

            let dinst = clickPosition.x - currentPosition.x
            const direction = dinst > 0 ? 1 : 0

            dinst = Math.abs(dinst)

            if (dinst !== 0) {
                const diffScroll = (dinst * 100) / layout.width
                let newScroll = scroll + diffScroll

                if (direction === 1) {
                    newScroll = scroll - diffScroll
                }

                if (newScroll - width < 0) {
                    newScroll = width
                }

                if (newScroll > 100) {
                    newScroll = 100
                }

                if (this.state.scroll !== newScroll) {
                    // this.throttleSetScroll(newScroll)
                    this.setState({
                        scroll: newScroll,
                    })
                }
            }
        }

        if (this.isChangeSize) {
            const { layout } = this.state
            const { width, side = "left" } = this.changeSizeEvent

            const clickPosition = {
                x: this.changeSizeEvent.x,
                y: this.changeSizeEvent.y,
            }

            const currentPosition = getClickPosition(e)

            let dinst = clickPosition.x - currentPosition.x
            const direction = dinst > 0 ? 1 : 0

            dinst = Math.abs(dinst)

            if (dinst !== 0) {
                if (side === "left") {
                    const { scroll } = this.state

                    const percentDinst = (dinst * 100) / layout.width
                    let newWidth = width - percentDinst

                    if (direction === 1) {
                        newWidth = width + percentDinst
                    }

                    if (newWidth > scroll) {
                        newWidth = scroll
                    }

                    if (newWidth < 10) {
                        newWidth = 10
                    }

                    if (this.state.width !== newWidth) {
                        this.setState({
                            width: newWidth,
                            // scroll: scroll - percentDinst
                        })
                    }
                } else if (side === "right") {
                    const { scroll } = this.changeSizeEvent

                    const percentDinst = (dinst * 100) / layout.width
                    let newWidth = width + percentDinst
                    let newScroll = scroll + percentDinst

                    if (direction === 1) {
                        newWidth = width - percentDinst
                        newScroll = scroll - percentDinst
                    }

                    if (newScroll > 100) {
                        newScroll = 100

                        const x = scroll - width

                        newWidth = 100 - x
                    }

                    if (newWidth < 10) {
                        newWidth = 10
                    }

                    if (this.state.width !== newWidth) {
                        this.setState({
                            width: newWidth,
                            scroll: newScroll,
                        })
                    }
                }
            }
        }
    }

    eventMouseUp = () => {
        this.isChangePosition = false
        this.isChangeSize = false
        this.changePositionEvent = false
        this.changeSizeEvent = false
    }

    /* HANDLES */

    prepareOwnElement() {
        const { mode } = this.state

        this.ownElement.classList.toggle(
            style.mode_night,
            mode === MODE_COLOR_NIGHT,
        )

        this.ownElement.classList.add(style.app)
    }

    async handleLoadDataCharts() {
        let { index = 0, dataJson = false } = this.state

        if (!dataJson) {
            this.setState({
                loading: true,
            })

            dataJson = await import("data.json")
            dataJson = dataJson.default
            // index = 0
        }

        const dataChart = new DataChart(dataJson[index])

        const lines = dataChart.getLines()
        const labels = dataChart.getXAsix()

        this.setState({
            labels,
            dataJson,
            title: `Chart ${index + 1}`,
            charts: dataJson.length,
            dataset: lines,
            visibled: lines.map(line => line.id),
            scroll: 100,
            width: 25,
            loading: false,
        })
    }

    handleUpdateMiniMap() {
        const { scroll, width } = this.state

        this.minimapZone.style.left = `${scroll - width}%`
        this.minimapZone.style.width = `${width}%`

        this.minimapLeftZone.style = `width: ${scroll - width}%`
        this.minimapRightZone.style = `width: ${100 - scroll}%`

        this.minimapLeftSizeZone.style = `left: ${scroll - width}%;`
        this.minimapRightSizeZone.style = `left: ${scroll}%;`
    }

    handleInitilizeMinimap() {
        const { scroll, width } = this.state

        this.minimapLeftZone = cre("div", {
            className: style.minimap__left_zone,
            style: `width: ${scroll - width}%`,
        })

        this.minimapLeftSizeZone = cre("div", {
            className: style.minimap__left_size_zone,
            style: `left: ${scroll - width}%;`,
            children: cre("div", {
                className: style.minimap__size_zone__helper,
                onMouseDown: this.eventLeftZoneMouseDown.bind(this),
                onTouchStart: this.eventLeftZoneMouseDown.bind(this),
            }),
        })

        this.minimapZone = cre("div", {
            className: style.minimap__zone,
            style: `left: ${scroll - width}%; width: ${width}%`,
            onMouseDown: this.eventZoneMouseDown.bind(this),
            onTouchStart: this.eventZoneMouseDown.bind(this),
        })

        this.minimapRightSizeZone = cre("div", {
            className: style.minimap__right_size_zone,
            style: `left: ${scroll}%;`,
            children: cre("div", {
                className: style.minimap__size_zone__helper,
                onMouseDown: this.eventRightZoneMouseDown.bind(this),
                onTouchStart: this.eventRightZoneMouseDown.bind(this),
            }),
        })

        this.minimapRightZone = cre("div", {
            className: style.minimap__right_zone,
            style: `width: ${100 - scroll}%`,
        })

        this.minimap = cre("div", {
            className: style.minimap,
            children: [
                this.minimapLeftZone,
                this.minimapLeftSizeZone,
                this.minimapZone,
                this.minimapRightSizeZone,
                this.minimapRightZone,
            ],
        })

        this.canvasWrapper = cre("div", {
            className: style.minimap__canvas_wrapper,
        })

        this.minimapWrapper = cre("div", {
            className: style.charts__minimap_wrapper,
            children: [this.minimap, this.canvasWrapper],
        })
    }

    handleInitilizeColorModeSwitcher() {
        const { mode } = this.state

        this.colorSwitcherItem = cre("div", {
            className: style.color__switcher__item,
            text: MAP_MODE_COLOR_TO_TEXT[mode],
            onClick: this.handleToggleColorMode.bind(this)
        })

        this.colorSwitcher = cre("div", {
            className: style.color__switcher,
            children: this.colorSwitcherItem,
        })
    }

    handleInitilizeCharts() {
        const {
            visibled = [],
            dataset = [],
            labels,
            scroll,
            width,
            layout,
            mode,
            index,
        } = this.state

        const visibledDataset = dataset.filter(item =>
            visibled.includes(item.id),
        )

        const length =
            visibledDataset.length > 0 ? visibledDataset[0].list.length : 0

        const { limit, offset } = App.calcLimitOffset(length, width, scroll)

        this.cart = new Charts({
            id: index,
            // debug: true,
            lineWidth: 3,
            dataset: visibledDataset,
            offset,
            limit,
            scroll,
            width,
            labels,
            layout: {
                width: layout.width,
                height: (window.innerHeight / 100) * 40,
            },
            colors: MAP_MODE_COLOR_TO_CHART_COLORS[mode],
        })

        this.cartMiniMap = new Charts({
            id: index,
            lineWidth: 2,
            dataset: visibledDataset,
            allowXAsix: false,
            allowYAsix: false,
            layout: {
                width: layout.width - 15 * 2,
                height: 50,
            },
        })

        this.handleInitilizeMinimap()

        this.lineSwitcher = new LineSwitcher({
            dataset,
            visibled,
            onSwitch: this.handleSwitchDataSet.bind(this)
        })

        this.handleInitilizeColorModeSwitcher()

        this.cart.renderDom(this.element)
        this.cartMiniMap.renderDom(this.canvasWrapper)

        this.element.appendChild(this.minimapWrapper)
        this.lineSwitcher.renderDom(this.element)
        this.element.appendChild(this.colorSwitcher)
    }

    handleUpdateFontSize() {
        let fontSize = +(window.innerWidth / 40).toFixed(2)

        if (fontSize > 16) fontSize = 16

        this.element.setAttribute("style", `font-size: ${fontSize}px`)
    }

    handleToggleColorMode() {
        const { mode } = this.state

        this.setState({
            mode: mode === MODE_COLOR_DAY ? MODE_COLOR_NIGHT : MODE_COLOR_DAY,
        })
    }

    handleApplyColorMode() {
        const { mode } = this.state

        this.ownElement.classList.toggle(
            style.mode_night,
            mode === MODE_COLOR_NIGHT,
        )

        this.colorSwitcherItem.innerText = MAP_MODE_COLOR_TO_TEXT[mode]
    }

    handleUpdateTitle() {
        const { title = "", loading = false } = this.state

        this.title.innerText = loading ? "Loading..." : title
    }

    handleSwitchDataSet = lineId => {
        const { visibled = [] } = this.state

        if (visibled.includes(lineId)) {
            this.setState({
                visibled: visibled.filter(_lineId => _lineId !== lineId),
            })
        } else {
            this.setState({
                visibled: [...visibled, lineId],
            })
        }
    }

    handleNextIndex = () => {
        const { index = 0, charts = 0 } = this.state

        const newIndex = index + 1

        if (newIndex < charts) {
            this.setState({
                index: newIndex,
            })
        }
    }

    handlePrevIndex = () => {
        const { index = 0 } = this.state

        const newIndex = index - 1

        if (newIndex >= 0) {
            this.setState({
                index: newIndex,
            })
        }
    }

    /* RENDER */

    render() {
        const { title = "", loading = false, index = 0, charts = 0 } = this.state

        let fontSize = +(window.innerWidth / 40).toFixed(2)

        if (fontSize > 16) fontSize = 16

        this.title = cre("h1", {
            className: style.chart_title,
            text: loading ? "Loading..." : title,
        })

        this.indexSelector = new IndexSelector({
            index,
            charts,
            onNext: this.handleNextIndex.bind(this),
            onPrev: this.handlePrevIndex.bind(this),
        })

        this.element = cre("div", {
            className: style.charts,
            style: `font-size: ${fontSize}px`,
            children: this.title,
        })

        this.indexSelector.renderDom(this.element)

        return this.element
    }
}

export default App
