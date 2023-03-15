import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";

const Logo = () => {
  return <img class="w-[5rem] rounded-full " src={logo} alt="Food Image" />;
  // background-color: #fff;dfd
  //   box-shadow: 0 0 10px rgba(0,0,0,0.1);
  //   background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%);
};
const Header = () => {
  return (
    <div class="flex  bg-gradient-to-r from-orange-500 to-amber-400 px-2 w-auto  justify-between  ">
      <Logo />
      <div class="w-auto py-6">
      <ul class="flex w-auto space-x-24 text-2xl font-medium  ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li><i class="fa-solid fa-cart-shopping"></i></li>
      </ul>
      </div>      
    </div>
  );
};
const Food = () => {
  return (
    <div className="Food">
      <h2>Food</h2>
      <p>
        Food is any substance consumed to provide nutritional support for the
        body. It is usually of plant or animal origin, and contains essential
        nutrients, such as fats, proteins, vitamins, or minerals. The substance
        is ingested by an organism and assimilated by the organism's cells to
        provide energy, maintain life, or stimulate growth. Different species of
        animals have different feeding behaviours that satisfy their nutritional
        needs.
      </p>
    </div>
  );
};
const FoodList = () => {
  return (
    <div className="FoodList">
      <h2>Food List</h2>
      <Food />
    </div>
  );
};

const Body = () => {
  return (
    <div class="flex justify-center items-center border border-red-600">
      <FoodList />
      <FoodList />
    </div>
  );
};


const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

