import { useEffect, useState } from "react";

const useImgLayout = () => {
  const [myImgLayout, setMyImgLayout] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.296116&lng=73.216694&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json)
    setMyImgLayout(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return myImgLayout;
};


export default useImgLayout;
