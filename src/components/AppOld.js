import BaseComponent, { cre } from "components/base"

import Charts from "components/Charts"
import LineSwitcher from "components/LineSwitcher"

import { throttle } from "helpers/utils"
import DataChart from 'helpers/DataChart'
import { loadFile } from 'helpers/utils'

import ZoomIcon from "svg/zoom.svg"

import {
    MODE_COLOR_DAY,
    MODE_COLOR_NIGHT,
    MAP_MODE_COLOR_TO_TEXT,
    MAP_MODE_COLOR_TO_CHART_COLORS,
} from 'constants/COLORS'

import {
    MAP_MONTHS,
} from 'constants/DATES'

import style from "./style.css"
import MiniMap from './MiniMap'

class AppOld extends BaseComponent {
    static getXLabelText(unixTimestamp) {
        const date = new Date(unixTimestamp)

        const month = MAP_MONTHS[date.getMonth()]
        const day = date.getDate()

        const year = date.getFullYear()

        const dateFormat = `${day} ${month} ${year}`

        return dateFormat
    }

    static calcLimitOffset(length, width, scroll) {
        const limit = length > 0 ? Math.round((length / 100) * width) : 0

        const offset = length > 0 ? Math.round((length / 100) * scroll) - limit : 0

        return { limit, offset }
    }

    static defaultProps = {
        startIndex: 0
    }

