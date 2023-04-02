import { useState } from "react";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";



import Modal from "./modal";

const Logo = () => {
  return <img className="h-[4rem] rounded-full " src={logo} alt="Food Image" />;
};

const Header = () => {
  
  // console.log(cartItems)
  const [login, setLogin] = useState(false);
  
  return (
    <div className="flex sticky top-0 z-20 bg-gradient-to-r from-[#fdfdfb] to-[#f7c36b] border border-zinc-100 rounded-md w-auto  justify-between  ">
      <Logo />
      <div className="w-auto py-3">
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
          <div>
            <Modal />
          </div>
          
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
