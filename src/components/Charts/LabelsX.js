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
        } = this.props

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

            const x = positions[index]
            const text = getLabel(labels[index])

            let dom = this.domLabels[index]

            if (!dom) {
                const labelStyle = `left: ${x.toFixed(2)}px;opacity: ${changeViewWidth ? 0 : 1};`

                dom = cre("div", {
                    id: index,
                    className: style.canvas_wrapper__x_labels_wrapper__item,
                    text,
                    style: labelStyle,
                    data: {
                        state: "rendered",
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
                const labelStyle = `left: ${x.toFixed(2)}px;opacity: 1;`

                dom.setAttribute("style", labelStyle)
            }
        }
        
        this.indexes = indexes
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

        const cellWidth = layout.width / labelsOnPage

        const intervalCount = Math.floor(labels.length / labelsOnPage)
        const intervalFactorLog = Math.ceil(Math.log2(intervalCount / scaleFactor))
        const intervalFactor = Math.pow(2, intervalFactorLog)

        const labelsCount = Math.ceil(
            (scaleFactor * labels.length) / intervalFactor,
        )

        const labelsPosition = {}

        for (let i = 0; i < labelsCount; i += 1) {
            const newIndex = i * intervalFactor

            const scrollFromLeft = (scroll - this.props.width) / 100

            const position =
            layout.width *
                (newIndex / (labels.length - 1) - scrollFromLeft) *
                scaleFactor

            const value = labels[newIndex]

            if (value) {
                if (layout.width >= position && position >= 0 - cellWidth) {
                    labelsPosition[newIndex] = position
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
