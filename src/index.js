import "fonts/index.css"
import "styles/reset.css"

import App from "./components/App"

window.app = new App()

window.app.renderDom(document.getElementById("app"))