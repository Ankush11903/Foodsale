import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemByOne, removeItem, clearOneItem } from "../utils/CartSlice";

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
  const clearOneItemHandler=(item)=>{
    dispatch(clearOneItem(item))
  };

  return (
    <div className="max-h-[60vh] w-full overflow-y-auto bg-white rounded-lg shadow-xl p-4">
        {Object.values(cartItems).map((item) => {
          return (
            <ul key={item?.id} className="py-4 border-b border-gray-300">
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={
                      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                      item?.imageId
                    }
                    alt={item?.name}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h2 className="font-bold text-lg">{item?.name}</h2>
                    <div className="flex items-center">
                      <span className="text-gray-500 font-medium text-sm mr-2">
                        ₹
                        {item?.price
                          ? parseInt(item?.price / 100)
                          : parseInt(item?.defaultPrice / 100)}
                      </span>
                      <span className="text-gray-400 text-sm">
                        x {item?.quantity}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between  rounded-md px-4 py-2 ">
                  <button
                    className="bg-white-100 hover:bg-red-100 text-gray-600 hover:text-gray-700 rounded-md w-8 h-8 flex items-center justify-center transform transition-transform duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-red-50 focus:ring-offset-2"
                    onClick={() => removeItemHandler(item)}
                  >
                    <span className="sr-only">
                      Remove one {item?.name} from cart
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm4.243 11.243a.999.999 0 0 1-1.414 1.414L10 11.414l-2.828 2.828a.999.999 0 1 1-1.414-1.414L8.586 10l-2.828-2.828a.999.999 0 1 1 1.414-1.414L10 8.586l2.828-2.828a.999.999 0 1 1 1.414 1.414L11.414 10l2.829 2.828z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <span className="text-gray-900 font-medium mx-2">
                    {item?.quantity}
                  </span>
                  <button
                    className="bg-white-100 hover:bg-green-100 text-gray-600 hover:text-gray-700 rounded-md w-8 h-8 flex items-center justify-center transform transition-transform duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-green-50 focus:ring-offset-2"
                    onClick={() => addItemHandler(item)}
                  >
                    <span className="sr-only">Add one {item?.name} to cart</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm4 11h-3v3a1 1 0 0 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 1 1 2 0v3h3a1 1 0 0 1 0 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    className="inline-flex items-center justify-center p-2 rounded-full text-red-800 "
                    onClick={() => clearOneItemHandler(item)}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    
  );
};
export default ShowCart;
