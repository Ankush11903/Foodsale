import { useState,useRef,useEffect } from "react";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";



import Modal from "./modal";

const Logo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    console.log("render")
    const interval = setInterval(() => {
        logoRef.current.style.transform = "translateX(300px)";
        logoRef.current.style.transition ="transform 2s ease-in-out"
        setTimeout(() => {
          logoRef.current.style.transform = "translateX(0)";
          logoRef.current.style.transition ="transform 0s ease-in-out"
        }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Link to="/"><img
      className="h-[4rem] ml-3"
      ref={logoRef}
      src={logo}
      alt="Food Image"
    /></Link>
  );
};

const Header = () => {
  
  // console.log(cartItems)
  const [login, setLogin] = useState(false);
  
  return (
    <div className="flex sticky top-0 z-20 bg-white shadow-md  w-auto  justify-between  ">
      <Logo />
      <div className="w-auto py-3">
        <ul className="flex w-auto space-x-24 text-2xl font-medium  text-[#020202]">
        <ul className="flex justify-center space-x-6">
  <li className="text-lg py-3 hover:text-orange-600 transition-colors duration-300">
    <Link to="/">Home</Link>
  </li>
  <li className="text-lg py-3 hover:text-orange-600 transition-colors duration-300">
    <Link to="/about">About</Link>
  </li>
  <li className="text-lg py-3 hover:text-orange-600 transition-colors duration-300">
    <Link to="/contact">Contact</Link>
  </li>
</ul>

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
