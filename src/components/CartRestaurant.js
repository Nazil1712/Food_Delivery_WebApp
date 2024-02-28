import { useSelector } from "react-redux";
import ResMenuItems from "./ResMenuItems";
import AppStore from "../utils/AppStore";

const CartRestaurant = () => {
  const cartItems = useSelector((AppStore) => AppStore.cart.items);
  console.log(cartItems);

  return (
    <div className="flex-col w-[50vw] m-auto">
      {cartItems.length == 0 ? (
        <div className="flex justify-center">
          <h1 className="text-4xl">Your cart is empty</h1>
        </div>
      ) : (
        cartItems.map((v, i, arr) => (
          <ResMenuItems
            key={v.id}
            vegClassifier={v.itemAttribute.vegClassifier}
            itemName={v.name}
            price={v.price}
            defaultPrice={v.defaultPrice}
            description={v.description}
            imageId={v.imageId}
            allInfo={v}
          />
        ))
      )}
    </div>
  );
};

export default CartRestaurant;
