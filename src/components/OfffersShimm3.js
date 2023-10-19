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
import OfferShimmer from "./OfferShimmer";
import { Link } from "react-router-dom";

const OffersShimm3 = () => {
  const [myOffers, setMyOffers] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.296116&lng=73.216694&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json.data.cards[0].card.card.imageGridCards.info);
    setMyOffers(json.data.cards[0].card.card.imageGridCards.info);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return myOffers.length == 0 ? (
    <OfferShimmer />
  ) : (
    <div className="offers-container">
      <div className="mind-container">
        <p>Best offers for you</p>
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
      <div className="offers-scrollbox">
        {myOffers.map((v) => {
          return (
            <Link to={"/collection/" + v.entityId} key={v.id}>
              <img src={OFFERS_IMG_URL + v.imageId} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default OffersShimm3;
