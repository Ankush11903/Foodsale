import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";

const Logo = () => {
  return <img class="w-[5rem]" src={logo} alt="Food Image" />;
};
const Header = () => {
  return (
    <div class="flex w-auto m-2 justify-between border border-red-500">
      <Logo />
      <div  class="w-auto">
      <ul class="flex w-auto justify-evenly border rounded-lg border-red-500">
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



const App = () => {
  return (
    <div>
      {/* <h1>React App</h1> */}
      <Header />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
