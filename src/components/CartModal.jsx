import { Link } from "react-router-dom";
import React,{useState} from "react";
import { CartIcon } from "../config";
import Modal from "./modal";
import { useSelector } from "react-redux";


const CartModal=()=>{
  const [showModal2, setShowModal2] = useState(false);
  const totalItemsCount = useSelector((store) => store.cart.totalItemsCount);
    return (
        <Link to="/cart">
              <div className="flex items-center justify-center h-screen">
                <button className="flex py-1">
                  <span
                    className="w-[2rem]  text-white "
                    onClick={() => setShowModal2(true)}
                  >
                    <CartIcon />
                  </span>

                  <span className="font-bold text-xs my-2 text-white">
                    Your Cart
                  </span>
                  <span className=" px-3  text-white">{totalItemsCount}</span>
                </button>
                {/* <Modal open={showModal2} onClose={() => setShowModal2(false)}>
                  <h1 className="text-xl font-bold text-center">
                    This is a Modal2
                  </h1>
                  <p className="mt-2 text-gray-600">
                    You can put any content here.
                  </p>
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
                </Modal> */}
              </div>
            </Link>
    )
}
export default CartModal;