    state = {
        mode: MODE_COLOR_DAY,

        title: "",
        scroll: 100,
        width: 25,
        dataset: [],
        labels: [],
        yScaled: false,

        init: false,
        loading: true,
        zoom: false,
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
            zoom = false,
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
                    prevState.mode !== mode ||
                    prevState.zoom !== zoom
                ) {
                    if (prevState.mode !== mode) {
                        this.handleApplyColorMode()
                    }

                    if (zoom !== false) {
                        const length = zoom.dataset.length > 0 ? zoom.dataset[0].list.length : 0

                        const { limit, offset } = App.calcLimitOffset(length, zoom.width, zoom.scroll)

                        this.cart.setProps({
                            id: index,
                            zoom,
                            yScaled,
                            dataset: zoom.dataset,
                            labels: zoom.labels,
                            visibled,
                            offset,
                            limit,
                            scroll: zoom.scroll,
                            width: zoom.width,
                            arcMode,
                            colors: MAP_MODE_COLOR_TO_CHART_COLORS[mode],
                        })

                        this.miniMap.setProps({
                            yScaled,
                            visibled,
                            dataset: zoom.dataset,
                            scroll: zoom.scroll,
                            width: zoom.width,
                        })

                        this.lineSwitcher.setProps({
                            dataset: zoom.dataset,
                            visibled,
                        })

                        this.datesTitle.innerText = `${App.getXLabelText(zoom.labels[offset])} - ${App.getXLabelText(zoom.labels[offset + limit - 1])}`
                    } else {
                        const length = dataset.length > 0 ? dataset[0].list.length : 0

                        const { limit, offset } = App.calcLimitOffset(length, width, scroll)

                        this.cart.setProps({
                            id: index,
                            zoom,
                            yScaled,
                            dataset,
                            labels,
                            visibled,
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
                            prevState.visibled !== visibled ||
                            prevState.zoom !== zoom
                        ) {
                            this.miniMap.setProps({
                                yScaled,
                                visibled,
                                dataset,
                            })

                            this.lineSwitcher.setProps({
                                dataset,
                                visibled,
                            })
                        }

                        if (
                            prevState.scroll !== scroll || prevState.width !== width ||
                            prevState.zoom !== zoom
                        ) {
                            this.datesTitle.innerText = `${App.getXLabelText(labels[offset])} - ${App.getXLabelText(labels[offset + limit - 1])}`
                        }
                    }

                    if (prevState.zoom !== false && zoom === false) {
                        this.zoomOut.classList.toggle(style.charts__zoom_out__show)

                        this.miniMap.setProps({
                            scroll,
                            width,
                        })
                    } else if (prevState.zoom === false && zoom !== false) {
                        this.zoomOut.classList.toggle(style.charts__zoom_out__show)
                    }
                }

                if (prevState.layout !== layout) {
                    this.cart.setProps({
                        layout: {
                            width: layout.width,
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

    async loadData(url) {
        const data = await loadFile(url)

        const dataJson = JSON.parse(data)

        const dataChart = new DataChart(dataJson)

        return dataChart
    }

    setDataChart(dataChart, name = "Chart") {
        const dataset = dataChart.getCharts()
        const labels = dataChart.getXAsix()

        this.setState({
            labels,
            yScaled: dataChart.IsYScaled(), //!!dataJson.y_scaled,
            title: name,
            charts: dataChart.length, //dataJson.length,
            dataset,
            visibled: dataset.map(line => line.id),
            scroll: 100,
            width: 25,
        })
    }

    async handleLoadDataCharts() {
        const { name, dataUrl } = this.props

        this.setState({
            loading: true,
        })

        const dataChart = await this.loadData(dataUrl)

        this.setDataChart(dataChart, name)

        this.setState({
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
            zoomType = "none",
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
            zoom = false,
        } = this.state

        const length = dataset.length > 0 ? dataset[0].list.length : 0

        const { limit, offset } = App.calcLimitOffset(length, width, scroll)

        this.cart = new Charts({
            id: index,
            zoomType,
            // debug: true,
            // fps: true,
            lineWidth: 3,
            zoom,
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
            onZoom: this.handleZoom.bind(this)
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

        this.cart.renderDom(this.element)
        this.miniMap.renderDom(this.element)

        this.lineSwitcher.renderDom(this.element)

        this.handleInitilizeColorModeSwitcher()

        this.element.appendChild(this.colorSwitcher)

        this.datesTitle.innerText = `${offset} - ${offset + limit - 1}`
    }

    handleUpdateMiniMap({ width, scroll }) {
        const { zoom = false } = this.state

        if (zoom === false) {
            this.setState({
                width,
                scroll,
            })
        } else {
            this.setState({
                zoom: {
                    ...zoom,
                    width,
                    scroll,
                },
            })
        }
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

    handleZoom = async (unixTimestamp, index) => {
        const { zoomType = "none"/*, name*/, getZoomedDataUrl } = this.props

        if (zoomType === "byDay") {
            const offsetBefore = 5
            const offsetAfter = 5

            let dataset = this.state.dataset.map(item => ({
                ...item,
                list: item.list.slice(index - offsetBefore, index + offsetAfter)
            }))
            let labels = this.state.labels.slice(index - offsetBefore, index + offsetAfter)

            this.setState({
                zoom: {
                    index,
                    unixTimestamp,
                    offsetBefore,
                    offsetAfter,
                    scroll: 50,
                    width: 10,
                    labels,
                    dataset,
                    visibled: this.state.visibled,
                }
            })
        } else if (zoomType === "byHours") {
            this.setState({
                loading: true,
            })

            const dataUrl = getZoomedDataUrl(unixTimestamp)

            const dataChart = await this.loadData(dataUrl)

            const dataset = dataChart.getCharts()
            const labels = dataChart.getXAsix()

            // this.setDataChart(dataChart, `${name} - Zoomed`)

            this.setState({
                zoom: {
                    labels,
                    dataset,
                    visibled: dataset.map(line => line.id),
                },
                loading: false,
            })
        }
    }

    handleZoomOut = () => {
        this.setState({
            zoom: false
        })
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

        this.datesTitle = cre("div", {
            className: style.charts__dates
        })

        this.zoomOut = cre("div", {
            className: style.charts__zoom_out,
            children: [
                cre("div", {
                    className: style.charts__zoom_out__icon,
                    style: `background-image: url(${ZoomIcon})`,
                }),
                cre("div", {
                    className: style.charts__zoom_out__text,
                    text: "Zoom Out",
                }),
            ],
            onClick: this.handleZoomOut.bind(this),
        })

        this.element = cre("div", {
            className: style.charts,
            style: `font-size: ${fontSize}px`,
            children: [
                this.title,
                this.zoomOut,
                this.datesTitle,
            ],
        })

        return this.element
    }
}

export default AppOld
