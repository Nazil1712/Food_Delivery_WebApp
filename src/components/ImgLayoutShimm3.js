import { imgLayout, offers } from "../utils/mockData";
import { IMG_LAYOUT_URL, OFFERS_IMG_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { offers } from "../utils/mockData";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ImgLayoutShimmer from "./ImgLayoutShimmer";
import { Link } from "react-router-dom";

const ImgLayoutShimm3 = () => {
  const [myImgLayout, setMyImgLayout] = useState([]);
  const [id, setId] = useState(null);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.296116&lng=73.216694&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    console.log(
      json.data.cards[1].card.card.imageGridCards.info[0].entityId.slice(36, 41)
    );
    setMyImgLayout(json.data.cards[1].card.card.imageGridCards.info);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return myImgLayout.length == 0 ? (
    <ImgLayoutShimmer />
  ) : (
    <>
      <div className="lo">
        <div className="imagelayout-container imgL2">
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
          <div className="imgl-scrollbox">
            {myImgLayout.map((v) => (
              <Link to={"/collection/" + v.entityId.slice(36, 41)}>
                <img src={IMG_LAYOUT_URL + v.imageId} key={v.id} />
              </Link>
            ))}
          </div>
          <div className="hr-line"></div>
        </div>
      </div>
    </>
  );
};

export default ImgLayoutShimm3;
