import { useSelector } from "react-redux";
import RestaurantMenuItemList from "./ResturantMenuItemList";

const Cart = () => {
  const cartListItems = useSelector((store) => store.cart.items);
  return (
    <div className="w-full">
      <h1 className="text-center justify-between"></h1>
      <div className="w-9/12 text-left">
        <RestaurantMenuItemList items={cartListItems} />
      </div>
    </div>
  );
};

export default Cart;
