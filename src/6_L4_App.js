import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import ImgLayout from "./components/ImgLayout";
import Body from "./components/Body";
import ImgLayoutShimmer from "./components/ImgLayoutShimmer";
import BodyShimmer from "./components/BodyShimmer";
import Body2 from "./components/Body2";
import ImgLayout2 from "./components/ImgLayout2";
import Body2ShimmExp from "./components/Body2ShimmExp";
import ImgLayout2ShimmExp from "./components/ImgLayout2ShimmExp";
import ImgLayoutShimm2 from "./components/ImgLayoutShimm2";
import BodyShimm2 from "./components/BodyShimm2";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      <ImgLayoutShimm2/>
      {/* <ImgLayoutShimmer/> */}
      <BodyShimm2/>
      {/* <BodyShimmer/> */}



      {/* <ImgLayout/>
      <Body/> */}

    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
