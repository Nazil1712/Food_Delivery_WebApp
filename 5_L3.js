import React from "react";
import ReactDOM from "react-dom/client";

// 1) React Element (Object) => CORE React
/* const heading = React.createElement("h1",{id:"heading"},"Nazil is going to die");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
console.log(heading) */

// 2) Writing JSX
/* const jsxHeading = <h1>This is JSX</h1>;
// This is jsxheading is React Element => Which is coming from JSX Syntax

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(jsxHeading);
root.render(jsxHeading); */

// 3) Components
// const Heading = () => {
//   return <h1>This is Functional Component</h1>;
// };

// // const Heading2 = () =>(
// //     // <h1>This is same as Above</h1>
// // )//Remember here rounded brackets are there

// const num = 10000;

// // const Heading2 = () =>(
// //     <div id="container">
// //         <h2>{num}</h2>
// //         <Heading/> {/*babel tranpiles this*/}
// //         <h1>This Heading2 is same as above</h1>
// //     </div>
// // )//Remember here rounded brackets are there

// const Heading3 = () => <h1>This is also same as above both</h1>;

// const Heading4 = function () {
//   return <h1>This is non-arrow function but yes this is also same as above</h1>;
// };

// const MyComp = () => (
//   <div>
//     <h1>This is MyComp</h1>
//   </div>
// );

// const title = (
//   <div>
//     <h1>This is React Element</h1>
//     <MyComp/>
//     <MyComp></MyComp>
//   </div>
// );



const Title =()=>(
    <div>
        <h1>This is Component</h1>
    </div>
)

const MyComp = () =>(
    <div>
        {Title()}
        <h2>This is Another component</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MyComp></MyComp>);
