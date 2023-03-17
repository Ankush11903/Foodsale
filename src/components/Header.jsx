import { useState } from "react";
import logo from "../logo.jpg";

const Logo = () => {
    return <img className="w-[5rem] rounded-full " src={logo} alt="Food Image" />;
  };

const Header = () => {
  const [login, setLogin] = useState(false)
    return (
      <div className="flex  bg-gradient-to-r from-orange-500 to-amber-400 px-2 w-auto  justify-between  ">
        <Logo />
        <div className="w-auto py-6">
          <ul className="flex w-auto space-x-24 text-2xl font-medium  ">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
            {login ? <button onClick={()=>setLogin(false)}>Logout</button> : <button onClick={()=>setLogin(true)}>Login</button>}
          </ul>
        </div>
      </div>
    );
  };
 export default Header;