import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { resData } from "../../utils/mockData";
import { RES_IMG_URL } from "../../utils/constants";

const RestaurantCard = ({
  foodImg,
  resName,
  cuisines,
  resRatings,
  delvTime,
}) => {
  return (
    <div className="shimm-card">
      <div className="shimm-logo">
        <img className="shimm-img"></img>
      </div>
      <div>
        <h3>{resName}</h3>
        <h4 className="shimm-info1"></h4>
        <h4 className="shimm-info2"></h4>
        <h4 className="shimm-info3"></h4>
      </div>
    </div>
  );
};

const BodyShimmer = () => {
  const topRated = resData.filter((v, i) => v.info.avgRating > 4.2);

  const [resStateData, setresStateData] = useState(resData);

  const handleClick = () => {
    setresStateData(topRated);
  };

  return (
    <div className="body">
      <div className="shimm-heading">
        <p></p>
      </div>
      <div className="shimm">
        <div className="shimm-btn shimm-searchbar">
        </div>
        <div className="shimm-btn shimm-btn1">
        </div>
        <div className="shimm-btn shimm-btn2">
        </div>
      </div>
      <div className="shimm-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export {RestaurantCard}
export default BodyShimmer;
