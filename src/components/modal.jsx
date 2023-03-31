import React, { useRef, useState } from "react";
import { CartIcon } from "../config";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShowCart from "./ShowCart";

function Modal2({ open, onClose, children }) {
  const Modal2Ref = useRef();
  

  // Close the Modal2 if user clicks outside of it
  const handleClick = (e) => {
    if (Modal2Ref.current === e.target) {
      onClose();
    }
  };
  const cartItems = useSelector((store) => store.cart.totalItemsCount);

  return (
    open && (
      <div
        ref={Modal2Ref}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50"
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
  const cartItems = useSelector((store) => store.cart.totalItemsCount);
  console.log(cartItems)

  return (
    <div className="flex items-center justify-center">
      <button className="flex py-1" onClick={() => setShowModal2(true)}>
        <span className="w-[2rem]  text-white ">
          <CartIcon />
        </span>

        <span className="font-bold text-xs my-2 text-white">Your Cart</span>
        <span className=" px-3  text-white">{cartItems}</span>
      </button>
      <Modal2 open={showModal2} onClose={() => setShowModal2(false)}>
        <ShowCart />
        <div className="flex items-center justify-end mt-4">
          <button
            className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded-md"
            onClick={() => setShowModal2(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-white bg-green-600 rounded-md"
            onClick={() => alert("Confirmed")}
          >
            Confirm
          </button>
        </div>
      </Modal2>
    </div>
  );
}

export default Modal;
