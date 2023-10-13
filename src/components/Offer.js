import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { OFFERS_IMG_URL } from "../utils/constants";
import { offers } from "../utils/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Offer = () => {
  const offersList = offers.map((v) => (
    <img src={OFFERS_IMG_URL + v.imageId} key={v.id} />
  ));

  return (
    <div className="offers-container">
      <div className="mind-container">
        <p>Best offers for you</p>
        <div className="arrow-container">
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            style={{ color: "#dfba34" }}
            size="2xl"
          />
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            style={{ color: "#dfba34" }}
            size="2xl"
          />
        </div>
      </div>
      <div className="offers-scrollbox">{offersList}</div>
    </div>
  );
};

export default Offer;
