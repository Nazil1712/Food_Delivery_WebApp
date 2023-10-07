import { imgLayout } from "../utils/mockData";
import { IMG_LAYOUT_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ImgLayoutShimmer from "./ImgLayoutShimmer";

const ImgLayoutShimm2 = () => {
  const [myImgLayout, setmyImgLayout] = useState([]);

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.296116&lng=73.216694&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();

    // console.log(json.data.cards[1].card.card.imageGridCards.info)
    setmyImgLayout(json.data.cards[1].card.card.imageGridCards.info)
  }

  useEffect(()=>{
    fetchData();
  }, [])

 

  const row = myImgLayout.map((v) => (
    <img src={IMG_LAYOUT_URL + v.imageId} key={v.id} />
  ));

  return myImgLayout.length==0? <ImgLayoutShimmer/>:(
    <div className="imagelayout-container">
      <div className="mind-container">
        <p>What's on your mind?</p>
        <div className="arrow-container">
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            style={{ color: "#dfba34" }}
            size="2xl"
          />
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            style={{ color: "#dfba34" }}
            size="2xl"
          />
        </div>
      </div>
      <div className="imgl-scrollbox">{row}</div>
      {/* <hr className="hr-line"/> */}
      <div className="hr-line"></div>
    </div>
  );
};

export default ImgLayoutShimm2;