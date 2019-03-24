import BaseComponent, { cre } from "../base"

import style from "./style.css"

class IndexSelector extends BaseComponent {
    static defaultProps = {
        index: 0,
        charts: 0,
        onNext: () => false,
        onPrev: () => false,
    }

    componentDidUpdate(prevProps) {
        const { index = 0, charts = 0 } = this.props

        if (prevProps.index !== index || prevProps.charts !== charts) {
            this.nodes.indicator.innerText =
                charts > 0 ? `${index + 1} of ${charts}` : `0 of 0`
        }
    }

    render() {
        const { index = 0, charts = 0, onNext, onPrev } = this.props

        const title = cre("div", {
            className: style.index_selector__title,
            text: "Select chart:",
        })

        const prevBtn = cre("div", {
            className: [style.index_selector__btn, style.index_selector__prev_btn],
            children: cre("div", {
                className: style.index_selector__btn__icon,
                text: "<",
            }),
            onClick: onPrev,
        })

        const indicator = cre("div", {
            className: style.index_selector__indicator,
            text: charts > 0 ? `${index + 1}/${charts}` : `0/0`,
        })

        const nextBtn = cre("div", {
            className: [style.index_selector__btn, style.index_selector__next_btn],
            children: cre("div", {
                className: style.index_selector__btn__icon,
                text: ">",
            }),
            onClick: onNext,
        })

        const element = cre("div", {
            className: style.index_selector,
            children: [title, prevBtn, indicator, nextBtn],
        })

        this.nodes = {
            element,
            title,
            prevBtn,
            indicator,
            nextBtn,
        }

        return element
    }
}

export default IndexSelector
