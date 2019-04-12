import BaseComponent, { cre } from "../base"

import style from "./style.css"
import Charts from '../Charts'
import { getClickPosition } from 'helpers/utils'

class MiniMap extends BaseComponent {
    static defaultProps = {
        id: 0,
        dataset: [],
        visibled: [],
        layout: {},
        scroll: 0,
        width: 0,
        yScaled: false,
    }

    constructor(props) {
        super(props)

        const { id, dataset = [], layout, yScaled } = props

        this.cartMiniMap = new Charts({
            id,
            mini: true,
            lineWidth: 2,
            dataset,
            yScaled,
            allowXAsix: false,
            allowYAsix: false,
            layout: {
                width: layout.width,
                height: 50,
            },
        })
    }

    componentDidMount() {
        this.attachEvents()
    }

    componentDidUpdate(prevProps) {
        const { scroll, width, dataset, layout, visibled, yScaled } = this.props

        if (
            prevProps.scroll !== scroll ||
            prevProps.width !== width
        ) {
            this.minimapZone.style.left = `${scroll - width}%`
            this.minimapZone.style.width = `${width}%`
    
            this.minimapLeftZone.style = `width: ${scroll - width}%`
            this.minimapRightZone.style = `width: ${100 - scroll}%`
    
            this.minimapLeftSizeZone.style = `left: ${scroll - width}%;`
            this.minimapRightSizeZone.style = `left: ${scroll}%;`
        }

        if (
            prevProps.dataset !== dataset ||
            prevProps.yScaled !== yScaled ||
            prevProps.visibled !== visibled ||
            prevProps.layout !== layout
        ) {
            this.cartMiniMap.setProps({
                yScaled,
                visibled,
                dataset,
                layout: {
                    width: layout.width,
                    height: 50,
                },
            })
        }
    }

    /* EVENTS */

    dettachEvents() {
        document.removeEventListener("mousemove", this.documentEventMouseMove)
        document.removeEventListener("mouseup", this.documentEventMouseUp)
        document.removeEventListener("touchmove", this.documentEventMouseMove)
        document.removeEventListener("touchend", this.documentEventMouseUp)
    }

    attachEvents() {
        this.documentEventMouseMove = this.eventMouseMove.bind(this)
        this.documentEventMouseUp = this.eventMouseUp.bind(this)

        document.addEventListener("mousemove", this.documentEventMouseMove)
        document.addEventListener("mouseup", this.documentEventMouseUp)
        document.addEventListener("touchmove", this.documentEventMouseMove)
        document.addEventListener("touchend", this.documentEventMouseUp)
    }

    eventMouseMove = e => {
        if (this.isChangePosition) {
            const { layout, width } = this.props
            const { scroll } = this.changePositionEvent

            const clickPosition = {
                x: this.changePositionEvent.x,
                y: this.changePositionEvent.y,
            }

            const currentPosition = getClickPosition(e)

            let dinst = clickPosition.x - currentPosition.x
            const direction = dinst > 0 ? 1 : 0

            dinst = Math.abs(dinst)

            if (dinst !== 0) {
                const diffScroll = (dinst * 100) / layout.width
                let newScroll = scroll + diffScroll

                if (direction === 1) {
                    newScroll = scroll - diffScroll
                }

                if (newScroll - width < 0) {
                    newScroll = width
                }

                if (newScroll > 100) {
                    newScroll = 100
                }

                if (this.props.scroll !== newScroll) {
                    this.props.onChange({
                        scroll: newScroll,
                        width,
                    })
                }
            }
        }

        if (this.isChangeSize) {
            const { layout } = this.props
            const { width, side = "left" } = this.changeSizeEvent

            const clickPosition = {
                x: this.changeSizeEvent.x,
                y: this.changeSizeEvent.y,
            }

            const currentPosition = getClickPosition(e)

            let dinst = clickPosition.x - currentPosition.x
            const direction = dinst > 0 ? 1 : 0

            dinst = Math.abs(dinst)

            if (dinst !== 0) {
                if (side === "left") {
                    const { scroll } = this.props

                    const percentDinst = (dinst * 100) / layout.width
                    let newWidth = width - percentDinst

                    if (direction === 1) {
                        newWidth = width + percentDinst
                    }

                    if (newWidth > scroll) {
                        newWidth = scroll
                    }

                    if (newWidth < 5) {
                        newWidth = 5
                    }

                    if (this.props.width !== newWidth) {
                        this.props.onChange({
                            width: newWidth,
                            scroll
                        })
                    }
                } else if (side === "right") {
                    const { scroll } = this.changeSizeEvent

                    const percentDinst = (dinst * 100) / layout.width
                    let newWidth = width + percentDinst
                    let newScroll = scroll + percentDinst

                    if (direction === 1) {
                        newWidth = width - percentDinst
                        newScroll = scroll - percentDinst
                    }

                    if (newScroll > 100) {
                        newScroll = 100

                        const x = scroll - width

                        newWidth = 100 - x
                    }

                    if (newWidth < 5) {
                        newWidth = 5
                    }

                    if (this.props.width !== newWidth) {
                        this.props.onChange({
                            width: newWidth,
                            scroll: newScroll,
                        })
                    }
                }
            }
        }
    }

