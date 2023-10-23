import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResCardCollection = ({
  foodImg,
  resName,
  cuisines,
  resRatings,
  delvTime,
}) => {
  return (
    <div className="res-card-coll hover:scale-95">
      <div className="res-logo-coll">
        <img className="res-img-coll" src={foodImg}></img>
      </div>
      <div>
        <h3>{resName}</h3>
        <h4 className="res-info-coll">{cuisines.join(", ")}</h4>
        <h4 className="res-info-coll">
          {resRatings}{" "}
          <FontAwesomeIcon icon={faStar} style={{ color: "#49bc56" }} />
        </h4>
        <h4 className="res-info-coll">{delvTime} Minutes</h4>
      </div>
    </div>
  );
};


export default ResCardCollection;