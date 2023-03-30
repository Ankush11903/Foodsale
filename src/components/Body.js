import restaurantList from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import {Link} from 'react-router-dom';


function fliterData(restaurant, searchText) {
  console.log(restaurant);
  const filterData = restaurant.filter((restaurants) =>
    restaurants?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}


const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [allRestaurant, setAllRestaurant] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    callApiHandler();
  }, []);

  async function callApiHandler() {
    setLoading(true);
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    );
    let da = await response.json();
    // console.log(da);
    setRestaurant(da?.data?.cards[2]?.data?.data?.cards);
    console.log(restaurant);
    setAllRestaurant(da?.data?.cards[2]?.data?.data?.cards);
    // console.log(allRestaurant);
    setLoading(false);
  }
  
  return (
    <>
      <div className="search-container mx-72 py-6 flex">
        <input
          type="text"
          className="search-input border border-[#e4e3e3] rounded-md"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            
          }}
        />
        <button
          className="search-btn mx-3"
          onClick={() => {
            let data = fliterData(allRestaurant, searchText);
            setRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {restaurant?.length === 0 ? (
          <Shimmer />
        ) : (
          restaurant?.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
