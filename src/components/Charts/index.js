import {
    throttle,
    abbreviateNumber,
    getClickPosition,
    numberFormat,
    hexToRgb,
} from 'helpers/utils'

import Canvas, { CanvasLine, CanvasText } from 'helpers/Canvas'

import BaseComponent, { cre } from 'components/base'

import {
    MAP_MONTHS,
    MAP_WEEK_DAYS,
} from 'constants/DATES'

import style from './style'
import LabelsX from './LabelsX'
import { getAnimProgress, animateEase } from '../../helpers/utils';
import BarChart from './BarChart';

class Charts extends BaseComponent {
    static defaultProps = {
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
    }

    static getXLabelText(unixTimestamp) {
        const date = new Date(unixTimestamp)

        const month = MAP_MONTHS[date.getMonth()]
        const day = date.getDate()

        const dateFormat = `${month} ${day}`

        return dateFormat
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

    animations = []

    constructor(props) {
        super(props)

        this.safeCalc = throttle(this.calc, 1)

        if (this.props.allowYAsix) {
            this.state.graphOffset.bottom = 30
        } else {
            this.state.graphOffset.bottom = 0
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
        const { dataset, visibled, layout, labels, arcMode } = this.props
        const { step, graphOffset, graphMinMax, visibility, graphScale, showInfo, mouse, selectArc, zoom } = this.state

        if (prevProps.arcMode !== arcMode) {
            console.log("change arc mode: ", prevProps.arcMode, arcMode)

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

            if (prevProps.visibled !== visibled) {
                this.handleApplyVisibility(visibled)
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
            prevState.zoom !== zoom
        ) {
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

    initialize = async () => {
        const { layout, visibled } = this.props

        this.handleApplyVisibility(visibled)

        this.canvas = new Canvas(this.canvasNode, {
            ...layout,
        })

        await this.calc()

        this.init = true

        requestAnimationFrame(this.reDraw)
    }

    time = 0

    reDraw = (time) => {
        this.time = time

        this.animations = this.animations
            .filter(item => item !== false)

        if (this.animations.length > 0 || this.needDraw) {
            for (let index = 0; index < this.animations.length; index++) {
                const animation = this.animations[index]

                if (animation !== false) {
                    const timePassed = time - animation.startAt
                    const progress = getAnimProgress(animation.startAt, animation.duration, time)

                    this.animations[index].progress = progress
                    this.animations[index].lastUpdateAt = time
                    this.animations[index].timePassed = timePassed

                    animation.step(animateEase(progress), timePassed, animation.duration)

                    if (progress === 1 || time - animation.startAt < -10000) {
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

    reInit = async () => {
        // this.init = false

        await this.calc()
        // this.safeCalc()

        // await this.draw()

        // this.init = true
    }

    updateState = async params =>
        new Promise(ok => {
            this.setState(params, ok)
        })

    findMinMaxForLine(list, params = {}, def = {}) {
        let { min = 99999999999, max = 0 } = def

        const { offset, limit } = params

        let maxIter = offset + limit

        if (maxIter === 0) maxIter = list.length

        for (let i = offset; i < list.length && i < maxIter; i += 1) {
            const v = list[i]

            min = v < min ? v : min
            max = v > max ? v : max
        }

        return [min, max]
    }

    findMinMaxForBars(dataset, params, def = {}) {
        let { min = 99999999999, max = 0 } = def

        const { visibled = [], offset, limit } = params

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

        return [min, max]
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
            common: [min, max],
            ...items
        }
    }

    nAsix(x, y, yType = "common") {
        const {
            layout: { height = 0 },
        } = this.props

        const {
            graphMinMax,
            graphScale,
            graphOffset: { left, bottom },
        } = this.state

        const [min] = graphMinMax[yType]
        const scale = graphScale[yType]

        const zY = y - min

        const nY = height - zY * scale - bottom

        const nX = left + x * graphScale.x

        return {
            x: nX,
            y: nY,
        }
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
        const { scroll = 0, limit = 0, length, animateYLines = 0 } = options
        const { width } = layout

        const heightGraph = this.getHeightGraph()
        const widthGraph = this.getWidthGraph()
        
        const scales = {}

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

        this.setState({
            step,
            graphMinMax: minMax,
            graphScale: {
                ...scales,
                x: scaleX,
                animateYLines,
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

    updateGraphOptions = (minMax, animateYLines = 0) => {
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

        const minMax = this.findMinMax()

        if (animateScale) {
            if (!yScaled) {
                this.handleAnimScale("common", minMax, 400)
            } else {
                dataset
                    .filter(item => visibled.includes(item.id))
                    .forEach(item => {
                        this.handleAnimScale(item.id, minMax, 400)
                    })
            }
        } else {
            this.updateGraphOptions(minMax)
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

    drawLine(list, params) {
        const width = this.getWidthGraph()

        const { yScaled = false } = this.props

        const { graphLayout: { offsetPx } } = this.state

        const path = this.canvas.beginPath({
            color: params.color,
            opacity: params.opacity,
            lineWidth: params.lineWidth,
        })

        for (let index = 0; index < list.length; index++) {
            const item = list[index]

            const yType = yScaled ? params.id : "common"
            
            const { x, y } = this.nAsix(index * params.step - offsetPx, item, yType)
    
            if (x >= 0 - (params.step * 2) && x <= width + (params.step * 2)) {
                if (index === 0) {
                    path.moveTo(x, y)
                } else {
                    path.lineTo(x, y)
                }
    
                // y x labels
                if (params.drawPointValue)
                {
                    this.canvas.text(item.value, {
                        x,
                        y,
                        align: "center",
                        font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
                    })
                }
            }
        }

        path.stroke()
    }

    drawLines(dataset, step, params = {}) {
        const {
            visibility = {},
            lineWidth = 3,
            allowPointValue = false,
        } = params

        for (let index = 0; index < dataset.length; index++) {
            const data = dataset[index]

            this.drawLine(data.list, {
                id: data.id,
                opacity: visibility[data.id],
                color: data.color,
                step,
                lineWidth,
                drawPointValue: allowPointValue,
            })
        }
    }

    drawBars(dataset, step, params = {}) {
        const height = this.getHeightGraph()
        const width = this.getWidthGraph()

        const {
            graphMinMax: { common: [,max] },
            graphLayout: { offsetPx },
            showInfo = false,
        } = this.state

        const {
            visibility = {},
            length = 0,
        } = params

        dataset = dataset
            .filter(item => visibility[item.id] > 0)

        const barsData = {
            positions: {},
            removed: []
        }

        for (let index = 0; index < length; index++) {
            const { x } = this.nAsix(index * step - offsetPx, 0)

            if (x >= 0 - (step * 2) && x <= width + (step * 2)) {
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
                    // const v = item.list[index]
    
                    let percent = v * 100 / sum

                    if (percent < 2) {
                        additionalOffset += 2
                    }
                })
    
                const offsetTopPercent = 100 - (sum * 100 / max) + additionalOffset
                const offsetTopPx = height * offsetTopPercent / 100
    
                const iterHeight = height - offsetTopPx
                let yOffset = 0
    
                dataset.forEach(item => {
                    const id = `${item.id}_${index}`

                    let opacity = visibility[item.id]

                    const v = item.list[index] * opacity
                    // const v = item.list[index]
    
                    let percent = v * 100 / sum

                    if (percent < 2) percent = 2
    
                    const barHeight = iterHeight * percent / 100

                    if (showInfo !== false) {
                        if (showInfo === index) {
                            opacity = 1
                        } else {
                            opacity = 0.4
                        }                        
                    }


                    let { color } = item

                    // if (opacity === 1) {
                    //     opacity = 0.8
                    // }

                    if (opacity < 1) {
                        const rgb = hexToRgb(color)
                        const Bkg = 255

                        color = `rgb(${rgb.r * opacity + Bkg * (1 - opacity)},${rgb.g * opacity + Bkg * (1 - opacity)},${rgb.b * opacity + Bkg * (1 - opacity)})`
                    }
                    
                    this.canvas.rect(Math.ceil(x), height - (barHeight + yOffset), {
                        width: Math.ceil(step),
                        height: barHeight,
                        color,
                        fill: true,
                    })

                    // barsData.positions[id] = {
                    //     x,
                    //     y: height - (barHeight + yOffset),
                    //     width: step,
                    //     height: barHeight,
                    //     opacity,
                    //     color
                    // }

                    yOffset += barHeight
                })
            } /*else {
                dataset.forEach(item => {
                    const id = `${item.id}_${index}`

                    barsData.removed.push(id)
                })
            }*/
        }

        this.bars.setProps({
            data: barsData
        })
    }

    drawAreas(dataset, step, params = {}) {
        const { areaScale: scale = 1, areaOpacity = 1 } = this.state.animationsValues

        const height = this.getHeightGraph()
        const width = this.getWidthGraph()

        const {
            graphLayout: { offsetPx },
        } = this.state

        const {
            visibility = {},
            length = 0,
        } = params

        dataset = dataset
            .filter(item => visibility[item.id] > 0)

        const paths = {}

        for (let index = 0; index < length; index++) {
            const { x } = this.nAsix(index * step - offsetPx, 0)

            if (x >= 0 - (step * 2) && x <= width + (step * 2)) {
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
                        y: height - (barHeight + yOffset),
                    })

                    yOffset += barHeight
                })
            }
        }

        for (let index = dataset.length - 1; index >= 0; index -= 1) {
            const item = dataset[index]
            const itemPaths = paths.hasOwnProperty(item.id) ? paths[item.id] : []

            let opacity = visibility[item.id]

            if (areaOpacity < 1)
            {
                opacity = areaOpacity
            }

            let { color } = item

            // if (opacity === 1) {
            //     opacity = 0.8
            // }

            if (opacity < 1) {
                const rgb = hexToRgb(color)

                color = `rgba(${rgb.r},${rgb.g},${rgb.b},${opacity})`
            }
            
            const path = this.canvas.beginPath({
                color,
                opacity,
                lineWidth: params.lineWidth,
            })

            path.moveTo(0, height)
    
            for (let index = 0; index < itemPaths.length; index++) {
                const { x, y } = itemPaths[index]
                
                path.lineTo(x, y)
            }

            path.lineTo(width, height)
    
            path.fill()
        }
    }

    drawArc(dataset, step, params = {}) {
        const { arcsScale: scale = 1, arcsOpacity: opacity = 1 } = this.state.animationsValues

        const height = this.getHeightGraph()
        const width = this.getWidthGraph()

        const {
            graphLayout: { offsetPx },
            mouse: { pointX = 0, pointY = 0 },
            selectArc = false
        } = this.state

        const {
            visibility = {},
            length = 0,
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

        let hoverId = false

        dataset.forEach(item => {
            const v = data[item.id]

            let slice_angle = 2 * Math.PI * v / sum

            let cX = selectArc === item.id ? centerX + 10 * Math.cos(start_angle + (slice_angle / 2)) : centerX
            let cY = selectArc === item.id ? centerY + 10 * Math.sin(start_angle + (slice_angle / 2)) : centerY

            this.canvas.arc(
                cX,
                cY,
                radiusArc,
                start_angle,
                start_angle + slice_angle,
                {
                    opacity,
                    color: item.color,
                    mouseX: pointX,
                    mouseY: pointY,
                    mouseMove: () => {
                        hoverId = item.id
                    }
                }
            )

            start_angle += slice_angle
        })
        
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

        start_angle = 0

        dataset.forEach(item => {
            const v = data[item.id]
            const precent = v / sum * 100

            let slice_angle = 2 * Math.PI * v / sum

            let rText = radiusText
            let size = 20

            if (slice_angle * (180 / Math.PI) < 30)
            {
                size = 12
                rText = radiusArc - 20
                slice_angle += 0.03
            }

            if (slice_angle * (180 / Math.PI) > 8) {
                const textX = rText * Math.cos(start_angle + (slice_angle / 2)) + centerX
                const textY = rText * Math.sin(start_angle + (slice_angle / 2)) + centerY
    
                this.canvas.text(`${Math.round(precent)}%`, {
                    x: textX,
                    y: textY,
                    opacity,
                    size: size * scale,
                    align: "center",
                    color: "#fff",
                    font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
                })
            }


            start_angle += slice_angle
        })
    }

    drawGraphs(dataset, step, params = {}) {
        const { arcMode = false } = this.props

        const arcs = dataset.filter(item => item.type === "arc")
        const areas = dataset.filter(item => item.type === "area")
        const bars = dataset.filter(item => item.type === "bar")
        const lines = dataset.filter(item => item.type === "line")

        if (arcs.length > 0) this.drawArc(arcs, step, params)
        
        if (arcMode === false || this.isTypeAnimating("anim-area")) {
            this.drawAreas(areas, step, params)
        }

        if (arcMode !== false || this.isTypeAnimating("anim-arcs")) {
            this.drawArc(areas, step, params)
        }

        this.drawBars(bars, step, params)
        this.drawLines(lines, step, params)
    }

    createYLabels(type, graphMinMax, cHeight, color, pos = "start") {
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

        for (let index = -25; index < 25; index += 1) {
            const position = this.nAsix(0, yLabelHeightStep * index + min, type)

            const text = Math.floor(yLabelValueStep * index + min)

            canvasObjects.push(
                new CanvasText(abbreviateNumber(text), {
                    x: pos === "start" ? 0 + asixX : width,
                    y: position.y - 10 + asixY + cHeight,
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
                        x: 0 + asixX,
                        y: position.y + asixY + cHeight,
                    },
                    {
                        x: width + asixX,
                        y: position.y + asixY + cHeight,
                    },
                    {
                        color: index > 0 ? colors.lines : colors.lastLine,
                        opacity: opacity < 1 ? opacity : colors.lineOpacity,
                        lineWidth: 2,
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
        } = this.props

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
                        ...this.createYLabels(item.id, graphMinMax, animateYLines, item.color, index === 0 ? "start" : "end"),
                    ]
                })

            return canvasObjects
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

    draw() {
        const { 
        step,
        visibility = {},
        showInfo = false,
        animationsValues: { xAsixOpacity: opacity = 100 },
    } = this.state

        const {
            dataset = [],
            visibled = [],
            allowXAsix,
            allowYAsix,
            allowPointValue,
            lineWidth = 3,
            stacked = false,
        } = this.props

        this.canvas.clear()

        let yLabesCanvasObjects = []

        if (allowYAsix) {
            yLabesCanvasObjects = this.getYLabels()
        }

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

        if (!stacked) {
            yLabesCanvasObjects
                .filter(cnvsObj => cnvsObj instanceof CanvasLine)
                .forEach(cnvsObj => this.canvas.draw(cnvsObj))
        }

        if (dataset.length > 0 && dataset[0].list.length > 0) {
            this.drawGraphs(
                dataset,
                step,
                {
                    visibled,
                    visibility,
                    lineWidth,
                    allowPointValue,
                    length: dataset[0].list.length,
                }
            )
        }

        if (stacked) {
            yLabesCanvasObjects
                .filter(cnvsObj => cnvsObj instanceof CanvasLine)
                .forEach(cnvsObj => this.canvas.draw(cnvsObj))
        }

        yLabesCanvasObjects
            .filter(cnvsObj => cnvsObj instanceof CanvasText)
            .forEach(cnvsObj => this.canvas.draw(cnvsObj))

        if (this.props.debug) this.drawDebugInfo()
        if (this.props.fps) this.drawFpsInfo()

        if (showInfo !== false) {
            this.drawShowInfo()
        } else {
            this.showInfoNode.setAttribute("style", `opacity: 0;`)
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
            zoomType = "none",
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

        const label = `${weekDay}, ${month} ${day}`

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
            .filter(item => item.type === "area")
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

        const children = [
            cre("div", {
                className: style.canvas__show_info__title__value,
                text: label,
            }),
        ]

        if (zoomType !== "none") {

            children.push(
                cre("div", {
                    className: style.canvas__show_info__title__zoom,
                    text: ">"
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

    eventStartShowInfo = e => {
        const currentPosition = getClickPosition(e)

        const { step } = this.state

        const { scroll, labels = [] } = this.props

        const x = currentPosition.x - this.element.offsetLeft

        const width = labels.length * step

        const offsetScroll = (width / 100) * (scroll - this.props.width)

        const nX = this.nAsix(x, 0).x
        const rX = nX + offsetScroll

        const index = Math.round(rX / step)

        if (index > 0 && index < labels.length) {
            this.setState({
                showInfo: index,
            })
        } else {
            this.setState({
                showInfo: false,
            })
        }
    }

    eventMouseDown = e => {
        const { arcMode = false } = this.props

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

        console.log("[Charts][Event: MouseUp]", { isOutside }, e)

        if (isOutside && arcMode === false) {    
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
        }
    }

    eventMouseLeave = () => {
        const { arcMode = false } = this.props

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

        if (!this.isShowInfo && arcMode === false) {
            this.isShowInfo = true

            this.eventStartShowInfo(e)
        }
    }

    createAnimation(type, step, duration = 300, clear = true) {
        if (clear) {
            this.animations = this.animations
                .filter(item => item.type !== type)
        }

        this.animations.push({
            type,
            startAt: this.time,
            step,
            duration,
        })

        // console.log(this.animations)
    }

    handleFadeInLine(id) {
        this.animations = this.animations
            .filter(item => item.type !== `anim-dataset-${id}`)

        this.animations.push({
            type: `anim-dataset-${id}`,
            startAt: this.time,
            step: (progress) => {
                this.setState({
                    visibility: {
                        ...this.state.visibility,
                        [id]: animateEase(progress),
                    }
                })
            },
            duration: 300,
        })
    }

    handleFadeOutLine(id) {
        this.animations = this.animations
            .filter(item => item.type !== `anim-dataset-${id}`)

        this.animations.push({
            type: `anim-dataset-${id}`,
            startAt: this.time,
            step: (progress) => {
                this.setState({
                    visibility: {
                        ...this.state.visibility,
                        [id]: 1 - animateEase(progress),
                    }
                })
            },
            duration: 300,
        })
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

    handleAnimScale(type, minMax, duration = 150) {
        let prevMin = 9999999999
        let prevMax = 0

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

        this.createAnimation(`anim-y-minmax-${type}`, (progress) => {
            const minValue = fromValue[0] + (toValue[0] - fromValue[0]) * progress
            const maxValue = fromValue[1] + (toValue[1] - fromValue[1]) * progress

            this.updateGraphOptions({
                ...this.state.graphMinMax,
                [type]: [minValue, maxValue]
            })
        }, duration)
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
            getLabel: Charts.getXLabelText,
        })
    }

    handleZoom() {
        const { showInfo: index = false } = this.state

        if (index !== false) {
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
            style: `opacity: 0;`,
            onClick: this.handleZoom.bind(this),
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

        if (allowXAsix) {
            this.labelX = this.handleCreateLabelX()

            this.labelX.renderDom(this.element)
        }
        
        return this.element
    }
}

export default Charts
