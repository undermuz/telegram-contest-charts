import BaseComponent, { cre } from "../base"

import style from "./style.css"
import { MAP_MONTHS } from 'constants/DATES'

class DatesRange extends BaseComponent {
    static defaultProps = {
        from: false,
        to: false,
    }

    state = {
        date_from: false,
        date_to: false
    }

    nodes = {
        from: false,
        to: false,
    }

    constructor(props) {
        super(props)

        const { from = false, to = false } = props

        this.applyTimestamp(from, "from")
        this.applyTimestamp(to, "to")

        this.appearDatesRange(this.state.from, this.state.to)
    }

    componentDidUpdate(prevProps, prevState) {
        const { from = false, to = false } = this.props
        const { from: prevFrom = false, to: prevTo = false } = prevProps

        const { date_from, date_to } = this.state
        
        if (from !== prevFrom) {
            this.applyTimestamp(from, "from")
        }

        if (to !== prevTo) {
            this.applyTimestamp(to, "to")
        }

        if (date_from !== prevState.date_from) {
            this.applyDateItem(date_from, "from")
        }

        if (!this.isSameDay(date_from, date_to) && date_to !== prevState.date_to) {
            this.applyDateItem(date_to, "to")
        }
        
        if (this.isSameDay(date_from, date_to) && this.isDateItemShown("to")) {
            this.hideDateItem(date_to, "to")
        }

        // debugger
    }

    isSameDay(from, to) {
        if (from !== false && to !== false) {    
            return (
                from.year === to.year &&
                from.month === to.month &&
                from.day === to.day
            )
        } else if (from === false && to === false) {
            return false
        } else {
            return false
        }
    }

    parseTimestamp(unixTimestamp = false) {
        if (unixTimestamp !== false) {
            const date = new Date(unixTimestamp)

            const year = date.getFullYear()
            const month = MAP_MONTHS[date.getMonth()]
            const day = date.getDate()

            return {
                year,
                month,
                day
            }
        }

        return false
    }
    
    applyTimestamp(unixTimestamp = false, type = "from") {
        this.setState({
            [`date_${type}`]: this.parseTimestamp(unixTimestamp)
        })
    }

    createDateItem({ year, month, day }) {
        const yearNode = cre("div", {
            className: style.dates_range__item__year,
            text: year,
        })

        const monthNode = cre("div", {
            className: style.dates_range__item__month,
            text: month,
        })

        const dayNode = cre("div", {
            className: style.dates_range__item__day,
            text: day,
        })

        const itemNode = cre("div", {
            className: style.dates_range__item,
            children: [
                dayNode,
                monthNode,
                yearNode,
            ],
        })

        return {
            item: itemNode,
            year: yearNode,
            month: monthNode,
            day: dayNode,
        }
    }

    appearDateItem(params = false, type = "from") {
        this.nodes[type] = params === false ? false : this.createDateItem(params)
    }

    appearDatesRange(from, to) {
        this.appearDateItem(from, "from")
        this.appearDateItem(to, "to")
    }

    updateDateItem(params = false, type = "from") {
        if (params !== false) {
            this.nodes[type].year.innerText = params.year
            this.nodes[type].month.innerText = params.month
            this.nodes[type].day.innerText = params.day
        }
    }
    
    isDateItemShown(type = "from") {
        return this.nodes[type] !== false
    }

    showDateItem(params = false, type = "from") {
        if (params !== false) {
            this.appearDateItem(params, type)

            if (this.nodes[type]) {
                this.element.appendChild(this.nodes[type].item)
            }
        }
    }

    hideDateItem(params = false, type = "from") {
        if (this.nodes[type]) {
            this.element.removeChild(this.nodes[type].item)

            this.nodes[type] = false
        }
    }

    applyDateItem(params = false, type = "from") {
        if (this.isDateItemShown(type)) {
            if (params !== false) {
                this.updateDateItem(params, type)
            } else {
                this.hideDateItem(params, type)
            }
        } else if (params !== false) {
            this.showDateItem(params, type)
        }
    }

    render() {
        const children = []

        if (this.nodes.from) {
            children.push(this.nodes.from.item)
        }

        if (this.nodes.to) {
            children.push(this.nodes.to.item)
        }

        this.element = cre("div", {
            className: style.dates_range,
            children
        })

        return this.element
    }
}

export default DatesRange
