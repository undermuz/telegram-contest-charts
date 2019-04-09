import BaseComponent, { cre } from "components/base"

import Charts from "components/Charts"
import LineSwitcher from "components/LineSwitcher"

import { throttle } from "helpers/utils"
import DataChart from 'helpers/DataChart'
import { loadFile } from 'helpers/utils'

import {
    MODE_COLOR_DAY,
    MODE_COLOR_NIGHT,
    MAP_MODE_COLOR_TO_TEXT,
    MAP_MODE_COLOR_TO_CHART_COLORS,
} from 'constants/COLORS'

import style from "./style.css"
import MiniMap from './MiniMap'

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
        yScaled: false,
    }

    element = false

    cart = false

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
            yScaled = false,
        } = this.state

        const {
            arcMode = false,
        } = this.props

        const init = !!this.cart

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
                    prevState.yScaled !== yScaled ||
                    prevProps.arcMode !== arcMode ||
                    prevState.mode !== mode
                ) {
                    const length = dataset.length > 0 ? dataset[0].list.length : 0

                    const { limit, offset } = App.calcLimitOffset(length, width, scroll)

                    this.cart.setProps({
                        id: index,
                        yScaled,
                        dataset,
                        visibled,
                        labels,
                        offset,
                        limit,
                        scroll,
                        width,
                        arcMode,
                        colors: MAP_MODE_COLOR_TO_CHART_COLORS[mode],
                    })

                    if (
                        prevState.dataset !== dataset ||
                        prevState.yScaled !== yScaled ||
                        prevState.visibled !== visibled
                    ) {
                        this.miniMap.setProps({
                            yScaled,
                            dataset,
                            visibled,
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

                    this.miniMap.setProps({
                        layout,
                    })
                }

                if (prevState.scroll !== scroll || prevState.width !== width) {
                    this.miniMap.setProps({
                        scroll,
                        width,
                    })
                }

                if (prevState.title !== title || prevState.loading !== loading) {
                    this.handleUpdateTitle()
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

        if (this.miniMap) {
            this.miniMap.destroy()
            this.miniMap = null
        }
    }

    /* EVENTS */

    dettachEvents() {
        document.removeEventListener("mousemove", this.documentEventMouseMove)
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
        const { name, dataUrl } = this.props

        this.setState({
            loading: true,
        })

        const data = await loadFile(dataUrl)

        const dataJson = JSON.parse(data)

        const dataChart = new DataChart(dataJson)

        const dataset = dataChart.getCharts()
        const labels = dataChart.getXAsix()

        this.setState({
            labels,
            dataJson,
            yScaled: !!dataJson.y_scaled,
            title: name,
            charts: dataJson.length,
            dataset,
            visibled: dataset.map(line => line.id),
            scroll: 100,
            width: 25,
            loading: false,
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
            arcMode = false,
        } = this.props

        const {
            visibled = [],
            dataset = [],
            labels,
            scroll,
            width,
            layout,
            mode,
            index,
            yScaled = false,
        } = this.state

        const length = dataset.length > 0 ? dataset[0].list.length : 0

        const { limit, offset } = App.calcLimitOffset(length, width, scroll)

        this.cart = new Charts({
            id: index,
            // debug: true,
            // fps: true,
            lineWidth: 3,
            arcMode,
            visibled,
            dataset,
            offset,
            limit,
            scroll,
            width,
            labels,
            yScaled,
            layout: {
                width: layout.width,
                height: (window.innerHeight / 100) * 40,
            },
            colors: MAP_MODE_COLOR_TO_CHART_COLORS[mode],
        })

        this.miniMap = new MiniMap({
            id: index,
            dataset,
            layout,
            scroll,
            width,
            yScaled,
            onChange: this.handleUpdateMiniMap.bind(this),
        })

        this.lineSwitcher = new LineSwitcher({
            dataset,
            visibled,
            onSwitch: this.handleSwitchDataSet.bind(this)
        })

        this.handleInitilizeColorModeSwitcher()

        this.cart.renderDom(this.element)
        this.miniMap.renderDom(this.element)

        this.lineSwitcher.renderDom(this.element)
        this.element.appendChild(this.colorSwitcher)
    }
    
    handleUpdateMiniMap({ width, scroll }) {
        this.setState({
            width,
            scroll,
        })
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
        const { title = "", loading = false } = this.state

        let fontSize = +(window.innerWidth / 40).toFixed(2)

        if (fontSize > 16) fontSize = 16

        this.title = cre("h1", {
            className: style.chart_title,
            text: loading ? "Loading..." : title,
        })

        this.element = cre("div", {
            className: style.charts,
            style: `font-size: ${fontSize}px`,
            children: this.title,
        })

        return this.element
    }
}

export default App
