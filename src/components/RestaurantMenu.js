import OfferShimmer from "./OfferShimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import OffersResMenu from "./OffersResMenu";
import ResMenuItems from "./ResMenuItems";
import ResMenuShimmer from "./Shimmers/ResMenuShimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const resInfo = useResMenu(resId);

  if (resInfo == null) {
    return <ResMenuShimmer />;
  }

  const {
    name,
    cuisines,
    cloudinaryImageId,
    areaName,
    avgRating,
    totalRatingsString,
    availabilityServiceabilityMessage,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="res-menu-container">
      <div className="relative flex gap-0 justify-end">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // height="2em"
            viewBox="0 0 512 512"
            className="heart"
          >
            <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
          </svg>
        </div>
        <div className="mr-7">
          <FontAwesomeIcon icon={faSearch} className="res-menu-search" />
        </div>
      </div>
      <div className="res-menu-head2">
        <h3 className="res-menu-resname">{name}</h3>
        <p className="res-menu-resinfo res-menu-resinfo1">
          {cuisines.join(", ")}
        </p>
        <p className="res-menu-resinfo res-menu-resinf2">{areaName}</p>
        <div className="res-menu-ratings">
          <p className="avgRating">
            <FontAwesomeIcon icon={faStar} />
            {avgRating}
          </p>
          <div className="ratings-hrline"></div>
          <p className="tRating">{totalRatingsString}</p>
        </div>
        <div className="resmenu-head2-hrline"></div>
      </div>
      <div className="res-menu-head3">
        <div className="head3-first">
          <p>{costForTwoMessage}</p>
        </div>
        <div className="flex">
          <OffersResMenu resInfo={resInfo} />
        </div>
      </div>
      <div className="all-res-menu">
        <ResMenuItems resInfo={resInfo} />
      </div>
    </div>
  );
};

export default RestaurantMenu;
