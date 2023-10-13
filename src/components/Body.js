import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { resData } from "../utils/mockData";
import { RES_IMG_URL } from "../utils/constants";

const RestauratCard = ({
  foodImg,
  resName,
  cuisines,
  resRatings,
  delvTime,
}) => {
  return (
    <div className="res-card">
      <div className="res-logo">
        <img className="res-img" src={foodImg}></img>
      </div>
      <div>
        <h3>{resName}</h3>
        <h4 className="res-info">{cuisines}</h4>
        <h4 className="res-info">
          {resRatings}{" "}
          <FontAwesomeIcon icon={faStar} style={{ color: "#49bc56" }} />
        </h4>
        <h4 className="res-info">{delvTime} Minutes</h4>
      </div>
    </div>
  );
};

const Body = () => {
  const [resStateData, setresStateData] = useState(resData);
  const [searchText, setSearchText] = useState("");

  const handleRate = () => {
    const topRated = resData.filter((v, i) => v.info.avgRating > 4.0);
    setresStateData(topRated);
  };

  const handleSearch = () => {
    const filteredRestaurant = resData.filter((v, i, arr) =>
      v.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setresStateData(filteredRestaurant);
  };

  const handleFastDelv = () => {
    const fastRestaurant = resData.filter(
      (v, i, arr) => v.info.sla.deliveryTime < 20
    );
    setresStateData(fastRestaurant);
  };

  return (
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
      </div>
      <div className="res-container">
        {resStateData.map((v, i, arr) => (
          <RestauratCard
            foodImg={RES_IMG_URL + v.info.cloudinaryImageId}
            resName={v.info.name}
            cuisines={v.info.cuisines.join(", ")}
            resRatings={v.info.avgRating}
            delvTime={v.info.sla.deliveryTime}
            key={v.info.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
