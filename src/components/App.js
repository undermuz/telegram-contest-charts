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
    MAP_MODE_COLOR_TO_CHART_COLORS,
} from 'constants/COLORS'

import {
    MAP_MONTHS,
} from 'constants/DATES'

import style from "./style.css"
import MiniMap from './MiniMap'
import DatesRange from './DatesRange'

class ChartItem extends BaseComponent {
    static defaultProps = {
        animateScale: true
    }

    componentWillUnmount() {
        if (this.cart) {
            this.cart.destroy()
            this.cart = null
        }

        if (this.miniMap) {
            this.miniMap.destroy()
            this.miniMap = null
        }
    }

    componentDidUpdate(prevProps) {
        const {
            arcMode,
            fontSize,
            loading,
            zoom,
            colors,
            layout,
            mode,
            data
        } = this.props

        if (prevProps !== fontSize) {
            this.element.setAttribute("style", `font-size: ${fontSize}px`)
        }

        if (prevProps.mode !== mode) {
            this.applyColorMode()

            this.cart.setProps({
                mode,
            })

            this.miniMap.setProps({
                mode,
            })

            this.lineSwitcher.setProps({
                mode,
            })
        }

        if (prevProps.arcMode !== arcMode) {
            this.cart.setProps({
                arcMode,
            })

            this.miniMap.setProps({
                grid: arcMode
            })
        }

        if (prevProps.colors !== colors) {
            this.cart.setProps({
                colors,
            })

            this.miniMap.setProps({
                colors,
            })
        }

        if (
            prevProps.data.title !== data.title ||
            prevProps.loading !== loading
        ) {
            this.updateTitle()
        }

        if (prevProps.zoom !== zoom) {
            this.element.className = this.getElementClassNames().join(" ")
        }

        if (prevProps.data !== data) {
            const {
                data: {
                    visibled = [],
                    dataset = [],
                    labels,
                    scroll,
                    width,
                    yScaled = false,
                    stacked = false,
                    percentage = false,
                }
            } = this.props

            const length = dataset.length > 0 ? dataset[0].list.length : 0

            const { limit, offset } = App.calcLimitOffset(length, width, scroll)

            this.cart.setProps({
                yScaled,
                dataset,
                labels,
                visibled,
                offset,
                limit,
                scroll,
                width,
                stacked,
                percentage,
                zoom,
            })

            if (
                prevProps.data.dataset !== dataset ||
                prevProps.data.yScaled !== yScaled ||
                prevProps.data.scroll !== scroll ||
                prevProps.data.width !== width ||
                prevProps.data.visibled !== visibled
            ) {
                this.miniMap.setProps({
                    scroll,
                    width,
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
                prevProps.data.scroll !== scroll ||
                prevProps.data.width !== width ||
                prevProps.data.dataset !== dataset ||
                prevProps.data.labels !== labels
            ) {
                this.datesRange.setProps({
                    from: labels[offset],
                    to: labels[offset + limit - 1],
                })
            }
        }

        // if (prevProps.zoom !== false && zoom === false) {
        //     this.zoomOut.classList.toggle(style.charts__zoom_out__show)
        // } else if (prevProps.zoom === false && zoom !== false) {
        //     this.zoomOut.classList.toggle(style.charts__zoom_out__show)
        // }

        if (prevProps.layout !== layout) {
            this.cart.setProps({
                layout: {
                    width: layout.width,
                    height: 320//(window.innerHeight / 100) * 40,
                },
            })

            this.miniMap.setProps({
                layout,
            })
        }
    }

    applyColorMode() {
        const { mode } = this.props

        this.ownElement.classList.toggle(
            style.mode_night,
            mode === MODE_COLOR_NIGHT,
        )
    }

    updateTitle() {
        const { data: { title = "" }, loading = false } = this.props

        this.title.innerText = loading ? "Loading..." : title
    }

    changeMiniMap({ width, scroll }) {
        this.props.onChangeOffsets({
            width,
            scroll,
        })
    }

    getElementClassNames() {
        const {
            zoomType = "none",
            zoom = false,
            data: {
                yScaled = false,
                stacked = false,
                percentage = false,
            },
        } = this.props

        const classNames = []

        classNames.push(style.charts)
        classNames.push(`${style.charts}__zoom_${zoomType}`)

        if (zoom) {
            classNames.push(`${style.charts}__zoomed`)
        }

        if (yScaled) {
            classNames.push(`${style.charts}__y_scaled`)
        }

        if (stacked) {
            classNames.push(`${style.charts}__stacked`)
        }

        if (percentage) {
            classNames.push(`${style.charts}__percentage`)
        }

        return classNames
    }

    render() {
        const {
            animateScale = true,
            fontSize = 16,
            loading = false,
            arcMode = false,
            zoomType = "none",
            zoom = false,
            colors,
            layout,
            mode,
            data: {
                title = "",
                visibled = [],
                dataset = [],
                labels,
                scroll,
                width,
                yScaled = false,
                stacked = false,
                percentage = false,
            }
        } = this.props

        const length = dataset.length > 0 ? dataset[0].list.length : 0

        const { limit, offset } = App.calcLimitOffset(length, width, scroll)

        this.cart = new Charts({
            id: 1,
            animateScale,
            zoomType,
            // debug: true,
            // fps: true,
            lineWidth: 2,
            mode,
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
            stacked,
            percentage,
            layout: {
                width: layout.width,
                height: 320//(window.innerHeight / 100) * 40,
            },
            colors,
            onZoom: this.props.onZoom
        })

        this.miniMap = new MiniMap({
            id: 1,
            lineWidth: 2,
            mode,
            dataset,
            layout,
            scroll,
            width,
            yScaled,
            onChange: this.changeMiniMap.bind(this),
        })

        this.lineSwitcher = new LineSwitcher({
            mode,
            dataset,
            visibled,
            onSwitch: this.props.onSwitchVisible,
            onSelectOne: this.props.onSelectOneVisible
        })

        this.title = cre("h1", {
            className: style.chart_title,
            text: loading ? "Loading..." : title,
        })

        this.datesRange = new DatesRange({
            from: labels[offset],
            to: labels[offset + limit - 1],
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
            onClick: this.props.onZoomOut,
        })

        this.chartsHeader = cre("div", {
            className: style.charts__header,
            children: [
                this.title,
                this.zoomOut,
            ],
        })

        this.datesRange.renderDom(this.chartsHeader)

        this.element = cre("div", {
            className: this.getElementClassNames(),
            style: `font-size: ${fontSize}px`,
            children: this.chartsHeader,
        })

        this.cart.renderDom(this.element)

        this.footer = cre("div", {
            className: style.charts__footer
        })

        this.miniMap.renderDom(this.footer)
        this.lineSwitcher.renderDom(this.footer)

        this.element.appendChild(this.footer)

        return this.element
    }
}

class App extends BaseComponent {
    static getXLabelText(unixTimestamp) {
        const date = new Date(unixTimestamp)

        const month = MAP_MONTHS[date.getMonth()]
        const day = date.getDate()

        const year = date.getFullYear()

        const dateFormat = `${day} ${month} ${year}`

        return dateFormat
    }

    static calcLimitOffset(length, width, scroll) {
        let limit = length > 0 ? Math.ceil((length / 100) * width) : 0

        let offset = length > 0 ? Math.ceil((length / 100) * scroll) - limit : 0

        if (isNaN(limit)) {
            limit = 0

            console.warn("[App][calcLimitOffset] invalid params:", {
                length, width, scroll
            })
        }

        if (isNaN(offset)) {
            offset = 0

            console.warn("[App][calcLimitOffset] invalid params:", {
                length, width, scroll
            })
        }

        return { limit, offset }
    }

    static defaultProps = {
        mode: MODE_COLOR_DAY,
        animateScale: true,
        arcMode: false,
    }

    state = {
        layout: {
            width: 0,
            height: 0
        },

        data: {
            title: "",
            scroll: 100,
            width: 25,
            dataset: [],
            labels: [],
            visibled: [],
            yScaled: false,
        },

        fontSize: 16,

        init: false,
        loading: true,
        zoom: false,
    }

    element = false
    chart = false

    /* LIFECIRCLE */

    componentDidMount() {
        this.prepareOwnElement()

        let fontSize = +(window.innerWidth / 40).toFixed(2)

        if (fontSize > 16) fontSize = 16

        this.setState({
            fontSize,
            init: true,
            layout: {
                width: window.innerWidth,
                height: this.element.clientHeight,
            },
        })

        this.handleLoadDataCharts()

        setInterval(() => {
            const newWidth = window.innerWidth
            const newHeight = this.element.clientHeight

            if (
                newWidth !== this.state.layout.width ||
                newHeight !== this.state.layout.height
            ) {
                this.setState({
                    layout: {
                        width: window.innerWidth,
                        height: this.element.clientHeight,
                        tt: 1
                    },
                })
            }
        }, 100)
    }

    componentDidUpdate(prevProps, prevState) {
        const { arcMode, mode } = this.props

        const {
            zoom,
            fontSize,
            loading,
            layout,
            data,
        } = this.state

        if (
            prevProps.arcMode !== arcMode ||
            prevState.zoom !== zoom ||
            prevState.fontSize !== fontSize ||
            prevState.loading !== loading ||
            prevState.layout !== layout ||
            prevProps.mode !== mode ||
            prevState.data !== data
        ) {
            this.chart.setProps({
                zoom: zoom === false ? false : true,
                arcMode: zoom === false ? false : arcMode,
                fontSize,
                loading,
                colors: MAP_MODE_COLOR_TO_CHART_COLORS[mode],
                layout,
                mode,
                data: zoom === false ? data : zoom,
            })
        }
    }

    /* EVENTS */

    attachEvents() {
        window.onresize = throttle(() => {
            this.setState({
                layout: {
                    width: this.element.clientWidth,
                    height: this.element.clientHeight,
                },
            })

            this.updateFontSize()
        }, 100)
    }

    /* HANDLES */

    getCurrentData() {
        const { data, zoom = false } = this.state

        if (zoom !== false) {
            return zoom
        }

        return data
    }

    setCurrentData(params = {}) {
        const { data, zoom = false } = this.state

        if (zoom !== false) {
            this.setState({
                zoom: {
                    ...zoom,
                    ...params,
                },
            })
        } else {
            this.setState({
                data: {
                    ...data,
                    ...params,
                },
            })
        }        
    }

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
            data: {
                title: name,
                scroll: 100,
                width: 25,
                dataset: dataset.map(item => ({
                    ...item,
                    uid: `chart-${item.id}`
                })),
                labels,
                visibled: dataset.map(line => line.id),
                yScaled: dataChart.IsYScaled(), //!!dataJson.y_scaled,
                stacked: dataChart.IsStacked(), //!!dataJson.stacked,
                percentage: dataChart.IsPercentage(),
            }
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

    handleZoom = async (unixTimestamp, index) => {
        const {
            zoomType = "none",
            /*name,*/
            getZoomedDataUrl,
        } = this.props

        if (zoomType === "byDay") {
            const data = this.getCurrentData()

            const offsetBefore = 3
            const offsetAfter = 3

            let dataset = data.dataset.map(item => ({
                ...item,
                list: item.list.slice(index - offsetBefore, index + offsetAfter)
            }))
            let labels = data.labels.slice(index - offsetBefore, index + offsetAfter)

            this.setState({
                zoom: {
                    title: data.title,
                    visibled: data.visibled,
                    yScaled: data.yScaled,
                    stacked: data.stacked,
                    percentage: data.percentage,
                    index,
                    unixTimestamp,
                    offsetBefore,
                    offsetAfter,
                    scroll: 50,
                    width: 100 / (offsetBefore + offsetAfter),
                    labels,
                    dataset,
                }
            })
        } else if (zoomType === "by3Days") {
            const data = this.getCurrentData()

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
                    title: data.title,
                    yScaled: data.yScaled,
                    stacked: data.stacked,
                    percentage: data.percentage,
                    scroll: 100,
                    width: 100,
                    labels,
                    dataset: dataset.map(item => ({
                        ...item,
                        uid: `cahrt-${unixTimestamp}-${item.id}`
                    })),
                    visibled: dataset.map(line => line.id),
                },
                loading: false,
            })
        } else if (zoomType === "byHours") {
            const data = this.getCurrentData()

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
                    title: data.title,
                    yScaled: data.yScaled,
                    stacked: data.stacked,
                    percentage: data.percentage,
                    scroll: 50,
                    width: 10,
                    labels,
                    dataset: dataset.map(item => ({
                        ...item,
                        uid: `cahrt-${unixTimestamp}-${item.id}`
                    })),
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

    updateFontSize() {
        let fontSize = +(window.innerWidth / 40).toFixed(2)

        if (fontSize > 16) fontSize = 16

        if (this.state.fontSize !== fontSize) {
            this.setState({
                fontSize
            })
        }
    }

    handleSwitchDataSet = lineId => {
        const { visibled = [] } = this.getCurrentData()

        if (visibled.includes(lineId)) {
            this.setCurrentData({
                visibled: visibled.filter(_lineId => _lineId !== lineId),
            })
        } else {
            this.setCurrentData({
                visibled: [...visibled, lineId],
            })
        }
    }

    handleSelectOneVisibleDataSet = lineId => {
        const { dataset = [], visibled = [] } = this.getCurrentData()

        if (visibled.length === 1 && visibled[0] === lineId) {
            this.setCurrentData({
                visibled: dataset.map(item => item.id),
            })
        } else {
            this.setCurrentData({
                visibled: [lineId],
            })
        }
    }

    handleUpdateMiniMap({ width, scroll }) {
        this.setCurrentData({
            width,
            scroll,
        })
    }

    /* RENDER */

    render() {
        const { animateScale = true, zoomType = "none", mode } = this.props

        const { loading = false, zoom = false, layout, data, fontSize = 16 } = this.state

        this.chart = new ChartItem({
            animateScale,
            arcMode: false,
            zoomType,
            zoom,
            fontSize,
            loading,
            colors: MAP_MODE_COLOR_TO_CHART_COLORS[mode],
            layout,
            mode,
            data,

            onSwitchVisible: this.handleSwitchDataSet.bind(this),
            onSelectOneVisible: this.handleSelectOneVisibleDataSet.bind(this),
            onChangeOffsets: this.handleUpdateMiniMap.bind(this),
            onZoom: this.handleZoom.bind(this),
            onZoomOut: this.handleZoomOut.bind(this),
        })

        this.element = cre("div", {
            className: style.app,
            style: `font-size: ${fontSize}px`,
        })

        this.chart.renderDom(this.element)

        return this.element
    }
}

export default App
