import React from "react"
import ReactDOM from "react-dom/client"

const element = React.createElement("p", { id: "Para" }, "This is React's Paragraph Nazil")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element)
