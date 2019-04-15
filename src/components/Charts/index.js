import {
    throttle,
    abbreviateNumber,
    getClickPosition,
    numberFormat,
} from 'helpers/utils'

import { hexToRgb, rgbToHsl, hslToRgb } from 'helpers/Colors'

import Canvas, { CanvasLine, CanvasText, CanvasRect, CanvasPath } from 'helpers/Canvas'
import { getAnimProgress, animateEase } from 'helpers/utils'

import BaseComponent, { cre } from 'components/base'

import {
    MAP_MONTHS,
    MAP_WEEK_DAYS,
} from 'constants/DATES'

import {
    MODE_COLOR_DAY,
    MODE_COLOR_NIGHT,
} from 'constants/COLORS'

import style from './style'
import LabelsX from './LabelsX'
import BarChart from './BarChart'

import ArrowIcon from 'svg/arrow.svg'
import { CanvasArc } from '../../helpers/Canvas';

class Charts extends BaseComponent {
    static defaultProps = {
        mode: MODE_COLOR_DAY,
        arcMode: false,
        animateScale: true,
        allowXAsix: true,
        allowYAsix: true,
        allowPointValue: false,
        offset: 0,
        limit: 0,
        dataset: [],
        visibled: [],
        width: 0,
        scroll: 0,
        layout: {
            width: 0,
            height: 0,
        },
        yScaled: false,
        zoomType: "none",
        zoom: false,
    }

    static getDarknessColor(color, opacity = 1) {
        let rgb = hexToRgb(color)

        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

        const darknessRgb = hslToRgb(hsl[0], hsl[1] - 0.18, hsl[2])

        rgb.r = Math.round(darknessRgb[0])
        rgb.g = Math.round(darknessRgb[1])
        rgb.b = Math.round(darknessRgb[2])

        if (rgb.r > 255) rgb.r = 255
        if (rgb.g > 255) rgb.g = 255
        if (rgb.b > 255) rgb.b = 255

        if (opacity < 1) {
            color = `rgba(${rgb.r},${rgb.g},${rgb.b},${Math.ceil(opacity * 100) / 100})`
        } else {
            color = `rgb(${rgb.r},${rgb.g},${rgb.b})`
        }

        return color
    }

    static calcXStep = ({
        width,
        limit,
        length,
        maxStep = 1000,
        minStep = 1,
    }) => {
        let step =
            limit > 0
                ? width / (((length - 1) * limit) / 100)
                : width / length

        step = Math.min(step, maxStep)
        step = Math.max(step, minStep)

        return step
    }

    log = []

    animations = []

    constructor(props) {
        super(props)

        this.safeCalc = throttle(this.calc, 1)

        if (this.props.allowYAsix) {
            this.state.graphOffset.bottom = 30
        } else {
            this.state.graphOffset.bottom = 0
        }

        if (!this.props.mini) {
            this.state.graphOffset.top = 20
            this.state.graphOffset.left = 18
            this.state.graphOffset.right = 18
        } else {
            this.state.graphOffset.top = 0
            this.state.graphOffset.left = 0
            this.state.graphOffset.right = 0
        }
    }

