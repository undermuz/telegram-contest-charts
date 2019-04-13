import BaseComponent, { cre } from "../base"

import style from "./style.css"
import CheckedIcon from "svg/checked.svg"

import {
    MODE_COLOR_DAY,
    MODE_COLOR_NIGHT,
} from 'constants/COLORS'

import { hexToRgb, rgbToHsl, hslToRgb } from 'helpers/Colors'

/*class LineSwitcher extends BaseComponent {
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
}*/

class LineSwitcher extends BaseComponent {
    static defaultProps = {
        dataset: [],
        visibled: [],
    }

    static getDarknessColor(color, opacity = 1) {
        let rgb = hexToRgb(color)

        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

        const darknessRgb = hslToRgb(hsl[0], hsl[1] - 0.20, hsl[2])

        rgb.r = darknessRgb[0]
        rgb.g = darknessRgb[1]
        rgb.b = darknessRgb[2]

        if (opacity < 1) {
            color = `rgba(${rgb.r},${rgb.g},${rgb.b},${opacity})`
        } else {
            color = `rgb(${rgb.r},${rgb.g},${rgb.b})`
        }

        return color
    }

    static getColor(mode, color, opacity = 1) {
        let rgb = hexToRgb(color)

        if (mode === MODE_COLOR_NIGHT) {
            const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

            const darknessRgb = hslToRgb(hsl[0], hsl[1] - 0.20, hsl[2])

            rgb.r = darknessRgb[0]
            rgb.g = darknessRgb[1]
            rgb.b = darknessRgb[2]
        }

        if (opacity < 1) {
            color = `rgba(${rgb.r},${rgb.g},${rgb.b},${opacity})`
        } else {
            color = `rgb(${rgb.r},${rgb.g},${rgb.b})`
        }

        return color
    }

    static createItems(dataset = [], visibled = [], mode = MODE_COLOR_DAY, onMouseDown) {
        return dataset.map(item => {
            const color = LineSwitcher.getColor(mode, item.color)
            // const darknessColor = LineSwitcher.getDarknessColor(item.color)

            const visible = visibled.includes(item.id)

            return cre("div", {
                id: `switcher-for-${item.id}`,
                className: [style.line__switchers__item, visible ? style.line__switchers__item_active : ""],
                style: `border-color: ${color};` + (!visible ? "" : `background-color: ${color}`),
                children: [
                    cre("div", {
                        className: style.line__switchers__item__check,
                        children: [
                            cre("div", {
                                className: style.line__switchers__item__check__icon,
                                style: `background-image: url(${CheckedIcon})`,
                            }),
                        ],
                    }),
                    cre("div", {
                        className: style.line__switchers__item__label,
                        text: item.label,
                        style: !visible ? `color: ${color};` : ``,
                    }),
                    cre("div", {
                        className: style.line__switchers__item__tap_indicator,
                        style: `background-color: ${color};`,
                    }),
                ],
                onMouseDown: (e) => onMouseDown(e, item),
                onTouchStart: (e) => onMouseDown(e, item),
            })
        })
    }

    touching = false
    longTouchingTimeout = 500

    componentDidMount() {
        this.attachEvents()
    }

    componentDidUpdate(prevProps) {
        const { dataset = [], visibled = [] } = this.props

        const { mode = MODE_COLOR_DAY } = this.props

        if (prevProps.dataset !== dataset) {
            this.handleReRender()
        } else if (
            prevProps.visibled !== visibled ||
            prevProps.mode !== mode
        ) {
            this.handleApplayVisibled()
        }
    }

    attachEvents() {
        document.addEventListener("mouseup", this.eventMouseUp.bind(this))
        document.addEventListener("touchend", this.eventMouseUp.bind(this))
    }

    eventMouseUp(e) {
        if (this.touching) {
            const { item, timeoutId, long = false } = this.touching

            const switcher = this.items.find(
                _switcher => _switcher.id === `switcher-for-${item.id}`,
            )

            if (switcher) {
                const closestEl = e.target.closest(`.${style.line__switchers__item}`)
                const isOutside = closestEl !== switcher
    
                if (!isOutside) {
                    console.log("mouseup", item.id)
    
                    switcher.classList.remove(style.line__switchers__item__touching)
                    clearTimeout(timeoutId)
    
                    if (!long) {
                        this.props.onSwitch(item.id)
                    } else {
                        console.log("donw switch - couse long tap", item.id)
                    }
        
                    this.touching = false
                } else {
                    console.log("outside", item.id, e.target)
                }
            }
        }
    }

    handleMouseDown( e, item ) {
        console.log("mousedown", item.id)

        e.preventDefault()
        e.stopPropagation()

        const switcher = this.items.find(
            _switcher => _switcher.id === `switcher-for-${item.id}`,
        )

        if (switcher) {
            switcher.classList.add(style.line__switchers__item__touching)

            const timeoutId = setTimeout(() => {
                this.touching.long = true

                console.log("timeout", item.id)

                this.props.onSelectOne(item.id)
            }, this.longTouchingTimeout)

            this.touching = {
                item,
                timeoutId,
                long: false
            }
        }
    }

    handleApplayVisibled() {
        const { dataset = [], visibled = [] } = this.props

        const { mode = MODE_COLOR_DAY } = this.props

        dataset.forEach(item => {
            const switcher = this.items.find(
                _switcher => _switcher.id === `switcher-for-${item.id}`,
            )

            const visible = visibled.includes(item.id)

            if (switcher) {
                const label = switcher.querySelector(
                    `.${style.line__switchers__item__label}`,
                )

                const color = LineSwitcher.getColor(mode, item.color)

                console.log({color})

                switcher.style = `border-color: ${color};` + (visible ? `background-color: ${color}` : "")
                switcher.classList.toggle(style.line__switchers__item_active, visible)
                
                if (label) {
                    label.style = !visible ? `color: ${item.color};` : ``
                }
            } else {
                throw new Error(`Can't find swticher for ${item.id}`)
            }
        })
    }

    handleReRender() {
        const { dataset = [], visibled = [], mode = MODE_COLOR_DAY } = this.props

        this.items.forEach(item => item.remove())

        this.items = LineSwitcher.createItems(dataset, visibled, mode, this.handleMouseDown.bind(this))

        this.items.forEach(item => this.element.appendChild(item))
    }

    render() {
        const { dataset = [], visibled = [], mode = MODE_COLOR_DAY } = this.props

        this.items = LineSwitcher.createItems(dataset, visibled, mode, this.handleMouseDown.bind(this))

        this.element = cre("div", {
            className: style.line__switchers,
            children: this.items
        })

        return this.element
    }
}

export default LineSwitcher
