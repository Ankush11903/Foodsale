import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemByOne, removeItem, clearAllItem, setItem } from "../utils/CartSlice";

const ShowCart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const removeItemHandler = (item) => {
    dispatch(removeItem(item.id));
    // dispatch()
  };
  const addItemHandler = (item) => {
    dispatch(addItemByOne(item));
  };
  const clearAllItemHandler = () => {
    dispatch(clearAllItem());
  };
  const cartTotal = Object.values(cartItems).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="">
      <div className="">
        {Object.values(cartItems).map((item) => {
          return (
            <ul className="">
            <li className="flex justify-between">
              <div >
                <h2 className="mr-1 text-[#363636] font-bold">{item.name}</h2>
                <div className={"w-[10rem] flex justify-between items-center"}>
                  <span className={"font-bold text-sm text-[#8a2b06]"}>₹{item.price ? item.price / 100 : item.defaultPrice / 100}</span>
                  <span className={"font-bold text-sm border border-red-500 py-1 px-3  rounded-md text-[#363636]"}>x {item.quantity}</span>
                </div>
              </div>
              <div className={"flex "}>
                <button className="text-inherit font-bold text-lg text-[#8a2b06] border border-red-900 w-[3rem] text-center rounded-lg bg-transparent cursor-pointer ml-4 m-1"
                onClick={() => removeItemHandler(item)}>−</button>
                <button className="text-inherit font-bold text-lg text-[#8a2b06] border border-green-900 w-[3rem] text-center rounded-lg bg-transparent cursor-pointer ml-4 m-1"
                onClick={() => addItemHandler(item)}>+</button>
              </div>

              </li>
            </ul>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center">
        {/* <h1>Total - {cartTotal}</h1> */}
        <button className="bg-blue-300" onClick={() => clearAllItemHandler()}>
          Clear All
        </button>
      </div>
    </div>
  );
};
export default ShowCart;

//     return (
//         <div>
//             <h1>Cart</h1>
//         </div>
//     )
// };
// export default ShowCart;
