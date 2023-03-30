import { useState } from "react";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";



import CartModal from "./CartModal";

const Logo = () => {
  return <img className="w-[6rem] rounded-full " src={logo} alt="Food Image" />;
};

const Header = () => {
  
  // console.log(cartItems)
  const [login, setLogin] = useState(false);
  
  return (
    <div className="flex  bg-gradient-to-r from-[#f0e68c] to-[#ff9f00] px-2 w-auto  justify-between  ">
      <Logo />
      <div className="w-auto py-6">
        <ul className="flex w-auto space-x-24 text-2xl font-medium  text-[#020202]">
          <li className="text-sm py-3">
            <Link to="/">Home</Link>
          </li>
          <li className="text-sm py-3">
            <Link to="/about">About</Link>
          </li>
          <li className="text-sm py-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <CartModal />
          </li>
          {login ? (
            <button onClick={() => setLogin(false)}>Logout</button>
          ) : (
            <button onClick={() => setLogin(true)}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
