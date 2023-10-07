import { imgLayout } from "../utils/mockData";
import { IMG_LAYOUT_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const ImgLayout2 = () => {

  const [mind, setmind] = useState([imgLayout]);

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json.data.cards[0].card.card.imageGridCards.info)
    setmind(json.data.cards[0].card.card.imageGridCards.info)
  };


  const row = mind.map((v) => (
    <img src={IMG_LAYOUT_URL + v.imageId} key={v.id} />
  ));

  return (
    <div className="imagelayout-container">
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
      <div className="imgl-scrollbox">{row}</div>
      <hr />
    </div>
  );
};

export default ImgLayout2;
