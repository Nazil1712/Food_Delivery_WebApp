import { useEffect, useState } from "react";
import OfferShimmer from "./OfferShimmer";
import NonVeg from "./NonVeg";
import Veg from "./Veg";

const ResMenuItems = () => {
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.296116&lng=73.216694&restaurantId=573379&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    setResInfo(json?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  // resInfo = resInfo + ".cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards"

  if (resInfo == null) {
    return <OfferShimmer />;
  }

  const resMenuList = resInfo.map((v, i, arr) => (
    <div className="res-menu-main" key={v.card.info.id}>
      <div className="res-menu-resInfo">
        {v.card.info.itemAttribute.vegClassifier == "NONVEG" ? (
          <NonVeg />
        ) : (
          <Veg />
        )}
        <h3 className="res-item-name">{v.card.info.name}</h3>
        <p className="res-price">&#8377; {v.card.info.price / 100}</p>
        <p className="res-desc">{v.card.info.description}</p>
          <div className="resmenu-hrline"></div>
      </div>
      <button className="resImg-Btn">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            v.card.info.imageId
          }
          className="res-menu-img"
        />
      </button>
    </div>
  ));

  return <>{resMenuList}</>;
};

export default ResMenuItems;
