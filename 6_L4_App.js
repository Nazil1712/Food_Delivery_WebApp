import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMagnifyingGlass,
  faPercent,
  faHandshakeAngle,
  faSignIn,
  faCartShopping,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import resData from "./api";
import { imgLayout } from "./api2";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <img
            className="logo"
            src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Search
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faPercent} />
                Offers
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faHandshakeAngle} />
                Help
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faSignIn} /> Sign In
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faCartShopping} /> Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


const ImgLayout = () => {
  const row = imgLayout.map((v) => (
    <>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
          v.imageId
        }
        key={v.id}
      />
    </>
  ));

  return (
    <div className="imagelayout-container">
      <div className="imgl-scrollbox">{row}</div>
    </div>
  );
};

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
        {/* <h4 className="res-info">
        {resRatings} <FontAwesomeIcon icon={faStar} />
      </h4> */}
        <h4 className="res-info">
          {resRatings}{" "}
          <FontAwesomeIcon icon={faStar} style={{ color: "#49bc56" }} />
        </h4>
        <h4 className="res-info">{delvTime} Minutes</h4>
      </div>
    </div>
  );
};

const CardsList = () => {
  return resData.map((v, i, arr) => (
    <RestauratCard
      foodImg={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        v.info.cloudinaryImageId
      }
      resName={v.info.name}
      cuisines={v.info.cuisines.join(", ")}
      resRatings={v.info.avgRating}
      delvTime={v.info.sla.deliveryTime}
      key={v.info.id}
    />
  ));
};

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        <RestauratCard
          foodImg={
            "https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006.jpg"
          }
          resName={"Meghana Food"}
          cuisines={"Biryani, North India, Asian"}
          resRatings={"4.4"}
          delvTime={38}
        />
        <RestauratCard
          foodImg={
            "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg"
          }
          resName={"Subway"}
          cuisines={"Burger, French fries & more!"}
          resRatings={"4.8"}
          delvTime={19}
        />
        <RestauratCard
          foodImg={
            "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/dosa-recipe-3.jpg"
          }
          resName={"Udupi Shree Darshini"}
          cuisines={"Idli, Uttapams, Vadas"}
          resRatings={3.2}
          delvTime={26}
        />
        <CardsList />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <ImgLayout/>
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
