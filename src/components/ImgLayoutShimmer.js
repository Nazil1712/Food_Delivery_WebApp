import { imgLayout } from "../utils/mockData";
import { IMG_LAYOUT_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Circle = () => {
  return <div className="shimm-circle"></div>;
};

const ImgLayoutShimmer = () => {
  // const row = imgLayout.map((v) => (
  //   <img src={IMG_LAYOUT_URL + v.imageId} key={v.id} />
  // ));

  return (
    <div className="imagelayout-shimmer-container">
      <div className="arrow-container">
        <div className="shimm-para"></div>
        <div className="shimm-arrow"></div>
        <div className="shimm-arrow"></div>
      </div>
      <div className="flex">
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </div>
      <div className="hr-line"></div>
    </div>
  );
};

export default ImgLayoutShimmer;
