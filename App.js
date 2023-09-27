import React from "react"
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1",{},"This is heading")
// const heading = <h1>This is heading JSX</h1>

const Head = () => <h1>This is Comp p</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Head/>)