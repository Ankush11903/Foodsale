import React, { useRef, useState } from "react";
import { CartIcon } from "../config";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ShowCart from "./ShowCart";
import { clearAllItem } from "../utils/CartSlice";
import { Link } from "react-router-dom";


function Modal2({ open, onClose, children }) {
  const Modal2Ref = useRef();

  // Close the Modal2 if user clicks outside of it
  const handleClick = (e) => {
    if (Modal2Ref.current === e.target) {
      onClose();
    }
  };

  // console.log(Number(cartTotal))
  return (
    open && (
      <div
        ref={Modal2Ref}
        className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-80"
        onClick={handleClick}
      >
        <div className="relative w-full max-w-2xl p-4 mx-4 bg-white rounded-md shadow-lg sm:p-6">
          {children}
        </div>
      </div>
    )
  );
}

function Modal() {
  const [showModal2, setShowModal2] = useState(false);
  const totalItemsCount = useSelector((store) => store.cart.totalItemsCount);
  const cartItems = useSelector((store) => store.cart.items);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const clearAllItemHandler = () => {
    dispatch(clearAllItem());
  };
  const cartTotal = Object.values(cartItems).reduce(
    (acc, item) =>
      item?.price
        ? acc + Number(item?.price / 100) * Number(item?.quantity)
        : acc + Number(item?.defaultPrice / 100) * Number(item?.quantity),
    0
  );
  // console.log("hey")
  // console.log(cartItems)

  return (
    // <Tilt>
    <div className="flex items-center justify-center">
      <button
        className={`flex pt-2 hover:text-orange-600 transition-colors duration-300 ${totalItemsCount? `text-[#60b246]` :  `text-[#282c3f]`}`}
        onClick={() => setShowModal2(true)}
        onMouseEnter={() => setShowModal(true)}
        onMouseLeave={() => setShowModal(false)}
      >
        <span className= {`w-[2rem]  `}>
          <CartIcon />
        </span>

        <span className={`font-medium text-base mt-1  `}>Cart</span>
        <span className={` px-1 font-bold text-lg pt-[0.14rem]   `}>
          {totalItemsCount}
        </span>
      </button>
      {showModal && (
        
          <div className="absolute top-16 left-0 rounded-t-none rounded-lg shadow-2xl ml-[60rem]  bg-gray-200 z-10 border border-t-4 border-t-orange-500    p-4">
            <div className="flex justify-between py-2">
              <span className="text-gray-600 font-normal pl-2">Sub Total</span>
              <span className="text-gray-700 font-bold mr-5 ">
                ₹ {parseInt(cartTotal)}
              </span>
            </div>
            <div className="absolute -top-2 left-12 w-3 h-3 bg-gray-200 border-t-4 border-l-4 border-orange-500 transform rotate-45 z-10"></div>

            {Object.values(cartItems).map((item) => {
              return (
                <div className="max-h-[60vh] w-full overflow-y-auto bg-white rounded-lg shadow-xl p-2">
                  <ul key={item?.id} className="border-b border-gray-300">
                    <li className="flex items-center justify-between">
                      <div className="flex items-center p-1">
                        <img
                          src={
                            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                            item?.imageId
                          }
                          alt={item?.name}
                          className="w-10 h-10 object-cover rounded-lg mr-4"
                        />
                        <div>
                          <h2 className="font-bold text-xs">{item?.name}</h2>
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
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        
      )}
      
      <Modal2 open={showModal2} onClose={() => setShowModal2(false)}>
        <div className="flex ">
          <h1 className="font-bold">Cart </h1>
          <h1 className="text-zinc-600 ml-4 pt-2 text-sm">
            {Object.keys(cartItems).length} item
          </h1>
        </div>

        <ShowCart />
        <div className="flex justify-between py-4">
          <span className="text-gray-600 font-normal pl-2">Sub Total</span>
          <span className="text-gray-700 font-bold mr-5 ">
            ₹ {parseInt(cartTotal)}
          </span>
        </div>
        <div className="flex  justify-center items-center">
          <button
            class="py-2 px-4 rounded-lg bg-gradient-to-r  from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br text-white  transition duration-300 ease-in-out shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium  text-sm  text-center mr-2 mb-2"
            onClick={clearAllItemHandler}
          >
            Clear All
          </button>
          <Link to="/cart">
            <button
              type="button"
              class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 "
              onClick={() => setShowModal2(false)}
            >
              Checkout
            </button>
          </Link>
        </div>
      </Modal2>
    </div>
  );
}

export default Modal;
