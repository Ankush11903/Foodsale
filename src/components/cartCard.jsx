
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/CartSlice";

const CartCard = (item) => {
  const dispatch = useDispatch();
  const removeItemHandler = (item) => {
    dispatch(removeItem(item.id));
  };

    return (
      <div className="p-4  border border-red-400 w-[254px]  relative  m-3  flex-wrap break-words">
        <img
          className="w-[120px] h-[120px] rounded-2xl"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            item.imageId
          }
          alt="Avatar"
        />
        <h1>{item.name}</h1>
        <h2>{item.price ? item.price / 100 : item.defaultPrice / 100}</h2>
        {/* <h3>{item.description}</h3> */}
        <h3 className="text-lg font-semibold">Quantity - {item.quantity}</h3>
        <button className="bg-blue-300" onClick={()=>removeItemHandler(item)}>Remove</button>

      </div>
    );
  };
export default CartCard;