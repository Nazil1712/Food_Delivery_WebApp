import { useEffect, useState } from "react";
import { RES_MENU_ITEMS_URL } from "./constants";

const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_MENU_ITEMS_URL + resId);

    const json = await data.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useResMenu;