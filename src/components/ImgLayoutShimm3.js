import { IMG_LAYOUT_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import ImgLayoutShimmer from "./ImgLayoutShimmer";
import { Link } from "react-router-dom";
import useImgLayout from "../utils/useImgLayout";
import { Suspense } from "react";

const ImgLayoutShimm3 = () => {
  const myImgLayout = useImgLayout();


  const scrollLeft = () =>{
    let slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const scrollRight = () =>{
    let slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return myImgLayout.length == 0 ? (
    <ImgLayoutShimmer />
  ) : (
    <div className="w-[70vw] mx-auto relative cursor-pointer top-5 h-270">
      <div className="flex w-[70vw] justify-between">
        <div className="">
          <p className="font-lato font-black text-xl">What's on your mind?</p>
        </div>
        <div className="flex gap-5 relative bottom-3">
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            style={{ color: "#dfba34" }}
            size="2xl"
            onClick={scrollLeft}
            className="opacity-70 hover:opacity-100"
            />
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            style={{ color: "#dfba34" }}
            size="2xl"
            onClick={scrollRight}
            className="opacity-70 hover:opacity-100"
          />
        </div>
      </div>
      <div id="slider" className="flex overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide">
        <div className="flex flex-shrink-0 scroll h-200 gap-15 w-80vw">
          {myImgLayout.map((v) => (
            <Link
              to={"/collection/" + v.entityId.slice(36, 41)}
              key={v.id}
              className="w-[150px]"
            >
              <div>
                <img src={IMG_LAYOUT_URL + v.imageId} className="" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="hr-line"></div>
    </div>
  );
};

export default ImgLayoutShimm3;
