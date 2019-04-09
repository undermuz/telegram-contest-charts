import { hexToRgb } from './utils';
class CanvasText {
    constructor(text, params = {}) {
        this.text = text
        this.params = params
    }
}

class CanvasLine {
    constructor(from, to, params = {}) {
        this.from = from
        this.to = to
        this.params = params
    }
}

class Canvas {
    static getRetinaRatio() {
        const devicePixelRatio = window.devicePixelRatio || 1
        const c = document.createElement('canvas').getContext('2d')
        const backingStoreRatio = [
            c.webkitBackingStorePixelRatio,
            c.mozBackingStorePixelRatio,
            c.msBackingStorePixelRatio,
            c.oBackingStorePixelRatio,
            c.backingStorePixelRatio,
            1,
        ].reduce((a, b) => a || b)

        return devicePixelRatio / backingStoreRatio
    }

    constructor(element, props) {
        this.element = element
        this.props = props

        this.dpr = Canvas.getRetinaRatio() // window.devicePixelRatio || 1

        this.resize(props.width, props.height)
    }

    resize(width, height) {
        this.props.width = width
        this.props.height = height

        this.ctx = this.element.getContext('2d')

        this.dpr = Canvas.getRetinaRatio()

        this.ctx.scale(this.dpr, this.dpr)

        this.element.style.width = `${width}px`
        this.element.style.height = `${height}px`

        this.element.setAttribute("width", width * this.dpr)
        this.element.setAttribute("height", height * this.dpr)
    }

    clear() {
        const { width = 0, height = 0 } = this.props

        this.ctx.clearRect(0, 0, width * this.dpr, height * this.dpr)
    }

    text(text, { x, y, size = 12, align = "center", font = "serif", color = "black" }) {
        this.ctx.font = `${Math.floor(size * this.dpr)}px ${font}`
        this.ctx.textAlign = align
        this.ctx.fillStyle = color
        this.ctx.fillText(text, x * this.dpr, y * this.dpr)
    }

    line(from, to, { color = "black", lineWidth = 2 }) {
        this.ctx.beginPath()
        this.ctx.strokeStyle = color
        this.ctx.lineWidth = lineWidth * this.dpr
        this.ctx.moveTo(from.x * this.dpr, from.y * this.dpr)
        this.ctx.lineTo(to.x * this.dpr, to.y * this.dpr)
        this.ctx.stroke()
    }

    rect(x, y, { width = 10, height = 10, color = "black", fill = false }) {
        this.ctx.strokeStyle = color
        this.ctx.fillStyle = color

        if (fill)
            this.ctx.fillRect(
                x * this.dpr,
                y * this.dpr,
                width * this.dpr,
                height * this.dpr,
            )

        if (!fill)
            this.ctx.strokeRect(
                x * this.dpr,
                y * this.dpr,
                width * this.dpr,
                height * this.dpr,
            )
    }

    arc(x, y, r, startAngle, endAngle, params) {
        const { color = "black", mouseX = 0, mouseY = 0, mouseMove = false } = params

        this.ctx.beginPath()

        this.ctx.moveTo(x * this.dpr, y * this.dpr)
        this.ctx.arc(x * this.dpr, y * this.dpr, r * this.dpr, startAngle, endAngle)

        this.ctx.fillStyle = color

        if (mouseMove) {
            const isIntersect = this.ctx.isPointInPath(mouseX * this.dpr, mouseY * this.dpr)

            if (isIntersect) {
                mouseMove()
            }
        }

        this.ctx.closePath()

        this.ctx.fill()
    }

    circle(x, y, r, { color = "black", strokColor = false, lineWidth = 1 }) {
        this.ctx.beginPath()

        this.ctx.arc(x * this.dpr, y * this.dpr, r * this.dpr, 0, Math.PI * 2, true)

        if (strokColor) {
            this.ctx.strokeStyle = strokColor
            this.ctx.lineWidth = lineWidth * this.dpr
            this.ctx.stroke()
        }

        if (color) {
            this.ctx.fillStyle = color
            this.ctx.fill()
        }
    }

    beginPath({ opacity = 1, color, lineWidth }) {
        this.ctx.beginPath()

        if (opacity < 1) {
            const rgb = hexToRgb(color)

            if (rgb !== null) {
                color = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`
            }
        }

        return {
            moveTo: (x, y) => {
                this.ctx.moveTo(x * this.dpr, y * this.dpr)
            },
            lineTo: (x, y) => {
                this.ctx.lineTo(x * this.dpr, y * this.dpr)
            },
            stroke: () => {
                this.ctx.strokeStyle = color
                this.ctx.lineWidth = lineWidth * this.dpr

                this.ctx.stroke()
            },
            fill: () => {
                this.ctx.fillStyle = color
                this.ctx.lineWidth = lineWidth * this.dpr

                this.ctx.fill()
            },
        }
    }

    draw(item) {
        if (item instanceof CanvasText) this.text(item.text, item.params)
        if (item instanceof CanvasLine) this.line(item.from, item.to, item.params)
    }
}

export {
    CanvasText,
    CanvasLine,
}

export default Canvas
