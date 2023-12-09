import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { resData } from "../utils/mockData";
import { RES_IMG_URL } from "../utils/constants";
import BodyShimmer from "./Shimmers/BodyShimmer";
import { Link } from "react-router-dom";
import RestauratCard, { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resStateData, setresStateData] = useState([]);
  const [myfilteredRestaurant, setMyfilteredRestaurant] = useState([]);

  console.log(resStateData);

  const RestaurantCardPromoted = withPromotedLabel(RestauratCard);

  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.296116&lng=73.216694&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setresStateData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setMyfilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRate = () => {
    const topRated = resStateData.filter((v, i) => v.info.avgRating > 4.0);
    setMyfilteredRestaurant(topRated);
  };

  const handleSearch = () => {
    const filteredRestaurant = resStateData.filter((v, i, arr) =>
      v.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setMyfilteredRestaurant(filteredRestaurant);
  };

  const handleFastDelv = () => {
    const fastRestaurant = resStateData.filter(
      (v, i, arr) => v.info.sla.deliveryTime < 25
    );
    setMyfilteredRestaurant(fastRestaurant);
  };

  const { loggedInUserName, setUserName } = useContext(UserContext);

  return resStateData.length == 0 ? (
    <BodyShimmer />
  ) : (
    <div className="body">
      <div className="body-heading">
        <p>Restaurants with online food delivery</p>
      </div>
      <div className="filter">
        <input
          type="text"
          className="search-box"
          placeholder="Search here"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleSearch}
          onKeyUp={handleSearch}
        ></input>
        <FontAwesomeIcon
          icon={faSearch}
          className="search-icon"
          onClick={handleSearch}
        />
        <button className="filter-btn filter-btn1" onClick={handleRate}>
          Ratings 4.0+
        </button>
        <button className="filter-btn filter-btn2" onClick={handleFastDelv}>
          Fast Delivery
        </button>
        <div>
          <label>UserName : </label>
          <input
            className="rounded-3xl h-10 border border-gray-500 shadow-gray shadow-xl ml-1 outline-none p-4 "
            value={loggedInUserName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="res-container">
        {myfilteredRestaurant.map((v, i, arr) => (
          <Link
            to={"/restaurants/" + v.info.id}
            key={v.info.id}
            className=".link-tag"
          >
            <RestauratCard
              foodImg={RES_IMG_URL + v.info.cloudinaryImageId}
              resName={v.info.name}
              cuisines={v.info.cuisines.join(", ")}
              resRatings={v.info.avgRating}
              delvTime={v.info.sla.deliveryTime}
              v={v}
            />

            {/* Beacuse newer version of API doesn't have promoted feature hence we are not adding it, but if it had then we could render our ResCard like this! */}
            {/* {data.label.promted ? <RestaurantCardPromoted/> : <RestauratCard/>} */}

            {/* Just trying to render ResCard with promoted label , to see how it looks! */}
            {/* <RestaurantCardPromoted
              foodImg={RES_IMG_URL + v.info.cloudinaryImageId}
              resName={v.info.name}
              cuisines={v.info.cuisines.join(", ")}
              resRatings={v.info.avgRating}
              delvTime={v.info.sla.deliveryTime}
              v={v}
            /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
export { RestauratCard };
