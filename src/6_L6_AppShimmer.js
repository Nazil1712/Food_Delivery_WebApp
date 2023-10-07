import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ImgLayoutShimmer from "./components/ImgLayoutShimmer";
import BodyShimmer from "./components/BodyShimmer";

const AppLayout = () => {
    const [visible, setVisible] = useState(true)

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setVisible(false)
        }, 5000)

        return()=>{
            clearTimeout(timerId)
        }
    }, [])

    return visible?(
        <div className="app">
            <Header/>
            <ImgLayoutShimmer/>
            <BodyShimmer/>
        </div>
    ):null;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
