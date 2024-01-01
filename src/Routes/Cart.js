import { useDispatch } from "react-redux";
import CartRestaurant from "../components/CartRestaurant";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex-col m-auto w-[50vw]">
      <div className="flex justify-center">
        <button
          className="border-black border-2 rounded-xl bg-white mt-5 p-2 shadow-lg"
          onClick={handleClick}
        >
          Clear Cart
        </button>
      </div>
      <CartRestaurant />
    </div>
  );
};
export default Cart;
