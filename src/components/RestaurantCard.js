import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const RestauratCard = ({
  foodImg,
  resName,
  cuisines,
  resRatings,
  delvTime,
}) => {
  return (
    <div className="res-card hover:scale-95">
      <div className="res-logo">
        <img className="res-img" src={foodImg}></img>
      </div>
      <div>
        <h3 className="text-xl font-bold">{resName}</h3>
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

const withPromotedLabel = (RestaurantCard) =>{
  return (props)=>{
    return(
      <>
      <label className="absolute bg-black text-white rounded-lg">Promoted</label>
      <RestaurantCard {...props}/>
      </>
    )
  }
}

export default RestauratCard;
export {withPromotedLabel};