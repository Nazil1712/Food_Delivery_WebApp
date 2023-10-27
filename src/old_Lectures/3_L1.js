// 1)
/* const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hi NAZIL from React")

console.log(heading) // object

const root = ReactDOM.createRoot(document.getElementById("root"))

// Converts into heading tag and puts into root
// Converting heading object into an HTML element
root.render(heading) */



// 2)
/*
    <div id="parent">
        <div id="child">
            <h1></h1>
        </div>
    </div>
*/

/* const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", {id:"child"},
    React.createElement("h1", {}, "Hi This is Parent - child - h1")))

// If you want to create siblings then just wrap that children argument into an array

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent) */


// 3)
/*
    <div id="parent">
        <div id="child">
            <h1></h1>
            <h2></h2>
        </div>
    </div>
*/


// If you want to create siblings then just wrap that children argument into an array
/*
const root = ReactDOM.createRoot(document.getElementById("root"))

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", {id:"child"},
    [React.createElement("h1", {}, "Hi This is Parent - child - h1"), React.createElement("h2",{},"Hi this is h2 tag")]))

root.render(parent) */



// 4)
/*
    <div id="parent">
        <div id="child">
            <h1></h1>
            <h2></h2>
        </div>
        <div id="parent2">
            <div id="child">
                <h1></h1>
                <h2></h2>
            </div>
        </div>
    </div>
*/



// See how difficult it is to manage That's why there is need of JSX (see below)

/* const p1 = 
React.createElement("parent", {},[React.createElement("div", {id:"child"},
[React.createElement("h1", {}, "Hi This is Parent - child - h1"), React.createElement("h2",{},"Hi this is h2 tag")]),React.createElement("div", {id:"child"},
[React.createElement("h1", {}, "Hi This is Parent - child - h1"), React.createElement("h2",{},"Hi this is h2 tag")])])

const root = React.createRoot(document.getElementById("root"))

root.render(p1) */