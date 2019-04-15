import BaseComponent, { cre } from "../base"

import style from "./style.css"

import {
    MODE_COLOR_DAY,
    MODE_COLOR_NIGHT,
    MAP_MODE_COLOR_TO_TEXT,
} from 'constants/COLORS'

class ColorSwitcher extends BaseComponent {
    state = {
        value: MODE_COLOR_DAY
    }

    componentDidUpdate() {
        this.colorSwitcherItem.innerText = MAP_MODE_COLOR_TO_TEXT[this.state.value]
    }

    handleToggle() {
        const value = this.state.value === MODE_COLOR_DAY ? MODE_COLOR_NIGHT : MODE_COLOR_DAY

        this.setState({
            value
        })

        this.props.onToggle(value)

        this.element.classList.toggle(
            style.mode_night,
            value === MODE_COLOR_NIGHT,
        )
    }

    render() {
        const { value = MODE_COLOR_DAY } = this.state

        this.colorSwitcherItem = cre("div", {
            className: style.color__switcher__item,
            text: MAP_MODE_COLOR_TO_TEXT[value],
            onClick: this.handleToggle.bind(this)
        })

        this.element = cre("div", {
            className: style.color__switcher,
            children: this.colorSwitcherItem,
        })

        return this.element
    }
}

export default ColorSwitcher
