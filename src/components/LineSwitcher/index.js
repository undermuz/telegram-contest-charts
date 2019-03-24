import BaseComponent, { cre } from "../base"

import style from "./style.css"
import CheckedIcon from "svg/checked.svg"

class LineSwitcher extends BaseComponent {
    static defaultProps = {
        dataset: [],
        visibled: [],
    }

    static createItems(dataset = [], visibled = [], onSwitch) {
        return dataset.map(item =>
            cre("div", {
                id: `switcher-for-${item.id}`,
                className: style.line__switchers__item,
                children: [
                    cre("div", {
                        className: style.line__switchers__item__check,
                        style: `background-color: ${item.color}`,
                        children: [
                            cre("div", {
                                className: style.line__switchers__item__check__circle_blank,
                                style: `transform: scale(${!visibled.includes(item.id) ? 1 : 0});`,
                            }),
                            cre("div", {
                                className: style.line__switchers__item__check__icon,
                                style: `background-image: url(${CheckedIcon})`,
                            }),
                        ],
                    }),
                    cre("div", {
                        className: style.line__switchers__item__label,
                        text: item.label,
                    }),
                ],
                onClick: () => onSwitch(item.id),
            }),
        )
    }

    componentDidUpdate(prevProps) {
        const { dataset = [], visibled = [] } = this.props

        if (prevProps.dataset !== dataset) {
            this.handleReRender()
        } else if (prevProps.visibled !== visibled) {
            this.handleApplayVisibled()
        }
    }

    handleApplayVisibled() {
        const { dataset = [], visibled = [] } = this.props

        dataset.forEach(item => {
            const switcher = this.items.find(
                _switcher => _switcher.id === `switcher-for-${item.id}`,
            )

            if (switcher) {
                const circleBlank = switcher.querySelector(
                    `.${style.line__switchers__item__check__circle_blank}`,
                )

                if (circleBlank) {
                    circleBlank.style =
                        `${style.line__switchers__item__check__circle_blank};` +
                        `transform: scale(${!visibled.includes(item.id) ? 0.9 : 0});`
                } else {
                    throw new Error(
                        `Can't find circle-blank by selector .` +
                        style.line__switchers__item__check__circle_blank +
                        `in swticher for ${item.id}`,
                    )
                }
            } else {
                throw new Error(`Can't find swticher for ${item.id}`)
            }
        })
    }

    handleReRender() {
        const { dataset = [], visibled = [], onSwitch } = this.props
        
        this.items.forEach(item => item.remove())
        
        this.items = LineSwitcher.createItems(dataset, visibled, onSwitch)

        this.items.forEach(item => this.element.appendChild(item))
    }

    render() {
        const { dataset = [], visibled = [], onSwitch } = this.props

        this.items = LineSwitcher.createItems(dataset, visibled, onSwitch)

        this.element = cre("div", {
            className: style.line__switchers,
            children: this.items
        })

        return this.element
    }
}

export default LineSwitcher
