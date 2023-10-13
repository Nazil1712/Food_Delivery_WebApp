import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OfferCard = () =>{
    return(
        <div className="offer-shimmer-card"></div>
    )
}

const OfferShimmer = () => {
  return (
    <div className="offer-shimmer-container">
      <div className="arrow-container">
        <div className="shimm-para"></div>
        <div className="shimm-arrow"></div>
        <div className="shimm-arrow"></div>
      </div>
      <div className="offers-shimmer-scrollbox">
        <OfferCard/>
        <OfferCard/>
        <OfferCard/>
      </div>
    </div>
  );
};

export default OfferShimmer;
