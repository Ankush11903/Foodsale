import { useState, useRef, useEffect } from "react";
import logo from "../logo.jpg";
import logo2 from "../logo2.jpg";
import { Link } from "react-router-dom";

import Modal from "./modal";

const Logo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(logoRef.current);
      logoRef.current.style.transform = "translateX(300px)";
      logoRef.current.style.transition = "transform 2s ease-in-out";
      logoRef.current.src = logo;

      setTimeout(() => {
        logoRef.current.style.transform = "translateX(-10px)";
        logoRef.current.style.transition = "transform 2s ease-in-out";
        logoRef.current.src = logo2;
      }, 2000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Link to="/">
      <img
        className="h-[4rem] ml-3"
        ref={logoRef}
        src={logo}
        alt="Food Image"
      />
    </Link>
  );
};

const Header = () => {
  // console.log(cartItems)
  const [login, setLogin] = useState(false);

  return (
    <div className=" flex sticky top-0 z-20 bg-white shadow-md ">
      <div className="w-1/2">
        <Logo />
      </div>
      
      {/* <div className="w-1/2 py-3 "> */}
        <ul className="flex space-x-24 text-2xl font-medium  text-[#020202] justify-around py-3">
          
            <li className="text-lg py-3 hover:text-orange-600 transition-colors duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="text-lg py-3 hover:text-orange-600 transition-colors duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="text-lg py-3 hover:text-orange-600 transition-colors duration-300">
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Modal />
            </li>
            {login ? (
              <li className="text-lg py-3 hover:text-orange-600 transition-colors duration-300 w-20">
                <button onClick={() => setLogin(false)}>Logout</button>
              </li>
            ) : (
              <li className="text-lg py-3 hover:text-orange-600 transition-colors duration-300 w-20">
                <button onClick={() => setLogin(true)}>Login</button>
              </li>
            )}
          </ul>
        
      </div>
    // </div>
  );
};
export default Header;
