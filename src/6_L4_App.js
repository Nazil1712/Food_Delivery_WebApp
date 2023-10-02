import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import ImgLayout from "./components/ImgLayout";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <ImgLayout/>
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
