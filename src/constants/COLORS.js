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
        activeLine: "#D2D5D7",
        textOpacity: 0.7,
        lineOpacity: 0.1,
        activeLineOpacity: 1,
    },
    [MODE_COLOR_NIGHT]: {
        background: "#242F3E",
        text: "#FFFFFF",
        lines: "#FFFFFF",
        lastLine: "#FFFFFF",
        activeLine: "#D2D5D7",
        textOpacity: 0.7,
        lineOpacity: 0.1,
        activeLineOpacity: 0.1,
    },
}