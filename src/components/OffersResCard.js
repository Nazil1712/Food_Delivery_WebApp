import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OffersResCard = ({
  foodImg,
  resName,
  cuisines,
  resRatings,
  delvTime,
  aggregatedDiscountInfoV3,
}) => {
  return (
    <div className="res-card-coll hover:scale-95">
      <div className="res-logo-coll relative">
        {/* {console.log(aggregatedDiscountInfoV3?.header)} */}
        <img className="res-img-coll " src={foodImg}></img>
        {aggregatedDiscountInfoV3?.header && (
          <div className="absolute bottom-0 text-white font-extrabold text-xl pl-2">{aggregatedDiscountInfoV3?.header}</div>
        )}
      </div>
      <div>
        <h3 className="text-xl font-bold">{resName}</h3>
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

export default OffersResCard;