    eventMouseUp = () => {
        this.isChangePosition = false
        this.isChangeSize = false
        this.changePositionEvent = false
        this.changeSizeEvent = false
    }

    eventLeftZoneMouseDown = e => {
        const { width, scroll } = this.props

        this.isChangeSize = true
        this.changeSizeEvent = {
            ...getClickPosition(e),
            side: "left",
            width,
            scroll,
        }
    }

    eventRightZoneMouseDown = e => {
        const { width, scroll } = this.props

        this.isChangeSize = true
        this.changeSizeEvent = {
            ...getClickPosition(e),
            side: "right",
            width,
            scroll,
        }
    }

    eventZoneMouseDown = e => {
        const { scroll } = this.props

        this.isChangePosition = true
        this.changePositionEvent = {
            ...getClickPosition(e),
            scroll,
        }
    }

    render() {
        const { scroll, width } = this.props

        this.minimapLeftZone = cre("div", {
            className: style.minimap__left_zone,
            style: `width: ${scroll - width}%`,
        })

        this.minimapLeftSizeZone = cre("div", {
            className: style.minimap__left_size_zone,
            style: `left: ${scroll - width}%;`,
            children: cre("div", {
                className: style.minimap__size_zone__helper,
                onMouseDown: this.eventLeftZoneMouseDown.bind(this),
                onTouchStart: this.eventLeftZoneMouseDown.bind(this),
            }),
        })

        this.minimapZone = cre("div", {
            className: style.minimap__zone,
            style: `left: ${scroll - width}%; width: ${width}%`,
            onMouseDown: this.eventZoneMouseDown.bind(this),
            onTouchStart: this.eventZoneMouseDown.bind(this),
        })

        this.minimapRightSizeZone = cre("div", {
            className: style.minimap__right_size_zone,
            style: `left: ${scroll}%;`,
            children: cre("div", {
                className: style.minimap__size_zone__helper,
                onMouseDown: this.eventRightZoneMouseDown.bind(this),
                onTouchStart: this.eventRightZoneMouseDown.bind(this),
            }),
        })

        this.minimapRightZone = cre("div", {
            className: style.minimap__right_zone,
            style: `width: ${100 - scroll}%`,
        })

        this.minimap = cre("div", {
            className: style.minimap,
            children: [
                this.minimapLeftZone,
                this.minimapLeftSizeZone,
                this.minimapZone,
                this.minimapRightSizeZone,
                this.minimapRightZone,
            ],
        })

        this.canvasWrapper = cre("div", {
            className: style.minimap__canvas_wrapper,
        })

        this.element = cre("div", {
            className: style.charts__minimap_wrapper,
            children: [this.minimap, this.canvasWrapper],
        })

        this.cartMiniMap.renderDom(this.canvasWrapper)

        return this.element
    }
}

export default MiniMap
