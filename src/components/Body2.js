import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
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

const Body2 = () => {
  
  const [resStateData, setresStateData] = useState(resData);
  
  const topRated = resStateData.filter((v, i) => v.info.avgRating > 4.2);

  const handleClick = () => {
    setresStateData(topRated);
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setresStateData(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restaurants
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

export default Body2;
