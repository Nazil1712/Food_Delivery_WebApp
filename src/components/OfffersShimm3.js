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
import useOfferLayout from "../utils/useOfferLayout";

const OffersShimm3 = () => {
  const myOffers = useOfferLayout()

  const scrollLeft = () =>{
    let slider = document.getElementById("offers-slider")
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const scrollRight = () =>{
    let slider = document.getElementById("offers-slider")
    slider.scrollLeft = slider.scrollLeft + 500
  }

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
            className="opacity-70 hover:opacity-100"
            onClick={scrollLeft}

          />
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            style={{ color: "#dfba34" }}
            size="2xl"
            className="opacity-70 hover:opacity-100"
            onClick={scrollRight}

          />
        </div>
      </div>
      <div id="offers-slider" className="offers-scrollbox flex h-80 gap-4 overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide">
        <div  className="flex flex-shrink-0">
          {myOffers.map((v) => {
            return (
              <Link to={"/collection/" + v.entityId} key={v.id} >
                <img src={OFFERS_IMG_URL + v.imageId} className=""/>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OffersShimm3;
