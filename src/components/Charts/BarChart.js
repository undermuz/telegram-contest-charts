import BaseComponent, { cre } from "../base"

import style from "./bar_chart.css"

class BarChart extends BaseComponent {
    static defaultProps = {
        id: 1,
        data: { position: {}, removed: [] }
    }

    domLabels = {}

    drawXLabels() {
        const {
            data: { positions = {}, removed = [] }
        } = this.props

        const indexes = Object.keys(positions)
        const existIndexes = Object.keys(this.domLabels)

        for (let i = 0; i < existIndexes.length; i += 1) {
            const index = existIndexes[i]
            const dom = this.domLabels[index]

            if (removed.includes(index)) {
                dom.remove()
                delete this.domLabels[index]
            }
        }

        for (let i = 0; i < indexes.length; i += 1) {
            const index = indexes[i]

            const { x, y, width, height, opacity, color } = positions[index]

            let dom = this.domLabels[index]

            if (!dom) {
                const itemStyle = ([
                    `left: ${x}px`,
                    `top: ${y}px`,
                    `width: ${width}px`,
                    `height: ${height}px`,
                    `opacity: ${opacity}`,
                    `background-color: ${color}`,
                ]).join(";")

                dom = cre("div", {
                    id: index,
                    className: style.canvas_wrapper__bar_chart__item,
                    style: itemStyle,
                })

                this.element.appendChild(dom)

                this.domLabels[index] = dom
            } else {
                if (dom.style.left !== `${x}px`) {
                    dom.style.left = `${x}px`
                }

                if (dom.style.top !== `${y}px`) {
                    dom.style.top = `${y}px`
                }

                if (dom.style.width !== `${width}px`) {
                    dom.style.width = `${width}px`
                }

                if (dom.style.height !== `${height}px`) {
                    dom.style.height = `${height}px`
                }

                if (dom.style.opacity !== `${opacity}`) {
                    dom.style.opacity = `${opacity}`
                }

                if (dom.style['background-color'] !== `${color}`) {
                    dom.style['background-color'] = `${color}`
                }
            }
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

    componentDidMount() {
        this.clear()

        this.drawXLabels()
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.id !== prevProps.id
        ) {
            this.clear()
        }

        if (this.props.data !== prevProps.data) {
            this.drawXLabels()
        }
    }

    render() {
        this.element = cre("div", {
            className: style.canvas_wrapper__bar_chart,
        })

        return this.element
    }
}

export default BarChart
