import React from "react"
import { render } from "react-dom"
import App from "pages/Root"
import "styles/index.css"
const rootElement = document.querySelector("#app")
render(<App />, rootElement)
