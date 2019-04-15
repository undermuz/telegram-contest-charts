const cre = (tag, params = {}) => {
    const node = document.createElement(tag)

    const paramKeys = Object.keys(params)

    for (let i = 0; i < paramKeys.length; i += 1) {
        const name = paramKeys[i]
        const value = params[name]

        if (name === "className") {
            if (value && value.constructor === Array) {
                value.forEach(className => className && node.classList.add(className))
            } else {
                node.classList.add(value)
            }
        } else if (name === "style") {
            node.setAttribute("style", value)
        } else if (name.substr(0, 2) === "on") {
            // node[name.toLocaleLowerCase()] = value
            node.addEventListener(name.substr(2).toLocaleLowerCase(), value)
        } else if (name === "children") {
            if (value.constructor === Array) {
                for (let index = 0; index < value.length; index += 1) {
                    node.appendChild(value[index])
                }
            } else {
                node.appendChild(value)
            }
        } else if (name === "text") {
            node.innerText = value
        } else if (name === "data") {
            const paramNames = Object.keys(value)

            paramNames.forEach(paramName => {
                node.dataset[paramName] = value[paramName]
            })
        } else {
            node.setAttribute(name, value)
        }
    }

    return node
}

class Component {
    static defaultProps = {}

    state = {}

    props = {}

    node = null

    constructor(props = {}) {
        this.props = {
            ...this.constructor.defaultProps,
            ...props,
        }
    }

    componentDidMount() {
        return null
    }

    setState = (params, callback = false) => {
        const prevState = { ...this.state }

        this.state = {
            ...this.state,
            ...params,
        }

        this.componentDidUpdate(this.props, prevState, "state")

        if (callback) {
            callback()
        }
    }

    setProps(params) {
        const prevProps = { ...this.props }

        this.props = {
            ...this.props,
            ...params,
        }

        this.componentDidUpdate(prevProps, this.state, "props")
    }

    componentDidUpdate() {
        return null
    }

    componentWillUnmount() {
    }

    destroy() {
        this.componentWillUnmount()

        this.ownElement.removeChild(this.node)
    }

    render() {
        return document.createElement("div")
    }

    renderDom(element) {
        this.node = this.render()

        this.ownElement = element

        element.appendChild(this.node)

        this.componentDidMount()
    }
}

export { cre }

export default Component
