import "styles/index.css"
import "styles/reset.css"

import 'helpers/polyfills'

import App from "./components/App"
import ColorSwitcher from './components/ColorSwithcer';

const getZoomedDataUrl = (folder) => (unixTimestamp) => {
    const date = new Date(unixTimestamp)

    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    if (`${month}`.length === 1) month = `0${month}`
    if (`${day}`.length === 1) day = `0${day}`

    const year_month = `${year}-${month}`

    return `${folder}/${year_month}/${day}.json`
}

if (window.location.pathname.indexOf("stage-1.html") !== -1) {
    window.app0 = new App({ name: "Chart 1", dataUrl: "./data/data.0.json" })
    window.app0.renderDom(document.getElementById("app0"))
    
    window.app1 = new App({ name: "Chart 2", dataUrl: "./data/data.1.json" })
    window.app1.renderDom(document.getElementById("app1"))
    
    window.app2 = new App({ name: "Chart 3", dataUrl: "./data/data.2.json" })
    window.app2.renderDom(document.getElementById("app2"))
    
    window.app3 = new App({ name: "Chart 4", dataUrl: "./data/data.3.json" })
    window.app3.renderDom(document.getElementById("app3"))
    
    window.app4 = new App({ name: "Chart 5", dataUrl: "./data/data.4.json" })
    window.app4.renderDom(document.getElementById("app4"))
} else {
    window.app0 = new App({
        name: "Followers",
        dataUrl: "./data/new/1/overview.json",
        zoomType: "byHours",
        getZoomedDataUrl: getZoomedDataUrl("./data/new/1"),
    })
    window.app0.renderDom(document.getElementById("app0"))

    window.app1 = new App({
        name: "Interactions",
        dataUrl: "./data/new/2/overview.json",
        zoomType: "byHours",
        getZoomedDataUrl: getZoomedDataUrl("./data/new/2")
    })
    window.app1.renderDom(document.getElementById("app1"))

    window.app2 = new App({
        name: "Chart 3",
        dataUrl: "./data/new/3/overview.json",
        zoomType: "byHours",
        getZoomedDataUrl: getZoomedDataUrl("./data/new/3"),
    })
    window.app2.renderDom(document.getElementById("app2"))

    window.app3 = new App({
        name: "Views",
        dataUrl: "./data/new/4/overview.json",
        zoomType: "by3Days",
        getZoomedDataUrl: getZoomedDataUrl("./data/new/4")
    })
    window.app3.renderDom(document.getElementById("app3"))

    window.app4 = new App({
        name: "Chart 5",
        dataUrl: "./data/new/5/overview.json",
        zoomType: "byDay",
        arcMode: true
    })
    window.app4.renderDom(document.getElementById("app4"))
}

window.colorSwitcher = new ColorSwitcher({
    onToggle: (mode) => {
        window.app0.setProps({ mode })
        window.app1.setProps({ mode })
        window.app2.setProps({ mode })
        window.app3.setProps({ mode })
        window.app4.setProps({ mode })
    }
})
window.colorSwitcher.renderDom(document.getElementById("color_switcher"))