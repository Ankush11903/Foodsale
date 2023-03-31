import { ITEM_IMG_CDN } from "../config";
// import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import MealItemInput from "./MealItemInput";
import { useDispatch } from "react-redux";
import { removeItem,addItem } from "../utils/CartSlice";

const item = ({ item }) => {


  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(0);

  const addItemHandler = (item) => {
    dispatch(addItem(item)); // redux send action object to store {payload : item}
  };

  const handleRemoveItem = (id) => {
    let updatedCount;
    dispatch(removeItem(id));
    updatedCount = itemCount > 0 ? itemCount - 1 : 0;
    setItemCount(updatedCount);
  };

  return (
    <div className="flex ">
    <div className="flex w-full ">
      <div className="flex pt-7">
        <img
          className="w-[140px] h-[140px] rounded-2xl"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            item.imageId
          }
          alt="Avatar"
        />
        <div className="pl-6 flex flex-col">
        <h3 className="font-bold text-lg w-3/5">{item.name}</h3>
        <p className="mt-1 text-base font-normal">
          {item.price > 0 ? "₹ " + item.price / 100 : " "}{" "}
        </p>
        <p className="mt-3.5 leading-5 text-gray-400 w-4/5 text-base overflow-hidden ">
          {item.description}
        </p>
        </div>
      </div>
      
    </div>
    <MealItemInput addItemHandler={addItemHandler} menuItem={item}/>
    </div>
  );
};

export default item;
