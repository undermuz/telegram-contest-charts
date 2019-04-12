export const MODE_COLOR_DAY = "day"
export const MODE_COLOR_NIGHT = "night"

export const MAP_MODE_COLOR_TO_TEXT = {
    [MODE_COLOR_DAY]: "Switch to Night Mode",
    [MODE_COLOR_NIGHT]: "Switch to Day Mode",
}

export const MAP_MODE_COLOR_TO_CHART_COLORS = {
    [MODE_COLOR_DAY]: {
        background: "#fff",
        text: "#182D3B",
        lines: "#182D3B",
        lastLine: "#182D3B",
        activeLine: "#182D3B",
        textOpacity: 0.7,
        lineOpacity: 0.1
    },
    [MODE_COLOR_NIGHT]: {
        background: "#242F3E",
        text: "#546778",
        lines: "#293544",
        lastLine: "#313D4D",
        activeLine: "#3B4A5A",
    },
}