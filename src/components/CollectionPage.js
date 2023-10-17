import { useEffect, useState } from "react";
import { RestauratCard } from "./BodyShimm2";
import BodyShimmer from "./BodyShimmer";
import { COLLECTION_RES_IMG_URL } from "../utils/constants";

const CollectionPage = () => {
  const [resData, setResData] = useState([]);
  const [resList, setResList] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.296116&lng=73.216694&collection=83644&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const data2 = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.296116&lng=73.216694&restaurantId=79565&catalog_qa=undefined&query=Pizza&submitAction=ENTER"
    );

    const json1 = await data.json();
    setResData(json1.data.cards[0].card.card);

    const json2 = await data2.json();
    console.log(
      json2.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    setResList(
      json2.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="collection-container">
      <div className="collection-header">
        <h1>{resData.title}</h1>
        <p>{resData.description}</p>
        <div className="collection-filter">
          <button className="filter-btn filter-btn1">Ratings 4.0+</button>
          <button className="filter-btn filter-btn2">Fast Delivery</button>
        </div>
      </div>
      <div className="collection-main">
        <h2>Restaurants to explore</h2>
        <div className="collection-res">
          {/* <RestauratCard 
            foodImg={COLLECTION_RES_IMG_URL + resList.imageId}
            resName={resList.name}
            cuisines={resList.description}
          /> */}
          {resList.map((v, i, arr) => (
            <RestauratCard
              foodImg={COLLECTION_RES_IMG_URL + v.card.info.imageId}
              resName={v.card.info.name}
              cuisines={v.card.info.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
