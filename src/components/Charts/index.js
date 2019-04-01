import {
    /*arrLimit, arrOffset,*/
    throttle,
    abbreviateNumber,
    animate,
    getClickPosition,
    numberFormat,
} from 'helpers/utils'

import Canvas, { CanvasLine, CanvasText } from 'helpers/Canvas'

import BaseComponent, { cre } from 'components/base'

import {
    MAP_MONTHS,
    MAP_WEEK_DAYS,
} from 'constants/DATES'

import style from './style'
import LabelsX from './LabelsX'

class Charts extends BaseComponent {
    static defaultProps = {
        allowXAsix: true,
        allowYAsix: true,
        allowPointValue: false,
        offset: 0,
        limit: 0,
        dataset: [],
        width: 0,
        scroll: 0,
        layout: {
            width: 0,
            height: 0,
        },
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
                ? +(width / (((length - 1) * limit) / 100)).toFixed(5)
                : width / length

        step = Math.min(step, maxStep)
        step = Math.max(step, minStep)

        return step
    }

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
        graphMinMax: {
            minY: 0,
            maxY: 0,
        },
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
    }

    init = false

    componentDidMount() {
        this.documentEventMouseMove = this.eventMouseMove.bind(this)
        this.documentEventMouseUp = this.eventMouseUp.bind(this)

        document.addEventListener("mousemove", this.documentEventMouseMove)
        document.addEventListener("mouseup", this.documentEventMouseUp)
        document.addEventListener("touchmove", this.documentEventMouseMove)
        // document.addEventListener("touchend", this.documentEventMouseUp)

        this.initialize()
    }

    componentDidUpdate(prevProps, prevState) {
        const { dataset, layout } = this.props
        const { step, graphOffset, graphMinMax } = this.state

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

            this.reInit()
        } else if (
            prevState.step !== step ||
            prevState.graphOffset.top !== graphOffset.top ||
            prevState.graphOffset.bottom !== graphOffset.bottom ||
            prevState.graphOffset.left !== graphOffset.left ||
            prevState.graphOffset.right !== graphOffset.right ||
            prevProps.scroll !== scroll ||
            prevProps.width !== width ||
            prevProps.colors !== colors ||
            prevState.graphMinMax.minY !== graphMinMax.minY ||
            prevState.graphMinMax.maxY !== graphMinMax.maxY
        ) {
            this.draw()
        }
    }

    componentWillUnmount() {
        document.removeEventListener("mousemove", this.documentEventMouseMove)
        document.removeEventListener("mouseup", this.documentEventMouseUp)
        document.removeEventListener("touchmove", this.documentEventMouseMove)
        document.removeEventListener("touchend", this.documentEventMouseUp)


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
        const { layout } = this.props

        this.canvas = new Canvas(this.canvasNode, {
            ...layout,
        })

        await this.calc()

        this.init = true
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

    findMinMax() {
        const { dataset = [], offset, limit } = this.props

        // const firstList = arrLimit(arrOffset(dataset[0].list, offset), limit)

        let min = 99999999
        let max = 0

        if (dataset.length > 0) {
            for (let index = 0; index < dataset.length; index += 1) {
                const { list } = dataset[index]
                // index === 0 ?
                //   firstList :
                //   arrLimit(arrOffset(dataset[index].list, offset), limit)

                let maxIter = offset + limit

                if (maxIter === 0) maxIter = list.length

                for (let i = offset; i < list.length && i < maxIter; i += 1) {
                    const v = list[i]

                    min = v < min ? v : min
                    max = v > max ? v : max
                }
            }
        } else {
            min = 0
            max = 10
        }

        return [min, max]
    }

    nAsix(x, y) {
        const {
            layout: { height = 0 },
        } = this.props

        const {
            graphMinMax: { minY },
            graphScale,
            graphOffset: { left, bottom },
        } = this.state

        const zY = y - minY

        const nY = +(height - zY * graphScale.y - bottom).toFixed(2)

        const nX = +(left + x * graphScale.x).toFixed(2)

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

    updateGraphOptions(minY, maxY, options, layout) {
        const { limit = 0, length, animateYLines = 0 } = options
        const { width, height, left, top, right, bottom, asixX, asixY } = layout

        const realHeightGraph = maxY - minY
        const heightGraph = height - top - bottom
        const widthGraph = width - left - right

        const scaleY =
            realHeightGraph > 0 ? +(heightGraph / realHeightGraph).toFixed(5) : 1

        const scaleX = +(widthGraph / width).toFixed(5)

        const step = Charts.calcXStep({
            width,
            limit,
            length,
        })

        this.setState({
            step,
            graphOffset: {
                left,
                right,
                top,
                bottom,
                asixX,
                asixY,
            },
            graphMinMax: {
                minY,
                maxY,
            },
            graphScale: {
                x: scaleX,
                y: scaleY,
                animateYLines,
            },
            graphLayout: {
                ...this.state.graphLayout,
                width: widthGraph,
                height: heightGraph,
            },
        })

        // this.updateAnimateYLines(animateYLines)
    }

    animationInterval = false

    getLength() {
        const { dataset = [] } = this.props

        return Math.max(...dataset.map(item => item.list.length))
    }

    calc() {
        const { width, layout } = this.props

        const {
            graphMinMax,
            graphOffset: { left, top, right, bottom, asixX, asixY },
        } = this.state

        const length = this.getLength()

        const [minY, maxY] = this.findMinMax()

        const animationTimeout = 200

        const updateGraphOptions = (newMinY, newMaxY, animateYLines = 0) => {
            this.updateGraphOptions(
                newMinY,
                newMaxY,
                { limit: width, length, animateYLines },
                { ...layout, left, top, right, bottom, asixX, asixY },
            )
        }

        if (graphMinMax.minY !== minY || graphMinMax.maxY !== maxY) {
            const minYRange = minY - graphMinMax.minY
            const maxYRange = maxY - graphMinMax.maxY

            // let animateYLinesDir = maxY - minY > graphMinMax.maxY - graphMinMax.minY ? 1 : -1
            // let animHeight = maxY - minY

            let animateYLinesDir = graphMinMax.maxY > maxY ? 1 : -1
            let animHeight = Math.abs(maxYRange)

            if (graphMinMax.maxY == maxY) {
                animateYLinesDir = graphMinMax.minY < minY ? 1 : -1
                animHeight = Math.abs(minYRange)
            }

            if (Math.abs(animHeight) > layout.height / 2) {
                const direction = animHeight >= 0 ? 1 : -1

                animHeight = (layout.height / 2) * direction
            }

            const animationStep = progress => {
                const rangeMinProgress = (minYRange * progress) / 100
                const rangeMaxXProgress = (maxYRange * progress) / 100

                const newMinY = +(rangeMinProgress + graphMinMax.minY).toFixed(2)

                const newMaxY = +(rangeMaxXProgress + graphMinMax.maxY).toFixed(2)

                const animateYLines = progress > 0 ? progress * animateYLinesDir : animateYLinesDir

                // const animHeight = 50
                const direction = animateYLines >= 0 ? 1 : -1
                const reverseProgress = (100 - Math.abs(animateYLines))

                const cHeight = animateYLines !== 0 && reverseProgress !== 0 ?
                    ((animHeight * reverseProgress) / 100) * direction :
                    0

                updateGraphOptions(newMinY, newMaxY, cHeight)
            }

            if (this.animationInterval) {
                // this.animationInterval.stop()
                this.animationInterval = false
            }

            this.animationInterval = animate(animationStep, animationTimeout, () => {
                this.animationInterval = false
            })
        } else {
            updateGraphOptions(minY, maxY)
        }

        return true
    }

    drawGraph(list, { color = "black", lineWidth = 3, step, drawPointValue }) {
        const { scroll = 0, width = 0 } = this.props

        const graphWidth = step * list.length
        const offsetPx = +((graphWidth * (scroll - width)) / 100).toFixed(2)

        const path = this.canvas.beginPath({
            color,
            lineWidth,
        })

        list.forEach((item, index) => {
            const { x, y } = this.nAsix(index * step - offsetPx, item)

            if (index === 0) {
                path.moveTo(x, y)
            } else {
                path.lineTo(x, y)
            }

            // y x labels
            if (drawPointValue)
                this.canvas.text(item.value, {
                    x,
                    y,
                    align: "center",
                    font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
                })
        })

        path.stroke()
    }

    createYLabels() {
        const {
            layout: { width, height },
            colors,
        } = this.props

        const {
            graphMinMax: { minY, maxY },
            graphOffset: { asixX = 0, asixY = 0 },
            graphScale: { animateYLines },
        } = this.state

        const cHeight = animateYLines

        // y labels
        const yHeight = maxY - minY
        const yLabelStep = 6
        const yLabelHeightStep =
            yHeight > 0 ? yHeight / yLabelStep : height / yLabelStep
        const yLabelValueStep = maxY / yLabelStep

        const canvasObjects = []

        for (let index = -25; index < 25; index += 1) {
            const position = this.nAsix(0, yLabelHeightStep * index + minY)
            const text = Math.floor(yLabelValueStep * index + minY)

            canvasObjects.push(
                new CanvasText(abbreviateNumber(text), {
                    x: 0 + asixX,
                    y: position.y - 10 + asixY + cHeight,
                    align: "start",
                    color: colors.text,
                    font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
                    size: 14,
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
                        lineWidth: 2,
                    },
                ),
            )
        }

        return canvasObjects
    }

    /*
        domLabelsRender = false

        domLabels = {}

        drawXLabelsOld() {
            const {
                layout: { width, height = 0 },
                offset,
                limit,
                labels = [],
            } = this.props

            const {
                graphLayout: { labelsXWidth = 0, labelsXOffset = 0 },
                graphOffset: { bottom = 0 },
            } = this.state

            let cellWidth = labelsXWidth + labelsXOffset
            let countLabels = Math.floor(width / cellWidth)

            const limitedLabels = arrLimit(arrOffset(labels, offset), limit)

            if (countLabels > limit) {
                countLabels = limit
                cellWidth = width / limit
            }

            if (countLabels * cellWidth < width) {
                cellWidth = width / countLabels
            }

            const stepLabel = countLabels < limit ? Math.ceil(limit / countLabels) : 1

            let indexLabel = 0

            const labelOffset = (cellWidth - labelsXWidth) / countLabels

            for (let i = 0; i < countLabels; i += 1) {
                let index = indexLabel

                if (indexLabel >= limit) {
                    index = limit - 1
                }

                const unixTimestamp = limitedLabels[index]

                const date = new Date(unixTimestamp)

                const month = MAP_MONTHS[date.getMonth()]
                const day = date.getDate()

                const dateFormat = `${month} ${day}`

                // const cellX = i * cellWidth
                const x = i * cellWidth + labelOffset * (i + 1)
                const y = height - bottom + 30

                this.canvas.text(dateFormat, {
                    x: x + 10,
                    y,
                    align: "start",
                    color: "#96A2AA",
                    size: 14,
                    font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
                })

                indexLabel += stepLabel
            }
        }

        static getVisibleLabels = (labels, step, width = 0, offset = 0) => {
            const cellWidth = width + offset

            let lastVisibleX = cellWidth * -1

            const visibleLables = []

            const maxWidth = (labels.length - 1) * step

            for (let index = 0; index < labels.length; index += 1) {
                let visible = index * step > lastVisibleX + cellWidth

                // if (maxWidth < index * step + cellWidth) {
                //   visible = false
                // }

                if (visible) {
                    lastVisibleX = index * step

                    visibleLables.push(index)
                }
            }

            console.log({
                length: labels.length,
                maxWidth,
                step,
                width: cellWidth,
                lastIndex: visibleLables[visibleLables.length - 1],
                lastX: lastVisibleX,
            })

            return visibleLables
        }

        drawXLabelsOld2 = () => {
            const { scroll, labels = [] } = this.props

            const {
                graphLayout: { labelsXWidth = 0, labelsXOffset = 0 },
                step,
            } = this.state

            // const minStep = Charts.calcXStep({
            //   width: this.props.layout.width,
            //   limit: 10,
            //   length: labels.length,
            // })

            // const minVisibleLablesIndexes = Charts.getVisibleLabels(
            //   labels,
            //   minStep,
            //   labelsXWidth,
            //   labelsXOffset,
            // )

            // const minVisibleLables = labels.filter((item, index) =>
            //   minVisibleLablesIndexes.includes(index),
            // )

            const width = labels.length * step

            const offsetScroll = (width / 100) * (scroll - this.props.width)

            const cellWidth = labelsXWidth + labelsXOffset

            // const labelOffset = (cellWidth - labelsXWidth) / countLabels

            const visibleLablesIndexes = Charts.getVisibleLabels(
                labels,
                step,
                labelsXWidth,
                labelsXOffset,
            )

            if (!this.domLabelsRender) {
                this.domLabelsRender = true

                for (let index = 0; index < labels.length; index += 1) {
                    const visible = visibleLablesIndexes.includes(index)

                    const text = Charts.getXLabelText(labels[index])

                    const x = index * step - offsetScroll

                    const labelStyle =
                        `left: ${x.toFixed(2)}px;` +
                        `width: ${cellWidth}px;` +
                        `opacity: ${visible ? 1 : 0}`

                    this.domLabels[index] = cre("div", {
                        id: index,
                        className: style.canvas_wrapper__x_labels_wrapper__item,
                        text,
                        style: labelStyle,
                        data: {
                            state: "rendered",
                        },
                    })

                    const domLabel = this.domLabels[index]

                    requestAnimationFrame(() => {
                        this.xLabelsWrapper.appendChild(domLabel)
                    })
                }
            } else {
                for (let index = 0; index < labels.length; index += 1) {
                    const visible = visibleLablesIndexes.includes(index)
                    const domLabel = this.domLabels[index]

                    const x = +(index * step - offsetScroll).toFixed(2)

                    const labelStyle =
                        `left: ${x.toFixed(2)}px;` +
                        `width: ${cellWidth}px;` +
                        `opacity: ${visible ? 1 : 0}`

                    requestAnimationFrame(() => {
                        domLabel.setAttribute("style", labelStyle)
                    })
                }
            }
            // console.log(`[Charts][Handle: drawXLabels][domLabels]`, visibleLablesIndexes)
        }

        drawXLabelsOld3 = () => {
            const {
                scroll,
                labels = [],
                layout: { height = 0 },
            } = this.props

            const {
                graphLayout: { labelsXWidth = 0, labelsXOffset = 0 },
                graphOffset,
                step,
            } = this.state

            const width = labels.length * step

            const offsetScroll = (width / 100) * (scroll - this.props.width)

            const cellWidth = labelsXWidth + labelsXOffset

            // const labelOffset = (cellWidth - labelsXWidth) / countLabels

            let lastVisibleCell = (cellWidth + labelsXOffset) * -1

            for (let index = 0; index < labels.length; index += 1) {
                let visible = true

                const text = Charts.getXLabelText(labels[index])

                const x = index * step - offsetScroll

                const prevCell = lastVisibleCell

                const currentCell = index * step

                const nextCell = (index + 1) * step

                if (
                    prevCell + cellWidth > currentCell &&
                    nextCell < currentCell + cellWidth
                ) {
                    visible = false
                }

                if (visible) {
                    lastVisibleCell = index * step

                    this.canvas.text(text, {
                        x,
                        y: height - graphOffset.bottom + 25,
                        align: "start",
                        color: "#96A2AA",
                        size: 14,
                        font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
                    })
                }
            }
            // console.log(`[Charts][Handle: drawXLabels][domLabels]`, visibleLablesIndexes)
        }

        drawXLabels = () => {
            const {
                labels = [],
                layout: { height = 0 },
            } = this.props

            const { positions } = this.calcXLabels()

            const { graphOffset } = this.state

            const indexes = Object.keys(positions)

            for (let i = 0; i < indexes.length; i += 1) {
                const index = indexes[i]
                const x = positions[index]
                const text = Charts.getXLabelText(labels[index])

                this.canvas.text(text, {
                    x,
                    y: height - graphOffset.bottom + 25,
                    align: "start",
                    color: "#96A2AA",
                    size: 14,
                    font: "NeueHaasDisplay,Tahoma,sans-serif,Arial",
                })
            }
            // console.log(`[Charts][Handle: drawXLabels][domLabels]`, visibleLablesIndexes)
        }

        calcXLabels() {
            const { scroll, labels = [], layout } = this.props

            const {
                graphLayout: { labelsXWidth = 0 },
            } = this.state

            const scaleFactor = 100 / this.props.width

            const labelsOnPage = Math.ceil(layout.width / labelsXWidth)

            const cellWidth = layout.width / labelsOnPage

            const intervalCount = Math.floor(labels.length / labelsOnPage)
            const intervalFactorLog = Math.ceil(Math.log2(intervalCount / scaleFactor))
            const intervalFactor = Math.pow(2, intervalFactorLog)

            const labelsCount = Math.ceil(
                (scaleFactor * labels.length) / intervalFactor,
            )

            const labelsPosition = {}

            for (let i = 0; i < labelsCount; i += 1) {
                const scrollFromLeft = (scroll - this.props.width) / 100
                const newIndex = i * intervalFactor
                const position = (newIndex / (labels.length - 1) - scrollFromLeft) * layout.width * scaleFactor

                const value = labels[newIndex]

                if (value) {
                    if (layout.width >= position && position >= 0 - cellWidth) {
                        labelsPosition[newIndex] = position
                    }
                }
            }

            return {
                positions: labelsPosition,
                count: labelsCount,
            }
        }

    */

    drawDebugInfo() {
        const {
            layout,
            // dataset = [],
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

        // dataset.forEach(({ color, list = [] }) => {
        //   const graphWidth = step * list.length
        //   const offsetPx = +((graphWidth * (scroll - width)) / 100).toFixed(2)

        //   list.forEach((item, index) => {
        //     const { x, y } = this.nAsix(index * step - offsetPx, item.value)

        //     this.canvas.circle(x, y, 18, {
        //       fill: true,
        //       color,
        //     })

        //     this.canvas.text(item.value, {
        //       x,
        //       y: y + 3,
        //       align: "center",
        //       size: 16,
        //     })
        //   })
        // })

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

    draw() {
        const { step, showInfo = false } = this.state

        const {
            dataset = [],
            allowXAsix,
            allowYAsix,
            allowPointValue,
            lineWidth = 3,
        } = this.props

        this.canvas.clear()

        let yLabesCanvasObjects = []

        if (allowYAsix) {
            yLabesCanvasObjects = this.createYLabels()
        }

        if (allowXAsix) {
            // this.drawXLabels()

            const { id, scroll, labels, layout, width } = this.props

            const { graphLayout } = this.state

            this.labelX.setProps({
                id,
                width,
                scroll,
                labels,
                layout,
                graphLayout,
            })
        }

        yLabesCanvasObjects
            .filter(cnvsObj => cnvsObj instanceof CanvasLine)
            .forEach(cnvsObj => this.canvas.draw(cnvsObj))

        // graphs
        dataset.forEach(data => {
            this.drawGraph(data.list, {
                ...data,
                step,
                lineWidth,
                drawPointValue: allowPointValue,
            })
        })

        yLabesCanvasObjects
            .filter(cnvsObj => cnvsObj instanceof CanvasText)
            .forEach(cnvsObj => this.canvas.draw(cnvsObj))

        if (this.props.debug) this.drawDebugInfo()

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
            lineWidth,
            colors,
            layout,
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

        const values = dataset
            .map(item => ({
                value: item.list[index],
                color: item.color,
                label: item.label,
            }))
            .map(item => ({
                ...item,
                ...this.nAsix(index * step - offsetScroll, item.value),
            }))

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

        values.forEach(value => {
            this.canvas.circle(value.x, value.y, 5, {
                lineWidth: lineWidth + 2,
                color: colors.background,
                strokColor: value.color,
            })
        })

        let showInfoX = index * step - offsetScroll - 30

        if (showInfoX < 0) {
            showInfoX = 0
        }

        this.showInfoNode.innerHTML = ""

        const chunkSize = 2
        const rows = []

        for (let i = 0; i < values.length; i += chunkSize) {
            const chunkValues = values.slice(i, i + chunkSize)

            const row = cre("div", {
                className: style.canvas__show_info__row,
            })

            chunkValues.forEach(value => {
                row.appendChild(
                    cre("div", {
                        className: style.canvas__show_info__row__item,
                        style: `color: ${value.color}`,
                        children: [
                            cre("div", {
                                className: style.canvas__show_info__row__item__value,
                                text: numberFormat(value.value),
                            }),
                            cre("div", {
                                className: style.canvas__show_info__row__item__name,
                                text: value.label,
                            }),
                        ],
                    }),
                )
            })

            rows.push(row)
        }

        this.showInfoNode.appendChild(
            cre("div", {
                className: style.canvas__show_info__wrapper,
                children: [
                    cre("div", {
                        className: style.canvas__show_info__title,
                        text: label,
                    }),
                    ...rows,
                ],
            }),
        )

        if (showInfoX + this.showInfoNode.clientWidth > layout.width) {
            showInfoX = layout.width - this.showInfoNode.clientWidth
        }

        this.showInfoNode.setAttribute("style", `opacity: 1;left: ${showInfoX}px`)
    }

    eventStartShowInfo = throttle((e, prevShowInfo = false) => {
        const currentPosition = getClickPosition(e)

        const { step, showInfo = false } = this.state

        const { scroll, labels = [] } = this.props

        const x = currentPosition.x - this.element.offsetLeft

        const width = labels.length * step

        const offsetScroll = (width / 100) * (scroll - this.props.width)

        const nX = this.nAsix(x, 0).x
        const rX = nX + offsetScroll

        const index = Math.round(rX / step)

        if (index > 0 && index < labels.length) {
            if (showInfo === false || prevShowInfo !== index) {
                this.setState({
                    showInfo: index,
                })
            } else {
                this.setState({
                    showInfo: false,
                })
            }
        } else if (showInfo !== false && !prevShowInfo) {
            this.setState({
                showInfo: false,
            })
        }
    }, 100)

    eventMouseDown = e => {
        if (!this.isShowInfo)
        {
            this.tapPosition = getClickPosition(e)
            this.prevShowInfo = this.state.showInfo
    
            this.isShowInfo = true
    
            this.eventStartShowInfo(e)
        }
    }

    eventMouseMove = e => {
        if (this.isShowInfo) {
            this.eventStartShowInfo(e)
        }
    }

    eventMouseUp = e => {
        if (this.isShowInfo) {        
            const currentPosition = getClickPosition(e)

            if (Math.abs(currentPosition.x - this.tapPosition.x) < +this.state.step.toFixed(2)) {
                this.eventStartShowInfo(e, this.prevShowInfo)
            }

            this.isShowInfo = false
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

    // handleHideShowInfo = (e) => {
    //     e.stopPropagation()

    //     this.setState({
    //         showInfo: false
    //     })
    // }

    render() {
        const { allowXAsix = false } = this.props

        this.canvasNode = cre("canvas")
        this.showInfoNode = cre("div", {
            className: style.canvas__show_info,
            style: `opacity: 0;`
        })

        const children = [this.canvasNode, this.showInfoNode]

        this.element = cre("div", {
            className: style.canvas_wrapper,
            children,
            onMouseDown: throttle(this.eventMouseDown.bind(this), 10),
            onTouchStart: throttle(this.eventMouseDown.bind(this), 10),
        })

        if (allowXAsix) {
            this.labelX = this.handleCreateLabelX()

            this.labelX.renderDom(this.element)
        }

        return this.element
    }
}

export default Charts
