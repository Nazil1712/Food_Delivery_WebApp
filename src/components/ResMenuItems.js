import Veg from "./Helpers/Veg";
import NonVeg from "./Helpers/NonVeg";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ResMenuItems = ({
  vegClassifier,
  itemName,
  price,
  defaultPrice,
  description,
  imageId,
  allInfo,
}) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <div className="border-b-2">
        <div className="flex justify-between pb-16">
          <div className="w-8/12">
            {vegClassifier == "NONVEG" ? <NonVeg /> : <Veg />}
            <h3 className="font-bold pt-2">{itemName}</h3>
            <p className="text-sm pt-2">
              &#8377; {price / 100 || defaultPrice / 100}
            </p>
            <p className="text-gray-400 font-thin pt-2 text-base text-justify">
              {description}
            </p>
            {/* <div className="resmenu-hrline"></div> */}
          </div>
          <div className="flex flex-col items-center relative w-3/12">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                imageId
              }
              className="rounded-lg"
            />
            <div className="absolute bottom-0">
              <button
                className="bg-white w-40 h-10 rounded-lg text-green-600 shadow-md shadow-white hover:scale-95"
                onClick={() => handleAddItem(allInfo)}
              >
                ADD <sup>+</sup>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResMenuItems;
