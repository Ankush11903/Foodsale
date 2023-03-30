import { useSelector } from "react-redux";
import CartCard from "./cartCard.jsx";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex">
      {Object.values(cartItems).map((item) => {
        return (
          <CartCard {...item} key={item.id}/>
        );
      })}
    </div>
  );
};
export default Cart;
