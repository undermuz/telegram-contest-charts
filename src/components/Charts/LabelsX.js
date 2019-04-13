import BaseComponent, { cre } from "../base"

import style from "./style.css"
import { animate } from "helpers/utils";

class LabelsX extends BaseComponent {
    static defaultProps = {
        width: 0,
        labels: [],
        scroll: 0,
        layout: { width: 0, height: 0 },
        graphLayout: { labelsXWidth: 0 },
        // colors: {},
        getLabel: val => val,
    }

    domLabels = {}

    drawXLabels(changeViewWidth = false) {
        const {
            labels = [],
            getLabel,
            opacity = 1,
        } = this.props

        if (labels.length > 0) {
            const { positions, intervalFactor, removed } = this.calcXLabels()
    
            const indexes = Object.keys(positions)
            const existIndexes = Object.keys(this.domLabels)
    
            for (let i = 0; i < existIndexes.length; i += 1) {
                const index = +existIndexes[i]
                const dom = this.domLabels[index]
    
                if (
                    // !indexes.includes(index) ||
                    index % intervalFactor !== 0
                ) {
                    dom.style.opacity = 0
    
                    animate(
                        () => {
                            const scaleFactor = 100 / this.props.width
                            const scrollFromLeft = (this.props.scroll - this.props.width) / 100
    
                            const x =
                                this.props.layout.width *
                                (index / (labels.length - 1) - scrollFromLeft) *
                                scaleFactor
    
                            dom.style.left = `${x}px`
                        },
                        200,
                        () => {
                            dom.remove()
                        }
                    )
    
                    delete this.domLabels[index]
                } else if (removed.includes(index)) {
                    dom.remove()
                    delete this.domLabels[index]
                }
            }
    
            for (let i = 0; i < indexes.length; i += 1) {
                const index = +indexes[i]
    
                const [x, rIndex] = positions[index]
                const text = getLabel(labels[rIndex])
                // const text = this.props.getLabelIndexByX(x + (cellWidth / 2))
    
                let dom = this.domLabels[index]
    
                if (!dom) {
                    const labelStyle = `left: ${x.toFixed(2)}px;opacity: ${changeViewWidth ? 0 : opacity};`
    
                    dom = cre("div", {
                        id: index,
                        className: style.canvas_wrapper__x_labels_wrapper__item,
                        text,
                        style: labelStyle,
                        data: {
                            state: "rendered",
                            index: rIndex,
                            position: x + (30 / 2),
                            value: labels[rIndex]
                        },
                    })
    
                    this.element.appendChild(dom)
    
                    if (changeViewWidth)
                    {
                        setTimeout(() => {
                            dom.style.opacity = 1
                        }, 1)
                    }
    
                    this.domLabels[index] = dom
                } else {
                    const labelStyle = `left: ${x.toFixed(2)}px;opacity: ${opacity};`
                    
                    dom.innerText = text
                    dom.setAttribute("style", labelStyle)
                    dom.dataset.index = rIndex
                    dom.dataset.position = x + (30 / 2)
                    dom.dataset.value = labels[rIndex]
                }
            }
            
            this.indexes = indexes
        }
    }

    clear() {
        const existIndexes = Object.keys(this.domLabels)

        for (let i = 0; i < existIndexes.length; i += 1) {
            const index = +existIndexes[i]
            const dom = this.domLabels[index]

            dom.remove()

            delete this.domLabels[index]
        }
    }

    calcXLabels() {
        const {
            scroll,
            labels = [],
            layout,
            graphLayout: { labelsXWidth = 0 }
        } = this.props

        const removed = []

        const scaleFactor = 100 / this.props.width

        const labelsOnPage = Math.ceil(layout.width / labelsXWidth)

        const cellWidth = (layout.width - (18 * 2)) / labelsOnPage

        const intervalCount = labelsOnPage <= labels.length ? Math.floor(labels.length / labelsOnPage) : 1

        const intervalFactorLog = Math.ceil(Math.log2(intervalCount / scaleFactor))
        const intervalFactor = Math.pow(2, intervalFactorLog)

        const labelsCount = Math.ceil(
            (scaleFactor * labels.length) / intervalFactor,
        )

        const labelsPosition = {}

        for (let i = 0; i < labelsCount; i += 1) {
            const newIndex = i * intervalFactor

            const scrollFromLeft = (scroll - this.props.width) / 100

            let position =
                layout.width *
                (newIndex / (labels.length - 1) - scrollFromLeft) *
                scaleFactor

            position += 18

            // if (newIndex === 0) {
            //     position = 0
            // }

            // if (newIndex === labels.length - 1) {
            //     position = layout.width - cellWidth
            // }

            // const value = labels[newIndex + 1]
            const rIndex = this.props.getLabelIndexByX(position + (30 / 2))

            if (rIndex) {
                if (layout.width >= position && position >= 0 - cellWidth) {
                    labelsPosition[newIndex] = [position, rIndex]
                } else {
                    removed.push(newIndex)
                }
            }
        }

        return {
            positions: labelsPosition,
            count: labelsCount,
            intervalFactor,
            removed,
        }
    }

    componentDidMount() {
        this.clear()

        this.drawXLabels()
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.labels !== prevProps.labels ||
            this.props.id !== prevProps.id
        ) {
            this.clear()
        }

        if (
            this.props.labels !== prevProps.labels ||
            this.props.width !== prevProps.width ||
            this.props.scroll !== prevProps.scroll
        ) {
            if (
                this.props.width !== prevProps.width
            ) {
                this.drawXLabels(true)
            } else {
                this.drawXLabels(false)
            }
        }
    }

    render() {
        this.element = cre("div", {
            className: style.canvas_wrapper__x_labels_wrapper,
        })

        return this.element
    }
}

export default LabelsX
