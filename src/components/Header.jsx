import { useState } from "react";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Logo = () => {
    return <img className="w-[5rem] rounded-full " src={logo} alt="Food Image" />;
  };

const Header = () => {
  const cartItems=useSelector((store)=> store.cart.items);
  console.log(cartItems)
  const [login, setLogin] = useState(false)
    return (
      <div className="flex  bg-gradient-to-r from-orange-300 to-orange-400 px-2 w-auto  justify-between  ">
        <Logo />
        <div className="w-auto py-6">
          <ul className="flex w-auto space-x-24 text-2xl font-medium  ">
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
            <Link to='/contact'>Contact</Link></li>
            <li>
              <i className="fa-solid fa-cart-shopping">Cart : {cartItems.length} </i>
            </li>
            {login ? <button onClick={()=>setLogin(false)}>Logout</button> : <button onClick={()=>setLogin(true)}>Login</button>}
          </ul>
        </div>
      </div>
    );
  };
 export default Header;