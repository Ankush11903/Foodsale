import  restaurantList  from "../config";
import RestaurantCard from "./RestaurantCard";
// import { useState } from "react";

// What is state
// what is React Hooks? - functions,
// What is useState

// function filterData(searchText, restaurants) {
//   const filterData = restaurants.filter((restaurant) =>
//     restaurant.data.name.includes(searchText)
//   );

//   return filterData;
// }

const Body = () => {
  // const [restaurants, setRestaurants] = useState(restaurantList);
  // const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value=""
          // onChange={(e) => {
          //   setSearchText(e.target.value);
          // }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            // const data = filterData(searchText, restaurants);
            // update the state - restaurants
            // setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        Hello
        {console.log(restaurantList)}
        {restaurantList?.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data.data} key={restaurant.data.data.id} />
          );
        })}
    </div>
    </>
  );
};

export default Body;
