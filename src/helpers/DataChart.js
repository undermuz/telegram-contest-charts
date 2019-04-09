class DataChart {
    constructor(json) {
        this.data = json
    }

    getXAsix() {
        const id = Object.keys(this.data.types).find(
            id => this.data.types[id] === "x",
        )

        if (!id) {
            throw new Error("Can't found x type")
        }

        const column = this.data.columns.find(
            item => item.length > 0 && item[0] === id,
        )

        if (!column) {
            throw new Error("Can't found x column")
        }

        return column.slice(1)
    }

    getCharts() {
        return this.data.columns
            .filter(item => item[0] !== "x")
            .map(item => ({
                id: item[0],
                type: this.data.types[item[0]],
                label: this.data.names[item[0]],
                color: this.data.colors[item[0]],
                list: item.slice(1)
            }))
    }

    getLines() {
        const lineIds = Object.keys(this.data.types).filter(
            id => this.data.types[id] === "line",
        )

        if (lineIds.length === 0) {
            throw new Error("Can't found any lines")
        }

        const columns = this.data.columns.filter(
            item => item.length > 0 && lineIds.includes(item[0]),
        )

        if (columns.length !== lineIds.length) {
            throw new Error(`Can't found lines #${lineIds.join(",")} in columns`)
        }

        return lineIds.map(lineId => this.getLine(lineId))
    }

    getLine(id) {
        const column = this.data.columns.find(
            item => item.length > 0 && item[0] === id,
        )

        const name = this.data.names[id]
        const color = this.data.colors[id]

        if (!column) {
            throw new Error(`Can't found ${id} column`)
        }

        if (!name) {
            throw new Error(`Can't name for type #${id}`)
        }

        if (!color) {
            throw new Error(`Can't found color for type #${id}`)
        }

        return {
            id,
            label: name,
            color,
            list: column.slice(1),
        }
    }
}

export default DataChart
