import "fonts/index.css"
import "styles/reset.css"

import App from "./components/App"

window.app0 = new App({ startIndex: 0 })
window.app0.renderDom(document.getElementById("app0"))

window.app1 = new App({ startIndex: 1 })
window.app1.renderDom(document.getElementById("app1"))

window.app2 = new App({ startIndex: 2 })
window.app2.renderDom(document.getElementById("app2"))

window.app3 = new App({ startIndex: 3 })
window.app3.renderDom(document.getElementById("app3"))

window.app4 = new App({ startIndex: 4 })
window.app4.renderDom(document.getElementById("app4"))