    state = {
        step: 10,
        showInfo: false,
        graphLayout: {
            width: 0,
            height: 0,
            labelsXWidth: 70,
            labelsXOffset: 10,
        },
        graphMinMax: {},
        offset: 0,
        graphOffset: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            asixX: 0,
            asixY: 0,
        },
        graphScale: {
            x: 0,
            y: 0,
        },
        minStep: 1,
        maxStep: 1000,
        visibility: {},
        mouse: { pointX: 0, pointY: 0 },
        selectArc: false,
        zoom: false,
        animationsValues: {
            yAsixOpacity: 100,
            xAsixOpacity: 100,
            arcsScale: 0,
            areasScale: 0,
            yMinMax: 0,
        }
    }

    init = false

    componentDidMount() {
        const { mini = false } = this.props

        if (!mini) {
            // this.documentEventMouseMove = this.eventMouseMove.bind(this)
            this.documentEventMouseUp = this.eventMouseUp.bind(this)

            // document.addEventListener("mousemove", this.documentEventMouseMove)
            document.addEventListener("mouseup", this.documentEventMouseUp)
            // document.addEventListener("touchmove", this.documentEventMouseMove)
            // document.addEventListener("touchend", this.documentEventMouseUp)
        }

        this.initialize()
    }

    componentDidUpdate(prevProps, prevState) {
        const { dataset, visibled, layout, labels, arcMode, zoom } = this.props
        const { step, graphOffset, graphMinMax, visibility, graphScale, showInfo, mouse, selectArc } = this.state

        if (prevProps.arcMode !== arcMode) {
            // console.log("change arc mode: ", prevProps.arcMode, arcMode)

            if (arcMode === false) {
                this.handleFadeInYAsix()
                this.handleFadeInXAsix()
                this.handleFadeOutArcs()
                this.handleFadeInAreas()
            } else {
                this.handleFadeInArcs()
                this.handleFadeOutYAsix()
                this.handleFadeOutXAsix()
                this.handleFadeOutAreas()
            }
        }

        if (prevProps.zoom !== zoom) {
            // console.log("change zoom: ", prevProps.zoom, zoom)

            this.setState({
                selectArc: false
            })
        }

        const {
            layout: { width = 0, height = 0 },
            limit,
            offset,
            scroll,
            colors,
            id,
        } = this.props

        if (id !== prevProps.id) {
            this.setState({
                showInfo: false,
            })
        }

        if (
            prevProps.visibled !== visibled ||
            prevProps.dataset !== dataset ||
            prevProps.layout.width !== layout.width ||
            prevProps.layout.height !== layout.height ||
            prevProps.limit !== limit ||
            prevProps.offset !== offset
        ) {
            if (
                prevProps.layout.width !== width ||
                prevProps.layout.height !== height
            ) {
                this.canvas.resize(width, height)
            }

            if (prevProps.dataset !== dataset) {
                const prevDatasets = prevProps.dataset
                    .filter(item => !dataset.some(_item => _item.uid === item.uid))

                if (prevDatasets.length > 0) this.handleFadeOutDatasets(prevDatasets, this.calcDrawParams())

                // const minMax = this.findMinMax()

                // this.updateGraphOptions(minMax, 0)

                // this.setState({
                //     visibility: dataset.reduce((_v, item) => ({..._v, [item.id]: 0}), {})
                // })

                this.handleApplyVisibility(visibled)
            } else {
                if (prevProps.visibled !== visibled) {
                    this.handleApplyVisibility(visibled)
                }
            }

            this.reInit()
        }

        if (
            prevState.step !== step ||
            prevState.graphOffset.top !== graphOffset.top ||
            prevState.graphOffset.bottom !== graphOffset.bottom ||
            prevState.graphOffset.left !== graphOffset.left ||
            prevState.graphOffset.right !== graphOffset.right ||
            prevProps.scroll !== scroll ||
            prevProps.width !== width ||
            prevProps.colors !== colors ||
            prevProps.labels !== labels ||
            prevState.graphMinMax !== graphMinMax ||
            prevState.graphScale !== graphScale ||
            prevState.showInfo !== showInfo ||
            prevState.visibility !== visibility ||
            prevState.mouse !== mouse ||
            prevState.selectArc !== selectArc ||
            prevProps.zoom !== zoom
        ) {
            if (prevState.selectArc !== selectArc) {
                if (selectArc) this.handleFadeInSelectArc(selectArc)
                if (prevState.selectArc) this.handleFadeOutSelectArc(prevState.selectArc)
            }
            // this.draw()

            this.needDraw = true
        }
    }

    componentWillUnmount() {
        const { mini = false } = this.props

        if (!mini) {
            // document.removeEventListener("mousemove", this.documentEventMouseMove)
            document.removeEventListener("mouseup", this.documentEventMouseUp)
            // document.removeEventListener("touchmove", this.documentEventMouseMove)
            // document.removeEventListener("touchend", this.documentEventMouseUp)
        }

        if (this.cart) {
            this.cart.destroy()
            this.cart = null
        }

        if (this.cartMiniMap) {
            this.cartMiniMap.destroy()
            this.cartMiniMap = null
        }
    }

    initialize = () => {
        // this.log.push("initialize")

        const { layout, visibled } = this.props

        this.handleApplyVisibility(visibled)

        this.canvas = new Canvas(this.canvasNode, {
            ...layout,
        })

        this.calc()

        this.init = true

        requestAnimationFrame(this.reDraw)
    }

    timeFactor = 1

    time = 0

    reDraw = (time) => {
        // if (this.time !== 0 && time - this.time < 1000)
        // {
        //     return;
        // }

        this.time = time / this.timeFactor

        this.animations = this.animations
            .filter(item => item !== false)

        if (this.animations.length > 0 || this.needDraw) {
            for (let index = 0; index < this.animations.length; index++) {
                const animation = this.animations[index]

                if (animation !== false) {
                    const timePassed = this.time - animation.startAt
                    const progress = getAnimProgress(animation.startAt, animation.duration, this.time)

                    this.animations[index].progress = progress
                    this.animations[index].lastUpdateAt = this.time
                    this.animations[index].timePassed = timePassed

                    animation.step(animateEase(progress), timePassed, animation.duration)

                    if (progress === 1 || timePassed < -10000) {
                        if (progress < 1 && timePassed < -10000)
                        {
                            animation.step(1, timePassed, animation.duration)

                            console.warn("Incorrect animation timePassed", this.animations[index])
                        }

                        this.animations[index] = false
                    }
                }
            }

            this.draw()

            if (this.needDraw) {
                this.needDraw = false
            }
        }

        requestAnimationFrame(this.reDraw)
    }

    reInit = () => {
        this.calc()
    }

    updateState = params =>
        new Promise(ok => {
            this.setState(params, ok)
        })

    findMinMaxForLine(list, params = {}, def = {}) {
        let { min = 99999999999, max = 0 } = def

        const { offset = 0, limit = 0 } = params

        let maxIter = offset + limit

        if (maxIter === 0) maxIter = list.length

        for (let i = offset; i < list.length && i < maxIter; i += 1) {
            const v = list[i]

            min = v < min ? v : min
            max = v > max ? v : max
        }

        return [Math.floor(min), Math.ceil(max)]
    }

    findMinMaxForBars(dataset, params, def = {}) {
        let { min = 99999999999, max = 0 } = def

        const { visibled = [], offset = 0, limit = 0 } = params

        let maxIter = offset + limit

        if (maxIter === 0) maxIter = dataset[0].list.length

        for (let index = offset; index < dataset[0].list.length && index < maxIter; index += 1) {
            let v = 0
            
            dataset
                .filter(item => visibled.includes(item.id))
                .forEach(item => {
                    v += item.list[index]

                    min = item.list[index] < min ? item.list[index] : min
                })

            // min = v < min ? v : min
            max = v > max ? v : max
        }

        return [Math.floor(min), Math.ceil(max)]
    }

    findMinMax() {
        const { dataset = [], visibled = [], offset, limit } = this.props

        let min = 99999999
        let max = 0

        const items = {}

        if (dataset.length > 0) {
            dataset
                .filter(item => item.type === "line")
                .forEach(item => {
                    const { id, list } = item
                    
                    const minMax = this.findMinMaxForLine(list, { offset, limit })
    
                    items[id] = minMax
    
                    if (visibled.includes(id)) {
                        min = minMax[0] < min ? minMax[0] : min
                        max = minMax[1] > max ? minMax[1] : max
                    }
                })

            const bars = dataset
                .filter(item => item.type === "bar" || item.type === "area")

            if (bars.length > 0) {
                const minMax = this.findMinMaxForBars(bars, { visibled, offset, limit })

                min = minMax[0] < min ? minMax[0] : min
                max = minMax[1] > max ? minMax[1] : max
            }
        } else {
            min = 0
            max = 10
        }

        return {
            common: [Math.floor(min), Math.ceil(max)],
            ...items
        }
    }

    findAbsoluteMinMax() {
        const { dataset = [], visibled = [] } = this.props

        let min = 99999999
        let max = 0

        if (dataset.length > 0) {
            dataset
                .filter(item => item.type === "line")
                .forEach(item => {
                    const { id, list } = item

                    const minMax = this.findMinMaxForLine(list)

                    if (visibled.includes(id)) {
                        min = minMax[0] < min ? minMax[0] : min
                        max = minMax[1] > max ? minMax[1] : max
                    }
                })

            const bars = dataset
                .filter(item => item.type === "bar" || item.type === "area")

            if (bars.length > 0) {
                const minMax = this.findMinMaxForBars(bars, { visibled })

                min = minMax[0] < min ? minMax[0] : min
                max = minMax[1] > max ? minMax[1] : max
            }
        } else {
            min = 0
            max = 10
        }

        return [min, max]
    }

    transformPositions(x, y, params = {}) {
        const {
            height = 0,
            minMaxY: { min: minY },
            scale: { x: scaleX, y: scaleY },
        } = params

        const {
            graphOffset: { left, bottom },
        } = this.state

        const zY = y - minY

        const nY = height - zY * scaleY - bottom

        const nX = left + x * scaleX

        return {
            x: nX,
            y: nY,
        }
    }

    nAsix(x, y, yType = "common") {
        // const {
        //     layout: { height = 0 },
        // } = this.props

        // const {
        //     graphMinMax,
        //     graphScale,
        //     graphOffset: { left, bottom },
        // } = this.state

        // const [min] = graphMinMax[yType]
        // const scale = graphScale[yType]

        // const zY = y - min

        // const nY = height - zY * scale - bottom

        // const nX = left + x * graphScale.x

        // return {
        //     x: nX,
        //     y: nY,
        // }

        const {
            layout: { height = 0 },
        } = this.props

        const {
            graphMinMax,
            graphScale,
        } = this.state

        const [min, max] = graphMinMax[yType]

        return this.transformPositions(x, y, {
            height,
            minMaxY: { min, max },
            scale: { x: graphScale.x, y: graphScale[yType] },
        })
    }

    updateAnimateYLines = throttle((animateYLines) => {
        this.setState({
            graphScale: {
                ...this.state.graphScale,
                animateYLines,
            }
        })
    }, 10)

    getHeightGraph() {
        const { layout } = this.props

        const { graphOffset: { top, bottom } } = this.state

        return layout.height - top - bottom
    }

    getWidthGraph() {
        const { layout } = this.props

        const { graphOffset: { left, right } } = this.state

        return layout.width - left - right
    }

    setGraphOptions(minMax, options, layout) {
        const { scroll = 0, limit = 0, length, animateYLines } = options
        const { width } = layout

        const heightGraph = this.getHeightGraph()
        const widthGraph = this.getWidthGraph()
        
        const scales = {}

        if (animateYLines !== undefined) {
            scales.animateYLines = animateYLines
        }

        Object.keys(minMax).forEach(minmax_id => {
            const [min, max] = minMax[minmax_id]

            const delta = max - min
            const scale = delta > 0 ? heightGraph / delta : 1

            scales[minmax_id] = scale
        })

        const scaleX = widthGraph / width

        const step = Charts.calcXStep({
            width,
            limit,
            length,
        })

        const fullWidth = step * length

        // this.log.push(["setGraphOptions", {
        //     heightGraph,
        //     widthGraph,
        //     scaleX,
        //     scales,
        //     width,
        //     limit,
        //     length,
        // }])

        this.setState({
            step,
            graphMinMax: minMax,
            graphScale: {
                ...this.state.graphScale,
                ...scales,
                x: scaleX
            },
            graphLayout: {
                ...this.state.graphLayout,
                width: widthGraph,
                height: heightGraph,
                fullWidth,
                offsetPx: (fullWidth * (scroll - limit)) / 100
            },
        })
    }

    updateGraphOptions = (minMax, animateYLines) => {
        // this.log.push(["updateGraphOptions", minMax, animateYLines])

        const { scroll, width, layout } = this.props

        const length = this.getLength()

        this.setGraphOptions(
            minMax,
            { scroll, limit: width, length, animateYLines },
            layout,
        )
    }

    animationInterval = false

    getLength() {
        const { dataset = [] } = this.props

        return Math.max(...dataset.map(item => item.list.length))
    }

    lastMinMax = [0, 0]

    calc() {
        const { dataset = [], visibled = [], yScaled = false, animateScale = true } = this.props

        this.absoluteMinMax = this.findAbsoluteMinMax()
        
        const minMax = this.findMinMax()

        // this.log.push(["calc", minMax])

        if (animateScale) {
            if (!yScaled) {
                this.handleAnimScale("common", minMax, 400, true)
            } else {
                dataset
                    .filter(item => visibled.includes(item.id))
                    .forEach((item, index) => {
                        this.handleAnimScale(item.id, minMax, 400, index === 0)
                    })
            }
        } else {
            this.updateGraphOptions(minMax, 0)
        }

        // const { dataset = [], visibled = [], yScaled = false } = this.props

        // const minMax = this.findMinMax()

        // if (!yScaled) {
        //     this.handleScale("common", minMax)
        // } else {
        //     dataset
        //         .filter(item => visibled.includes(item.id))
        //         .forEach(item => {
        //             this.handleScale(item.id, minMax)
        //         })
        // }

        // this.updateGraphOptions(minMax)

        return true
    }

    calcArc(dataset, params = {}) {
        const {
            step,
            width,
            height,
            offsetPx,
            visibility = {},
            length = 0,
            opacity = 1,
            scale = 1,
            showInfo = false,
            showInfoShow = {},
            mouse: { pointX = 0, pointY = 0 },
        } = params

        dataset = dataset
            .filter(item => visibility[item.id] > 0)

        let sum = 0
        let data = {}

        for (let index = 0; index < length; index++) {
            const { x } = this.nAsix(index * step - offsetPx, 0)

            if (x >= 0 - (step * 2) && x <= width + (step * 2)) {

                dataset.forEach(item => {
                    let opacity = visibility[item.id]

                    const v = item.list[index] * opacity

                    if (!data[item.id]) data[item.id] = 0

                    data[item.id] += v

                    sum += v
                })
            }
        }

        let start_angle = 0
        const radiusArc = Math.round(Math.min(width / 2.3, height / 2.3)) * scale
        const radiusText = Math.round(radiusArc / 1.5) * scale
        const centerX = Math.round(width / 2)
        const centerY = Math.round(height / 2)

        let canvasObjList = []

        dataset.forEach(item => {
            const showVal = showInfoShow[item.id] || 1

            const v = data[item.id]

            let slice_angle = 2 * Math.PI * v / sum

            canvasObjList.push(new CanvasArc(
                centerX,
                centerY,
                radiusArc,
                start_angle,
                start_angle + slice_angle,
                {
                    id: item.id,
                    opacity: showInfo === item.id ? 0 : opacity,
                    color: item.color,
                    mouseX: pointX,
                    mouseY: pointY,
                }
            ))

            if (showInfo === item.id || showVal < 1) {
                let cX = centerX + 10 * Math.cos(start_angle + ((slice_angle / 2))) * showVal
                let cY = centerY + 10 * Math.sin(start_angle + ((slice_angle / 2))) * showVal

                canvasObjList.push(new CanvasArc(
                    cX,
                    cY,
                    radiusArc,
                    start_angle,
                    start_angle + slice_angle,
                    {
                        id: item.id,
                        opacity,
                        color: item.color,
                        mouseX: pointX,
                        mouseY: pointY,
                    }
                ))
            }

            start_angle += slice_angle
        })

        start_angle = 0

        dataset.forEach(item => {
            const showVal = showInfoShow[item.id] || 1

            const v = data[item.id]
            const precent = v / sum * 100

            let slice_angle = 2 * Math.PI * v / sum

            let rText = radiusText
            let size = 20

            // if (slice_angle * (180 / Math.PI) < 30) {
            //     size = 12
            //     rText = radiusArc - 20
            //     slice_angle += 0.03
            // }

            if (slice_angle * (180 / Math.PI) < 20) {
                size = 10
                rText = radiusArc - 20
                slice_angle += 0.03
            }

            if (slice_angle * (180 / Math.PI) < 10) {
                size = 8
                rText = radiusArc - 20
                // slice_angle += 0.03
            }

            if (precent > 20) {
                size = 25
                rText -= 2.5
                // slice_angle -= 0.03
            }

            if (precent > 30) {
                size = 30
                rText -= 5
                // slice_angle -= 0.03
            }

            if (precent > 40) {
                size = 35
                rText -= 10
                // slice_angle -= 0.03
            }

            if (showInfo === item.id || showVal < 1) {
                rText += (10 * showVal)
            }

            if (slice_angle * (180 / Math.PI) > 8) {
                const textX = rText * Math.cos(start_angle + (slice_angle / 2)) + centerX
                const textY = rText * Math.sin(start_angle + (slice_angle / 2)) + centerY

                canvasObjList.push(new CanvasText(`${Math.round(precent)}%`, {
                    x: textX,
                    y: textY,
                    opacity,
                    size: size * scale,
                    align: "center",
                    color: "#fff",
                    font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
                }))
            }


            start_angle += slice_angle
        })

        return canvasObjList
    }

    calcBars(dataset, params = {}) {
        const {
            step,
            width,
            height,
            minMaxY: { max: maxY },
            offsetPx,
            visibility = {},
            length = 0,
            scale = {},
            opacity: fullOpacity = 1,
            nativeOpacity = false,
        } = params

        const { x: scaleX = 1, y: scaleY = 1 } = scale

        const {
            graphOffset: { top, left, right },
            showInfo = false,
        } = this.state

        const { mode = MODE_COLOR_DAY } = this.props

        dataset = dataset
            .filter(item => visibility[item.id] > 0)

        const canvasObjList = []

        for (let index = 0; index < length; index++) {
            const { x } = this.nAsix(index * (step * scaleX) - (offsetPx * scaleX), 0)

            if (x >= 0 - (left * 2) && x <= left + width + (right * 2)) {
                let sum = 0

                dataset.forEach(item => {
                    const v = item.list[index]

                    let opacity = visibility[item.id]

                    sum += v * opacity
                    // sum += v
                })

                let additionalOffset = 2

                dataset.forEach(item => {
                    let opacity = visibility[item.id]

                    const v = item.list[index] * opacity

                    let percent = v > 0 ? v * 100 / sum : 0

                    if (percent < 2 && percent > 0) {
                        additionalOffset += 2
                    }
                })

                const offsetTopPercent = 100 - (sum * 100 / maxY) + additionalOffset
                const offsetTopPx = height * offsetTopPercent / 100

                const iterHeight = height - offsetTopPx
                let yOffset = 0

                dataset.forEach(item => {
                    let opacity = visibility[item.id]

                    const v = item.list[index] * opacity

                    let percent = v > 0 ? v * 100 / sum : 0

                    if (percent < 2 && percent > 0) percent = 2

                    if (percent > 0) {
                        const barHeight = iterHeight * percent / 100

                        if (showInfo !== false) {
                            if (showInfo === index) {
                                opacity = 1

                                if (fullOpacity < 1) {
                                    opacity = fullOpacity
                                }
                            } else {
                                opacity = 0.4
                            }
                        } else {
                            if (fullOpacity < 1) {
                                opacity = fullOpacity
                            }
                        }

                        let { color } = item

                        if (nativeOpacity) {
                            if (mode === MODE_COLOR_NIGHT) {
                                color = Charts.getDarknessColor(color, opacity)
                            } else {
                                let rgb = hexToRgb(color)

                                if (opacity < 1) {
                                    color = `rgba(${rgb.r},${rgb.g},${rgb.b},${opacity})`
                                } else {
                                    color = `rgba(${rgb.r},${rgb.g},${rgb.b},1)`
                                }
                            }
                        } else {
                            let rgb = hexToRgb(color)
    
                            if (mode === MODE_COLOR_NIGHT) {
                                const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
    
                                const darknessRgb = hslToRgb(hsl[0], hsl[1] - 0.18, hsl[2])
    
                                rgb.r = Math.round(darknessRgb[0])
                                rgb.g = Math.round(darknessRgb[1])
                                rgb.b = Math.round(darknessRgb[2])
    
                                if (rgb.r > 255) rgb.r = 255
                                if (rgb.g > 255) rgb.g = 255
                                if (rgb.b > 255) rgb.b = 255
                            }
    
                            if (opacity < 1) {
                                const Bkg = mode === MODE_COLOR_NIGHT ? 0 : 255
    
                                let rO = Math.round(rgb.r * opacity + Bkg * (1 - opacity))
                                let gO = Math.round(rgb.g * opacity + Bkg * (1 - opacity))
                                let bO = Math.round(rgb.b * opacity + Bkg * (1 - opacity))
    
                                if (rO > 255) rO = 255
                                if (gO > 255) gO = 255
                                if (bO > 255) bO = 255
    
                                color = `rgb(${rO},${gO},${bO})`
                            } else {
                                color = `rgb(${rgb.r},${rgb.g},${rgb.b})`
                            }
                        }

                        canvasObjList.push(new CanvasRect(
                            Math.ceil(x),
                            (height - (barHeight + yOffset) + top), 
                            {
                                width: Math.ceil(step * scaleX),
                                height: barHeight * scaleY,
                                color,
                                fill: true,
                            }
                        ))

                        yOffset += barHeight
                    }

                })
            }
        }

        return canvasObjList
    }

    calcAreas(dataset, params = {}) {
        const {
            step,
            width,
            height,
            offsetPx,
            visibility = {},
            length = 0,
            opacity: allOpacity = 1,
            scale = 1,
        } = params

        const {
            graphOffset: { top, left, right },
        } = this.state

        const { mode = MODE_COLOR_DAY } = this.props

        dataset = dataset
            .filter(item => visibility[item.id] > 0)

        const paths = {}

        const canvasObjList = []

        for (let index = 0; index < length; index++) {
            const { x } = this.nAsix(index * step - offsetPx, 0)

            if (x >= 0 - (left * 2) && x <= left + width + (right * 2)) {
                let sum = 0

                dataset.forEach(item => {
                    const v = item.list[index]

                    let opacity = visibility[item.id]

                    sum += v * opacity
                })

                let yOffset = 0

                dataset.forEach(item => {
                    let opacity = visibility[item.id]

                    const v = item.list[index] * opacity

                    const percent = v * 100 / sum

                    const barHeight = (height * percent / 100) * (1 / scale)

                    if (!paths[item.id]) paths[item.id] = []

                    paths[item.id].push({
                        x,
                        y: height - (barHeight + yOffset) + top,
                    })

                    yOffset += barHeight
                })
            }
        }

        for (let index = dataset.length - 1; index >= 0; index -= 1) {
            const item = dataset[index]
            const itemPaths = paths.hasOwnProperty(item.id) ? paths[item.id] : []

            let opacity = visibility[item.id]

            if (allOpacity < 1) {
                opacity = allOpacity
            }

            let { color } = item

            if (mode === MODE_COLOR_NIGHT) {
                color = Charts.getDarknessColor(color, opacity)
            } else {
                let rgb = hexToRgb(color)

                if (opacity < 1) {
                    color = `rgba(${rgb.r},${rgb.g},${rgb.b},${opacity})`
                } else {
                    color = `rgba(${rgb.r},${rgb.g},${rgb.b},1)`
                }
            }

            const path = new CanvasPath({
                color,
                opacity,
                lineWidth: params.lineWidth,
            })

            const positionLast = this.nAsix(width, height)

            const positionStart = itemPaths[0]
            const positionEnd = itemPaths[itemPaths.length - 1]

            path.moveTo(positionStart.x, positionLast.y)

            for (let index = 0; index < itemPaths.length; index++) {
                const { x, y } = itemPaths[index]

                path.lineTo(x, y)
            }

            path.lineTo(positionEnd.x, positionLast.y)

            path.fill()

            canvasObjList.push(path)
        }

        return canvasObjList
    }

    calcLine(list, params) {
        const { yScaled = false } = this.props

        const {
            graphOffset: { left, right },
        } = this.state

        const {
            offsetPx,
            scale = {},
            nAsix,
            width,
        } = params

        const { x: scaleX = 1, y: scaleY = 0 } = scale

        let canvasObjList = []

        const path = new CanvasPath({
            color: params.color,
            opacity: params.opacity,
            lineWidth: params.lineWidth,
        })

        for (let index = 0; index < list.length; index++) {
            const item = list[index]

            const yType = yScaled ? params.id : "common"

            const { x, y } = nAsix(index * (params.step * scaleX) - (offsetPx * scaleX), item, yType)

            if (x >= 0 - ((left * 2) * scaleX) && x <= (left + width + (right * 2) * scaleX)) {
                if (index === 0) {
                    path.moveTo(x, y + scaleY)
                } else {
                    path.lineTo(x, y + scaleY)
                }
            }
        }

        path.stroke()

        canvasObjList.push(path)

        return canvasObjList
    }

    calcLines(dataset, params = {}) {
        const { mode = MODE_COLOR_DAY } = this.props

        const {
            step,
            visibility = {},
            lineWidth = 3,
            allowPointValue = false,
            scale,
            opacity: fullOpacity = 1,
            nAsix,
            width,
            offsetPx,
        } = params

        let canvasObjList = []

        for (let index = 0; index < dataset.length; index++) {
            const data = dataset[index]

            let { color } = data
            let opacity = visibility[data.id]

            if (fullOpacity < 1)
            {
                opacity = fullOpacity
            }

            if (mode === MODE_COLOR_NIGHT) {
                color = Charts.getDarknessColor(color, opacity)
            } else {
                let rgb = hexToRgb(color)

                if (opacity < 1) {
                    color = `rgba(${rgb.r},${rgb.g},${rgb.b},${Math.ceil(opacity * 100) / 100})`
                } else {
                    color = `rgba(${rgb.r},${rgb.g},${rgb.b},1)`
                }
            }

            canvasObjList = [
                ...canvasObjList,
                ...this.calcLine(data.list, {
                    offsetPx,
                    width,
                    nAsix,
                    id: data.id,
                    scale,
                    color,
                    step,
                    lineWidth,
                    drawPointValue: allowPointValue,
                })
            ]
        }

        return canvasObjList
    }

    drawGraphs(dataset, params = {}) {
        const { arcMode = false } = this.props

        const areas = dataset.filter(item => item.type === "area")
        const bars = dataset.filter(item => item.type === "bar")
        const lines = dataset.filter(item => item.type === "line")

        let canvasArcs = []

        if (arcMode !== false || this.isTypeAnimating("anim-arcs")) {
            const {
                arcsScale: scale = 1,
                arcsOpacity: opacity = 1,
                selectArcShow: showInfoShow = {}
            } = this.state.animationsValues

            canvasArcs = this.calcArc(areas, {
                ...params,
                scale,
                opacity,
                showInfoShow,
                showInfo: params.selectArc,
                alloShowInfo: arcMode !== false,
            })
        }

        const canvasBars = this.calcBars(bars, params)
        let canvasAreas = []

        if (arcMode === false || this.isTypeAnimating("anim-area")) {
            const { areaScale: scale = 1, areaOpacity = 1 } = this.state.animationsValues

            canvasAreas = this.calcAreas(areas, {
                ...params,
                scale,
                opacity: areaOpacity,
            })
        }

        const canvasLines = this.calcLines(lines, params)

        return [
            ...canvasLines,
            ...canvasBars,
            ...canvasAreas,
            ...canvasArcs,
        ]
    }

    createYLabels(type, graphMinMax, cHeight, color, pos = "start", withLines = true) {
        const {
            colors,
            layout: { width, height },
        } = this.props

        const {
            graphOffset: { asixX = 0, asixY = 0 },
            animationsValues: { yAsixOpacity: opacity = 1 },
        } = this.state

        const [min, max] = graphMinMax[type]

        const canvasObjects = []

        // y labels
        const deltaY = max - min

        const yLabelStep = 6

        const yLabelHeightStep = deltaY > 0 ?
            deltaY / yLabelStep :
            height / yLabelStep

        const yLabelValueStep = deltaY / yLabelStep

        const dir = cHeight >= 0 ? 1 : -1
        cHeight = Math.abs(cHeight)

        const zoomFrom = this.zoomFactor
        const zoomTo = 1 - this.zoomFactor

        const transformY = dir === 1 ?
            (y) => (y * (zoomFrom + (zoomTo * cHeight))) :
            (y) => {
                return cHeight > 0 ? (y / (zoomFrom + (zoomTo * cHeight))) : 0
            }

        // for (let index = -25; index < 25; index += 1) {
        for (let index = -5; index < yLabelStep + 5; index += 1) {
            const positionStart = this.nAsix(0, yLabelHeightStep * index + min, type)
            const positionEnd = this.nAsix(width, yLabelHeightStep * index + min, type)

            const text = Math.floor(yLabelValueStep * index + min)

            const y = transformY(positionStart.y)

            canvasObjects.push(
                new CanvasText(abbreviateNumber(text), {
                    x: pos === "start" ? positionStart.x + asixX : positionEnd.x,
                    y: y - 10 + asixY /*+ cHeight*/,
                    align: pos,
                    color,
                    opacity: opacity < 1 ? opacity : colors.textOpacity,
                    font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
                    size: 12,
                }),
            )
            
            if (withLines) {
                canvasObjects.push(
                    new CanvasLine(
                        {
                            x: positionStart.x + asixX,
                            y: y + asixY,
                        },
                        {
                            x: positionEnd.x,
                            y: y + asixY,
                        },
                        {
                            color: index > 0 ? colors.lines : colors.lastLine,
                            opacity: opacity < 1 ? opacity : colors.lineOpacity,
                            lineWidth: 1,
                        },
                    ),
                )
            }
        }

        return canvasObjects
    }

    createPercentYLabels(color, pos = "start") {
        const {
            colors,
            layout: { width },
        } = this.props

        const height = this.getHeightGraph()

        const {
            graphOffset: {top, asixX = 0, asixY = 0 },
            animationsValues: { yAsixOpacity: opacity = 1 },
        } = this.state

        const step = height / 4
        const valueStep = 100 / 4

        const canvasObjects = []

        // for (let index = -25; index < 25; index += 1) {
        for (let index = 0; index < 5; index += 1) {
            const positionStart = this.nAsix(0, step * index)
            const positionEnd = this.nAsix(width, step)

            const text = Math.floor(valueStep * index)

            const y = height - step * index + top

            canvasObjects.push(
                new CanvasText(abbreviateNumber(text), {
                    x: pos === "start" ? positionStart.x + asixX : positionEnd.x,
                    y: y - 10 + asixY /*+ cHeight*/,
                    align: pos,
                    color,
                    opacity: opacity < 1 ? opacity : colors.textOpacity,
                    font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
                    size: 12,
                }),
            )

            canvasObjects.push(
                new CanvasLine(
                    {
                        x: positionStart.x + asixX,
                        y: y + asixY,
                    },
                    {
                        x: positionEnd.x,
                        y: y + asixY,
                    },
                    {
                        color: index > 0 ? colors.lines : colors.lastLine,
                        opacity: opacity < 1 ? opacity : colors.lineOpacity,
                        lineWidth: 1,
                    },
                ),
            )
        }

        return canvasObjects
    }

    getYLabels() {
        const {
            yScaled = false,
            dataset = [],
            visibled = [],
            colors,
            percentage = false,
        } = this.props

        if (percentage === false) {
            const {
                graphMinMax,
                graphScale: { animateYLines },
            } = this.state
    
            if (!yScaled) {
                return this.createYLabels("common", graphMinMax, animateYLines, colors.text, "start")
            } else {
                let canvasObjects = []
    
                dataset
                    .filter(item => visibled.includes(item.id))
                    .forEach((item, index) => {
                        canvasObjects = [
                            ...canvasObjects,
                            ...this.createYLabels(item.id, graphMinMax, animateYLines, item.color, index === 0 ? "start" : "end", index === 0 ),
                        ]
                    })
    
                return canvasObjects
            }
        } else {
            return this.createPercentYLabels(colors.text, "start")
        }
    }

    drawDebugInfo() {
        const {
            layout,
            offset,
            limit,
            scroll,
            width,
        } = this.props

        const {
            graphMinMax: { minY, maxY },
            graphScale,
            graphOffset: { left, top, right, bottom },
            step,
        } = this.state

        this.canvas.rect(0, 0, {
            width: 300,
            height: 150,
            color: "rgba(0, 0, 0, 0.5)",
            fill: true,
        })

        this.canvas.text(`Min/Max Y: ${minY} / ${maxY}`, {
            x: 10,
            y: 20,
            align: "start",
            color: "white",
            size: 14,
            font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
        })

        this.canvas.text(`Scale X/Y: ${graphScale.x} / ${graphScale.y}`, {
            x: 10,
            y: 40,
            align: "start",
            color: "white",
            size: 14,
            font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
        })

        this.canvas.text(
            `Offset L/T/R/B: ${left}px / ${top}px / ${right}px / ${bottom}px`,
            {
                x: 10,
                y: 60,
                align: "start",
                color: "white",
                size: 14,
                font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
            },
        )

        this.canvas.text(`Width/Height: ${layout.width.toFixed(2)}px / ${layout.height.toFixed(2)}px`, {
            x: 10,
            y: 80,
            align: "start",
            color: "white",
            size: 14,
            font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
        })

        this.canvas.text(`Step: ${step}px`, {
            x: 10,
            y: 100,
            align: "start",
            color: "white",
            size: 14,
            font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
        })

        this.canvas.text(`Offset/Limit: ${offset} / ${limit}`, {
            x: 10,
            y: 120,
            align: "start",
            color: "white",
            size: 14,
            font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
        })

        this.canvas.text(
            `Offset/Limit (%): ${scroll.toFixed(2)} / ${width.toFixed(2)}`,
            {
                x: 10,
                y: 140,
                align: "start",
                color: "white",
                size: 14,
                font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
            },
        )
    }

    time = new Date()

    drawFpsInfo() {
        const time2 = new Date
        const fps = 1000 / (time2 - this.time)
        this.time = time2

        this.canvas.rect(0, 0, {
            width: 100,
            height: 50,
            color: "rgba(0, 0, 0, 0.5)",
            fill: true,
        })

        this.canvas.text(`FPS: ${Math.ceil(fps / 10) * 10}`, {
            x: 10,
            y: 20,
            align: "start",
            color: "white",
            size: 14,
            font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
        })
    }

    additionalDraw = []

    calcDrawParams() {
        const {
            step,
            visibility = {},
            graphMinMax,
            graphLayout: { offsetPx },
            mouse,
            selectArc,
        } = this.state

        const {
            visibled = [],
            allowPointValue,
            lineWidth = 3,
            layout: { height = 0 },
        } = this.props

        const {
            graphScale,
        } = this.state

        const nAsix = (x, y, yType) => {
            const [min, max] = graphMinMax[yType]
            
            return this.transformPositions(x, y, {
                height,
                minMaxY: { min, max },
                scale: { x: graphScale.x, y: graphScale[yType] },
            })
        }

        return {
            nAsix,
            selectArc,
            mouse,
            step,
            visibled,
            visibility,
            lineWidth,
            allowPointValue,
            offsetPx,
            width: this.getWidthGraph(),
            height: this.getHeightGraph(),
            minMaxY: { max: graphMinMax.common[1] },
        }
    }

    calcDraw({ arcMouseMove = false }) {
        const {
            dataset = [],
            allowYAsix,
        } = this.props

        let yLabesCanvasObjects = []

        if (allowYAsix) {
            yLabesCanvasObjects = this.getYLabels()
        }

        const graphParams = this.calcDrawParams()

        let canvasObjList = []

        const datasetBeforeLines = dataset.filter(item => item.type === "bar" || item.type === "area")

        if (datasetBeforeLines.length > 0 && datasetBeforeLines[0].list.length > 0) {
            canvasObjList = [
                ...canvasObjList,
                ...this.drawGraphs(datasetBeforeLines, {
                    ...graphParams,
                    length: datasetBeforeLines[0].list.length,
                }),
            ]
        }

        this.additionalDraw
            .filter(item => item[0] === "beforeLines")
            .forEach(item => {
                canvasObjList = [
                    ...canvasObjList,
                    ...item[1],
                ]
            })

        yLabesCanvasObjects
            .filter(cnvsObj => cnvsObj instanceof CanvasLine)
            .forEach(cnvsObj => canvasObjList.push(cnvsObj))

        const datasetAfterLines = dataset.filter(item => item.type !== "bar" && item.type !== "area")

        if (datasetAfterLines.length > 0 && datasetAfterLines[0].list.length > 0) {
            canvasObjList = [
                ...canvasObjList,
                ...this.drawGraphs(datasetAfterLines, {
                    ...graphParams,
                    length: datasetAfterLines[0].list.length,
                }),
            ]
        }

        const additionalAfterLines = this.additionalDraw
            .filter(item => item[0] === "afterLines")
        
        additionalAfterLines.forEach(item => {
            canvasObjList = [
                ...canvasObjList,
                ...item[1],
            ]
        })

        yLabesCanvasObjects
            .filter(cnvsObj => cnvsObj instanceof CanvasText)
            .forEach(cnvsObj => canvasObjList.push(cnvsObj))

        canvasObjList.forEach(item => {
            if (item instanceof CanvasArc) {
                item.params.mouseMove = arcMouseMove
            }
        })

        this.additionalDraw = []

        return canvasObjList
    }

    draw() {
        const { 
            showInfo = false,
            animationsValues: { xAsixOpacity: opacity = 100 },
            selectArc = false,
        } = this.state

        const {
            allowXAsix,
            arcMode = false,
        } = this.props

        this.canvas.clear()

        if (allowXAsix) {
            const { id, scroll, labels, layout, width } = this.props

            const { graphLayout } = this.state

            this.labelX.setProps({
                id,
                width,
                scroll,
                labels,
                layout,
                graphLayout,
                opacity,
            })
        }

        let hoverId = false

        let canvasObjList = this.calcDraw({
            arcMouseMove: (item_id) => {
                hoverId = item_id
            }
        })

        canvasObjList
            .forEach(cnvsObj => this.canvas.draw(cnvsObj))

        if (arcMode) {
            if (hoverId !== false && selectArc !== hoverId) {
                setTimeout(() => {
                    this.setState({
                        selectArc: hoverId
                    })
                }, 1)
            } else if (hoverId === false && selectArc !== hoverId) {
                setTimeout(() => {
                    this.setState({
                        selectArc: false
                    })
                }, 1)
            }
        }

        if (this.props.debug) this.drawDebugInfo()
        if (this.props.fps) this.drawFpsInfo()

        if (showInfo !== false) {
            this.drawShowInfo()
        } else {
            this.showInfoNode.setAttribute("style", `opacity: 0;top: -${this.props.layout.height}px;`)
        }

        this.drawSelectArc()
    }

    drawSelectArc() {
        const {
            dataset = [],
            layout,
        } = this.props

        const {
            step,
            graphLayout: { offsetPx },
            mouse: { pointX = 0, pointY = 0 },
            selectArc = false,
        } = this.state

        if (selectArc !== false) {
            const item = dataset.find(_i => _i.id === selectArc)
            
            if (item) {
                const width = this.getWidthGraph()

                let value = 0

                for (let index = 0; index < item.list.length; index++) {
                    const { x } = this.nAsix(index * step - offsetPx, 0)

                    if (x >= 0 - (step * 2) && x <= width + (step * 2)) {
                        value += item.list[index]
                    }
                }

                this.showSelectArc.innerHTML = `<div class="label">${item.label}</div><div class="value" style="color: ${item.color};">${value}</div>`

                let showArcX = pointX - 50
                let showArcY = pointY - this.showSelectArc.clientHeight - 30

                if (showArcX + this.showSelectArc.clientWidth + 30 > layout.width) {
                    showArcX = layout.width - this.showSelectArc.clientWidth - 30
                }

                if (showArcY < 0) {
                    showArcY = pointY + 30
                }

                this.showSelectArc.style = `opacity: 1;top: ${showArcY}px;left: ${showArcX}px;`
            }
        } else {
            this.showSelectArc.style = `opacity: 0;top: -${this.props.layout.height}px;`
        }
    }

    drawShowInfo() {
        const {
            scroll,
            labels = [],
            dataset = [],
            visibled = [],
            lineWidth,
            colors,
            layout,
            yScaled = false,
            stacked = false,
            percentage = false,
            zoomType = "none",
            zoom = false,
        } = this.props

        const { step, graphOffset, showInfo } = this.state

        const width = labels.length * step

        const offsetScroll = (width / 100) * (scroll - this.props.width)

        const index = showInfo

        const unixTimestamp = labels[index]

        const date = new Date(unixTimestamp)

        const month = MAP_MONTHS[date.getMonth()]
        const weekDay = MAP_WEEK_DAYS[date.getDay()]
        const day = date.getDate()

        let label = `${weekDay}, ${month} ${day}`

        if (zoom !== false && (zoomType === "byHours" || zoomType === "by3Days")) {
            const date = new Date(unixTimestamp)

            let hours = date.getHours()
            let minutes = date.getMinutes()

            if (`${hours}`.length === 1) hours = `0${hours}`
            if (`${minutes}`.length === 1) minutes = `0${minutes}`

            label = `${hours}:${minutes}`
        }

        const labelX = this.nAsix(index * step - offsetScroll, 0).x

        let values = dataset
            .filter(item => visibled.includes(item.id))
            // .filter(item => item.type === "line")
            .map(item => ({
                value: item.list[index],
                color: item.color,
                label: item.label,
                type: item.type,
                ...this.nAsix(index * step - offsetScroll, item.list[index], yScaled ? item.id : "common"),
            }))

        const sum = values
            .filter(item => item.type === "area" || item.type === "bar")
            .reduce((_s, item) => item.value + _s, 0)

        values = values.map(item => ({
            ...item,
            percent: item.type === "area" ? item.value * 100 / sum : null
        }))

        const lines = values
            .filter(item => item.type === "line")

        if (lines.length > 0) {
            this.canvas.line(
                {
                    x: labelX,
                    y: 0,
                },
                {
                    x: labelX,
                    y: layout.height - graphOffset.bottom,
                },
                {
                    color: colors.activeLine,
                    opacity: colors.activeLineOpacity,
                    lineWidth: 2,
                },
            )
    
            lines.forEach(value => {
                this.canvas.circle(value.x, value.y, 5, {
                    lineWidth: lineWidth + 2,
                    color: colors.background,
                    strokColor: value.color,
                })
            })
        }

        let showInfoX = index * step - offsetScroll + 10

        if (showInfoX < 0) {
            showInfoX = 0
        }

        this.showInfoNode.innerHTML = ""

        const rows = []

        for (let i = 0; i < values.length; i += 1) {
            const value = values[i]

            const classesRoot = [style.canvas__show_info__row__item]

            if (values.some(item => item.percent !== null) && values.length > 1) {
                classesRoot.push(style.canvas__show_info__row__item_with_percent)
            }

            rows.push(
                cre("div", {
                    className: classesRoot,
                    children: [
                        cre("div", {
                            className: style.canvas__show_info__row__item__percent,
                            text: Math.round(value.percent) + "%",
                        }),
                        cre("div", {
                            className: style.canvas__show_info__row__item__name,
                            text: value.label,
                        }),
                        cre("div", {
                            className: style.canvas__show_info__row__item__value,
                            style: `color: ${value.color}`,
                            text: numberFormat(value.value),
                        }),
                    ],
                }),
            )
        }

        if (stacked && percentage === false) {
            rows.push(
                cre("div", {
                    className: style.canvas__show_info__row__item,
                    children: [
                        cre("div", {
                            className: style.canvas__show_info__row__item__percent,
                            text: "100%",
                        }),
                        cre("div", {
                            className: style.canvas__show_info__row__item__name,
                            text: "All",
                        }),
                        cre("div", {
                            className: style.canvas__show_info__row__item__value,
                            text: numberFormat(sum),
                        }),
                    ],
                }),
            )
        }

        const children = [
            cre("div", {
                className: style.canvas__show_info__title__value,
                text: label,
            }),
        ]

        if (zoom === false && zoomType !== "none") {
            children.push(
                cre("div", {
                    className: style.canvas__show_info__title__zoom,
                    children: cre("div", {
                        className: style.canvas__show_info__title__zoom__icon,
                        style: `background-image: url(${ArrowIcon})`,
                    }),
                }),
            )
        }

        this.showInfoNode.appendChild(
            cre("div", {
                className: style.canvas__show_info__wrapper,
                children: [
                    cre("div", {
                        className: style.canvas__show_info__title,
                        children
                    }),
                    cre("div", {
                        className: style.canvas__show_info__rows,
                        children: rows
                    }),
                ],
            }),
        )

        if (showInfoX + this.showInfoNode.clientWidth + 30 > layout.width) {
            showInfoX = layout.width - this.showInfoNode.clientWidth - 30
        }

        this.showInfoNode.setAttribute("style", `opacity: 1;left: ${showInfoX}px`)
    }

    getLabelIndexByX(x) {
        const { step } = this.state

        const { labels = [] } = this.props

        const index = Math.round(x / step)

        if (index > 0 && index < labels.length) {
            return index
        }

        return false
    }

    getLabelIndexByRelativeX(x) {
        const {
            graphScale,
            graphLayout: { offsetPx },
            graphOffset: { left }
        } = this.state

        const index = this.getLabelIndexByX(offsetPx + ((x - left) / graphScale.x))

        return index
    }

    isEventInShowInfo(e) {
        const closestEl = e.target.closest(`.${style.canvas__show_info}`)
        return closestEl === this.showInfoNode
    }

    eventClickShowInfo(e) {
        if (this.mouseEnter && !this.mouseDown && !(e.touches && e.touches.length > 0)) {
            if (this.isShowInfo) {
                this.handleZoom()
            }
        }
    }

    eventStartShowInfo = e => {
        const currentPosition = getClickPosition(e)

        const x = currentPosition.x - this.element.offsetLeft

        const index = this.getLabelIndexByRelativeX(x)

        this.setState({
            showInfo: index,
        })
    }

    eventMouseDown = e => {
        const { arcMode = false } = this.props

        this.clickByShowInfo = this.isEventInShowInfo(e)
        this.mouseDown = true

        // console.log("eventMouseDown", this.clickByShowInfo)

        if (!this.isShowInfo && arcMode === false)
        {
            this.tapPosition = getClickPosition(e)
    
            this.isShowInfo = true
    
            this.eventStartShowInfo(e)
        }
    }

    eventTouchMove = e => {
        const { arcMode = false } = this.props

        const closestEl = e.target.closest(`.${style.canvas__show_info}`)
        const isNotOverShowInfo = closestEl != this.showInfoNode

        if (isNotOverShowInfo && this.isShowInfo && arcMode === false) {
            this.eventStartShowInfo(e)
        }
    }

    eventUpdateMouse = (e) => {
        const currentPosition = getClickPosition(e, this.element)

        if (
            currentPosition.x !== this.state.mouse.pointX ||
            currentPosition.y !== this.state.mouse.pointY
        ) {
            this.setState({
                mouse: {
                    pointX: currentPosition.x,
                    pointY: currentPosition.y,
                }
            })
        }
    }

    eventMouseMove = e => {
        const { arcMode = false } = this.props

        const closestEl = e.target.closest(`.${style.canvas__show_info}`)
        const isNotOverShowInfo = closestEl != this.showInfoNode

        if (isNotOverShowInfo && this.isShowInfo && arcMode === false) {
            this.eventStartShowInfo(e)
        }
        
        this.eventUpdateMouse(e)
    }

    eventMouseUp = (e) => {
        const { arcMode = false } = this.props

        const closestEl = e.target.closest(`.${style.canvas_wrapper}`)
        const isOutside = closestEl != this.element

        // console.log("[Charts][Event: MouseUp]", { isOutside }, e)

        if (arcMode === false) {
            if (isOutside) {
                if (this.isShowInfo) {        
                    // const currentPosition = getClickPosition(e)
        
                    // if (Math.abs(currentPosition.x - this.tapPosition.x) < +this.state.step.toFixed(2)) {
                    //     this.eventStartShowInfo(e, this.prevShowInfo)
                    // }
        
                    this.isShowInfo = false
        
                    this.setState({
                        showInfo: false,
                    })
                }
            } else {
                if (this.isShowInfo && this.clickByShowInfo) {
                    this.handleZoom()
                }
            }
        }

        this.clickByShowInfo = false
        this.mouseDown = false
    }

    eventMouseLeave = () => {
        const { arcMode = false } = this.props

        this.mouseEnter = false
        // console.log("eventMouseLeave", this.mouseEnter)

        if (this.isShowInfo && arcMode === false) {
            // const currentPosition = getClickPosition(e)

            // if (Math.abs(currentPosition.x - this.tapPosition.x) < +this.state.step.toFixed(2)) {
            //     this.eventStartShowInfo(e, this.prevShowInfo)
            // }

            this.isShowInfo = false

            this.setState({
                showInfo: false,
            })
        }
    }

    eventMouseEnter = (e) => {
        const { arcMode = false } = this.props

        this.mouseEnter = true
        // console.log("eventMouseEnter", this.mouseEnter)

        if (!this.isShowInfo && arcMode === false) {
            this.isShowInfo = true

            this.eventStartShowInfo(e)
        }
    }

    getLabelText(unixTimestamp) {
        const { zoom = false, zoomType = "none" } = this.props

        if (zoom !== false && (zoomType === "byHours" || zoomType === "by3Days")) {
            const date = new Date(unixTimestamp)

            let hours = date.getHours()
            let minutes = date.getMinutes()

            if (`${hours}`.length === 1) hours = `0${hours}`
            if (`${minutes}`.length === 1) minutes = `0${minutes}`

            const dateFormat = `${hours}:${minutes}`

            return dateFormat
        } else {
            const date = new Date(unixTimestamp)
    
            const month = MAP_MONTHS[date.getMonth()]
            const day = date.getDate()
    
            const dateFormat = `${month} ${day}`
    
            return dateFormat
        }
    }

    createAnimation(type, step, duration = 300, clear = true) {
        if (clear) {
            this.animations = this.animations
                .filter(item => item.type !== type)
        }

        const now = performance.now() / this.timeFactor

        this.animations.push({
            type,
            startAt: now,
            begin: now,
            step,
            duration,
        })

        // console.log(this.animations)
    }

    handleFadeInLine(id) {
        this.createAnimation(`anim-dataset-${id}`, (progress) => {
            this.setState({
                visibility: {
                    ...this.state.visibility,
                    [id]: animateEase(progress),
                }
            })
        }, 300)
    }

    handleFadeOutLine(id) {
        this.createAnimation(`anim-dataset-${id}`, (progress) => {
            this.setState({
                visibility: {
                    ...this.state.visibility,
                    [id]: 1 - animateEase(progress),
                }
            })
        }, 300)
    }

    handleFadeOutYAsix = () => {
        const { yAsixOpacity: startVal = 100 } = this.state.animationsValues
        const endVal = 0

        const range = endVal - startVal

        this.createAnimation(`anim-y-asix`, (progress) => {
            const iterVal = range * progress

            this.setState({
                animationsValues: {
                    ...this.state.animationsValues,
                    yAsixOpacity: startVal + iterVal,
                }
            })
        }, 150)
    }
    
    handleFadeOutXAsix = () => {
        const { xAsixOpacity: startVal = 100 } = this.state.animationsValues
        const endVal = 0

        const range = endVal - startVal

        this.createAnimation(`anim-x-asix`, (progress) => {
            const iterVal = range * progress

            this.setState({
                animationsValues: {
                    ...this.state.animationsValues,
                    xAsixOpacity: startVal + iterVal,
                }
            })
        }, 150)
    }

    handleFadeInYAsix = () => {
        const { yAsixOpacity: startVal = 100 } = this.state.animationsValues
        const endVal = 100

        const range = endVal - startVal

        this.createAnimation(`anim-y-asix`, (progress) => {
            const iterVal = range * progress

            this.setState({
                animationsValues: {
                    ...this.state.animationsValues,
                    yAsixOpacity: startVal + iterVal,
                }
            })
        }, 150)
    }

    handleFadeInXAsix = () => {
        const { xAsixOpacity: startVal = 100 } = this.state.animationsValues
        const endVal = 100

        const range = endVal - startVal

        this.createAnimation(`anim-x-asix`, (progress) => {
            const iterVal = range * progress

            this.setState({
                animationsValues: {
                    ...this.state.animationsValues,
                    xAsixOpacity: startVal + iterVal,
                }
            })
        }, 150)
    }

    handleFadeInArcs = () => {
        const { arcsScale: startScaleVal = 1, arcsOpacity: startOpacityVal = 1 } = this.state.animationsValues
        const endVal = 1

        const rangeScale = endVal - startScaleVal
        const rangeOpacity = endVal - startOpacityVal

        this.createAnimation(`anim-arcs-scale`, (progress) => {
            const iterScaleVal = rangeScale * progress
            const iterOpacityVal = rangeOpacity * progress

            this.setState({
                animationsValues: {
                    ...this.state.animationsValues,
                    arcsScale: startScaleVal + iterScaleVal,
                    arcsOpacity: startOpacityVal + iterOpacityVal,
                }
            })
        }, 400)
    }

    handleFadeOutArcs = () => {
        const { arcsScale: startScaleVal = 1, arcsOpacity: startOpacityVal = 1 } = this.state.animationsValues
        const endVal = 0

        const rangeScale = endVal - startScaleVal
        const rangeOpacity = endVal - startOpacityVal

        this.createAnimation(`anim-arcs-scale`, (progress) => {
            const iterScaleVal = rangeScale * progress
            const iterOpacityVal = rangeOpacity * progress

            this.setState({
                animationsValues: {
                    ...this.state.animationsValues,
                    arcsScale: startScaleVal + iterScaleVal,
                    arcsOpacity: startOpacityVal + iterOpacityVal,
                }
            })
        }, 400)
    }

    handleFadeInAreas = () => {
        const { areaScale: startScaleVal = 1, areaOpacity: startOpacityVal = 1 } = this.state.animationsValues
        const endVal = 1

        const rangeScale = endVal - startScaleVal
        const rangeOpacity = endVal - startOpacityVal

        this.createAnimation(`anim-area-scale`, (progress) => {
            const iterScaleVal = rangeScale * progress
            const iterOpacityVal = rangeOpacity * progress

            this.setState({
                animationsValues: {
                    ...this.state.animationsValues,
                    areaScale: startScaleVal + iterScaleVal,
                    areaOpacity: startOpacityVal + iterOpacityVal,
                }
            })
        }, 400)
    }

    handleFadeOutAreas = () => {
        const { areaScale: startScaleVal = 1, areaOpacity: startOpacityVal = 1 } = this.state.animationsValues
        const endVal = 0

        const rangeScale = endVal - startScaleVal
        const rangeOpacity = endVal - startOpacityVal

        this.createAnimation(`anim-area-scale`, (progress) => {
            const iterScaleVal = rangeScale * progress
            const iterOpacityVal = rangeOpacity * progress

            this.setState({
                animationsValues: {
                    ...this.state.animationsValues,
                    areaScale: startScaleVal + iterScaleVal,
                    areaOpacity: startOpacityVal + iterOpacityVal,
                }
            })
        }, 400)
    }

    handleFadeOutDatasets = (dataset, params) => {
        // console.log("handleFadeOutDatasets: ", dataset)

        // console.log(params)

        params.length = dataset[0].list.length

        this.createAnimation(`anim-prev-datasets`, (progress) => {
            if (progress < 1) {
                const areas = dataset.filter(item => item.type === "area")
                const bars = dataset.filter(item => item.type === "bar")
                const lines = dataset.filter(item => item.type === "line")

                const scaleX = 1 + (1 * progress)
                // const scaleY = params.height * progress
    
                const canvasBars = this.calcBars(bars, {
                    ...params,
                    scale: { x: scaleX },
                    opacity: 1 - progress,
                    nativeOpacity: true,
                })
    
                const canvasAreas = this.calcAreas(areas, {
                    ...params,
                    scale: progress,
                    opacity: 1 - progress,
                })
    
                const canvasLines = this.calcLines(lines, {
                    ...params,
                    // scale: { x: scaleX },
                    opacity: 1 - progress,
                })
    
                this.additionalDraw.push([
                    "beforeLines",
                    [
                        ...canvasBars,
                        ...canvasAreas,
                    ]
                ])
    
                this.additionalDraw.push([
                    "afterLines",
                    [
                        ...canvasLines,
                    ]
                ])
            }
        }, 400)
    }

    handleFadeInSelectArc = (id) => {
        const { selectArcShow = {} } = this.state.animationsValues

        const show = selectArcShow[id] || 0

        const endVal = 1

        const range = endVal - show

        this.createAnimation(`anim-select-arc-show-${id}`, (progress) => {
            const iterShow = range * progress

            this.setState({
                animationsValues: {
                    ...this.state.animationsValues,
                    selectArcShow: {
                        ...(this.state.animationsValues.selectArcShow || {}),
                        [id]: show + iterShow,
                    }
                }
            })
        }, 200)
    }
    
    handleFadeOutSelectArc = (id) => {
        const { selectArcShow = {} } = this.state.animationsValues

        const show = selectArcShow[id] || 1

        const endVal = 0

        const range = endVal - show

        this.createAnimation(`anim-select-arc-show-${id}`, (progress) => {
            const iterShow = range * progress

            this.setState({
                animationsValues: {
                    ...this.state.animationsValues,
                    selectArcShow: {
                        ...(this.state.animationsValues.selectArcShow || {}),
                        [id]: show + iterShow,
                    }
                }
            })
        }, 200)
    }

    isTypeAnimating(...types) {
        return types.some(type =>
            this.animations
                .filter(item => item !== false)
                .some(item => item.type.indexOf(type) > -1)
        )
    }

    minMaxLines = {}

    handleScale(type, graphMinMax) {
        const { layout } = this.props

        const [min, max] = graphMinMax[type]

        // if (Object.keys(this.minMaxLines).includes(type) === false) {
        //     this.minMaxLines[type] = [9999999999, 0]
        // }

        // const prevMin = this.minMaxLines[type][0]
        // const prevMax = this.minMaxLines[type][1]

        let prevMin = 9999999999
        let prevMax = 0

        if (this.state.graphMinMax.hasOwnProperty(type) && this.state.graphMinMax[type].length === 2) {
            prevMin = this.state.graphMinMax[type][0]
            prevMax = this.state.graphMinMax[type][1]
        }

        if (prevMin !== min || prevMax !== max) {
            // console.log("Anim scale min: ", [prevMin, min])
            // console.log("Anim scale max: ", [prevMax, max])

            const minYRange = min - prevMin
            const maxYRange = max - prevMax
    
            // let animateYLinesDir = maxY - minY > prevMax - prevMin? 1 : -1
            // let animHeight = maxY - minY
    
            let animateYLinesDir = prevMax > max ? 1 : -1
            let animHeight = Math.abs(maxYRange)
    
            if (prevMax == max) {
                animateYLinesDir = prevMin< min ? 1 : -1
                animHeight = Math.abs(minYRange)
            }
    
            if (Math.abs(animHeight) > layout.height / 2) {
                const direction = animHeight >= 0 ? 1 : -1
    
                animHeight = (layout.height / 2) * direction
            }
    
            const animationStep = ([minR, maxR], [_minY, _maxY]) => progress => {
                const rangeMinProgress = minR * progress
                const rangeMaxXProgress = maxR * progress
    
                const newMinY = rangeMinProgress + _minY
    
                const newMaxY = rangeMaxXProgress + _maxY
    
                const animateYLines = progress > 0 ? progress * animateYLinesDir : animateYLinesDir
    
                // const animHeight = 50
                const direction = animateYLines >= 0 ? 1 : -1
                const reverseProgress = (1 - Math.abs(animateYLines))
    
                const cHeight =
                    animateYLines !== 0 && reverseProgress !== 0 ?
                        animHeight * reverseProgress * direction :
                        0
    
                this.updateGraphOptions({
                    ...this.state.graphMinMax,
                    [type]: [newMinY, newMaxY]
                }, cHeight)
            }

            this.createAnimation(`anim-graph-${type}`, animationStep([
                    minYRange,
                    maxYRange,
                ], [
                    prevMin,
                    prevMax,
                ]), 100)

            // this.minMaxLines[type] = [min, max]
        } else {
            this.updateGraphOptions({
                ...this.state.graphMinMax,
                [type]: [min, max]
            }, 0)
        }
    }

    handleAnimScale(type, minMax, duration = 150, animYlines = false) {
        const { layout, percentage = false } = this.props

        let prevMin = 0
        let prevMax = 10

        const [min, max] = minMax[type]

        if (this.state.graphMinMax.hasOwnProperty(type) && this.state.graphMinMax[type].length === 2) {
            prevMin = this.state.graphMinMax[type][0]
            prevMax = this.state.graphMinMax[type][1]
        }

        const fromValue = [
            prevMin,
            prevMax
        ]

        const toValue = [
            min,
            max
        ]

        const prevHeight = Math.abs(fromValue[1] - fromValue[0])
        const currentHeight = Math.abs(toValue[1] - toValue[0])

        this.zoomFactor = prevHeight > currentHeight ? prevHeight / currentHeight : currentHeight / prevHeight

        // if (this.zoomFactor > 1) this.zoomFactor = 1

        const ranges = [
            (toValue[0] - fromValue[0]),
            (toValue[1] - fromValue[1]),
        ]

        let animateYLinesDir = prevMax > max ? 1 : -1
        let animHeight = Math.abs(ranges[1])

        if (prevMax == max) {
            animateYLinesDir = prevMin < min ? 1 : -1
            animHeight = Math.abs(ranges[0])
        }

        if (Math.abs(animHeight) > layout.height / 2) {
            const direction = animHeight >= 0 ? 1 : -1

            animHeight = (layout.height / 2) * direction
        }

        if (ranges[0] !== 0 || ranges[1] !== 0) {
            this.createAnimation(`anim-y-minmax-${type}`, (progress) => {
                // this.log.push([`anim-y-minmax-${type}`, progress])

                const minValue = fromValue[0] + ranges[0] * progress
                const maxValue = fromValue[1] + ranges[1] * progress
    
                // const animateYLines = progress > 0 ? progress * animateYLinesDir : animateYLinesDir
    
                // const animHeight = 50
                // const direction = animateYLines >= 0 ? 1 : -1
                // const reverseProgress = (1 - Math.abs(animateYLines))
    
                // const cHeight =
                //     animateYLines !== 0 && reverseProgress !== 0 ?
                //         animHeight * reverseProgress * direction :
                //         0
    
                const cHeight = animYlines ? progress * animateYLinesDir : undefined

                this.updateGraphOptions({
                    ...this.state.graphMinMax,
                    [type]: [minValue, maxValue]
                }, percentage === false ? cHeight : 1)
            }, duration)
        } else {
            this.updateGraphOptions({
                ...this.state.graphMinMax,
                [type]: toValue
            }, animYlines ? 1 : undefined)
        }
    }

    handleScaleYMinMax() {
        // const { yMinMax: startVal = 0 } = this.state.animationsValues
        const startVal = 0
        const endVal = 1

        const range = endVal - startVal

        this.createAnimation(`anim-y-minmax`, (progress) => {
            const iterVal = range * progress

            this.setState({
                animationsValues: {
                    ...this.state.animationsValues,
                    yMinMax: startVal + iterVal,
                }
            })
        }, 150)
    }

    handleApplyVisibility = (visibled) => {
        const { dataset = [] } = this.props

        const { visibility = {} } = this.state

        const keyVisibility = Object.keys(visibility)

        const idsDataset = dataset.map(item => item.id)

        for (let index = 0; index < idsDataset.length; index++) {
            const id = idsDataset[index]

            const isVisible = keyVisibility.includes(id) && visibility[id] == 1
            
            if (isVisible && !visibled.includes(id)) {
                this.handleFadeOutLine(id)
            } else if (!isVisible && visibled.includes(id)) {
                this.handleFadeInLine(id)
            }
        }
    }

    handleCreateLabelX() {
        const { id, scroll, labels, layout, width } = this.props

        const { graphLayout } = this.state

        return new LabelsX({
            id, 
            width,
            scroll,
            labels,
            layout,
            graphLayout,
            getLabel: this.getLabelText.bind(this),
            getLabelIndexByX: this.getLabelIndexByRelativeX.bind(this),
        })
    }

    handleZoom() {
        const { zoom = false } = this.props

        const { showInfo: index = false } = this.state

        if (index !== false && zoom === false) {
            const { labels = [], zoomType = "none" } = this.props
    
            if (zoomType !== "none") {
                const unixTimestamp = labels[index]

                this.isShowInfo = false
    
                this.setState({
                    showInfo: false
                })
    
                this.props.onZoom(unixTimestamp, index)
            }
        }
    }

    render() {
        const { allowXAsix = false, mini = false } = this.props

        this.canvasNode = cre("canvas")

        this.showInfoNode = cre("div", {
            className: style.canvas__show_info,
            style: `opacity: 0;top: -${this.props.layout.height}px;`,
            onMouseDown: this.eventClickShowInfo.bind(this),
        })

        this.showSelectArc = cre("div", {
            className: style.canvas__show_select_arc,
            style: `opacity: 0;top: -${this.props.layout.height}px;`,
        })

        let events = {}

        if (!mini) {
            events = {
                onTouchMove: this.eventTouchMove.bind(this),
                onMouseMove: this.eventMouseMove.bind(this),
                onMouseLeave: this.eventMouseLeave.bind(this),
                onMouseEnter: this.eventMouseEnter.bind(this),
                onTouchStart: this.eventMouseDown.bind(this),
            }
        }

        this.element = cre("div", {
            className: style.canvas_wrapper,
            children: this.canvasNode,
            ...events,
        })

        this.bars = new BarChart()
        this.bars.renderDom(this.element)

        this.element.appendChild(this.showInfoNode)
        this.element.appendChild(this.showSelectArc)

        if (allowXAsix) {
            this.labelX = this.handleCreateLabelX()

            this.labelX.renderDom(this.element)
        }
        
        return this.element
    }
}

export default Charts
