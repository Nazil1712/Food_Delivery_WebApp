import { useEffect, useState } from "react";
import { RestauratCard } from "./BodyShimm2";
import {
  COLLECTION_API_URL1,
  COLLECTION_API_URL2,
  COLLECTION_RES_IMG_URL,
} from "../utils/constants";
import ResCardCollection from "./ResCardCollection";
import { Link, useParams } from "react-router-dom";
import CollectionPageShimmer from "./Shimmers/CollectionPageShimmer";

const CollectionPage2 = () => {
  const { resId } = useParams();
  const [resData, setResData] = useState([]);
  const [resList, setResList] = useState([]);

  const fetchData = async () => {
    const data = await fetch(COLLECTION_API_URL1 + resId + COLLECTION_API_URL2);

    let json = await data.json();
    setResData(json.data.cards[0].card.card);
    json = json.data.cards.slice(3, json.length);
    setResList(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resData.length==0 || resList.length==0? <CollectionPageShimmer/>:(
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
          {resList.map((v, i, arr) => (
            <Link
              to={"/restaurants/" + v.card.card.info.id}
              key={v.card.card.info.id}
              className=".link-tag"
            >
              <ResCardCollection
                key={v.card.card.info.id}
                foodImg={
                  COLLECTION_RES_IMG_URL + v.card.card.info.cloudinaryImageId
                }
                resName={v.card.card.info.name}
                cuisines={v.card.card.info.cuisines}
                resRatings={v.card.card.info.avgRating}
                delvTime={v.card.card.info.sla.deliveryTime}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage2;
