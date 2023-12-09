import NonVeg from "./Helpers/NonVeg";
import Veg from "./Helpers/Veg";

const ResMenuItems = ({ resInfo }) => {
  // console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards)

  return (
    <>
      {resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map(
        (v, i, arr) => (
          <div key={v.card.info.id}>
            <div className="res-menu-main" >
              <div className="res-menu-resInfo">
                {v.card.info.itemAttribute.vegClassifier == "NONVEG" ? (
                  <NonVeg />
                ) : (
                  <Veg />
                )}
                <h3 className="res-item-name">{v.card.info.name}</h3>
                <p className="res-price">
                  &#8377;{" "}
                  {v.card.info.price / 100 || v.card.info.defaultPrice / 100}
                </p>
                <p className="res-desc">{v.card.info.description}</p>
                {/* <div className="resmenu-hrline"></div> */}
              </div>
              <div className="res-menu-img-container">
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
            </div>
            <div className="resmenu-hrline"></div>
          </div>
        )
      )}
    </>
  );
};

export default ResMenuItems;
