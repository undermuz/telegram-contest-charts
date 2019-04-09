import "fonts/index.css"
import "styles/reset.css"

import App from "./components/App"

if (window.location.pathname === "/") {
    window.app0 = new App({ name: "Chart 1", dataUrl: "data/data.0.json" })
    window.app0.renderDom(document.getElementById("app0"))
    
    window.app1 = new App({ name: "Chart 2", dataUrl: "data/data.1.json" })
    window.app1.renderDom(document.getElementById("app1"))
    
    window.app2 = new App({ name: "Chart 3", dataUrl: "data/data.2.json" })
    window.app2.renderDom(document.getElementById("app2"))
    
    window.app3 = new App({ name: "Chart 4", dataUrl: "data/data.3.json" })
    window.app3.renderDom(document.getElementById("app3"))
    
    window.app4 = new App({ name: "Chart 5", dataUrl: "data/data.4.json" })
    window.app4.renderDom(document.getElementById("app4"))
} else if (window.location.pathname === "/stage-2.html") {
    window.app0 = new App({ name: "Followers", dataUrl: "data/new/1/overview.json" })
    window.app0.renderDom(document.getElementById("app0"))

    window.app1 = new App({ name: "Interactions", dataUrl: "data/new/2/overview.json" })
    window.app1.renderDom(document.getElementById("app1"))

    window.app2 = new App({ name: "Chart 3", dataUrl: "data/new/3/overview.json" })
    window.app2.renderDom(document.getElementById("app2"))

    window.app3 = new App({ name: "Views", dataUrl: "data/new/4/overview.json" })
    window.app3.renderDom(document.getElementById("app3"))

    window.app4 = new App({ name: "Chart 5", dataUrl: "data/new/5/overview.json", arcMode: true })
    window.app4.renderDom(document.getElementById("app4"))
}
