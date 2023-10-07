import { imgLayout } from "../utils/mockData";
import { IMG_LAYOUT_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const ImgLayout = () => {
  const row = imgLayout.map((v) => (
    <img src={IMG_LAYOUT_URL + v.imageId} key={v.id} />
  ));

  return (
    <div className="imagelayout-container">
      <div className="mind-container">
        <p>What's on your mind?</p>
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
      <div className="imgl-scrollbox">{row}</div>
      {/* <hr className="hr-line"/> */}
      <div className="hr-line"></div>
    </div>
  );
};

export default ImgLayout;
