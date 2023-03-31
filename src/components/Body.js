import restaurantList from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import {Link} from 'react-router-dom';


function fliterData(restaurant, searchText) {
  // console.log(restaurant);
  const filterData = restaurant.filter((restaurants) =>
    restaurants?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}


const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [allRestaurant, setAllRestaurant] = useState("");
  const [cart,setCart]=useState(15);
  let rest=[];

  useEffect(() => {
    callApiHandler();
  }, []);

  

  async function callApiHandler() {
    // setLoading(true);
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    );
    let da = await response.json();
    // console.log(da);
    // setRestaurant(da?.data?.cards[2]?.data?.data?.cards);
    // console.log(restaurant);
    rest=(da?.data?.cards[2]?.data?.data?.cards?.map((x) => x.data));
    // console.log(allRestaurant);



    
    // console.log(rest)
    setRestaurant(rest);
    setAllRestaurant(rest);
    // console.log(allRestaurant)

    // setLoading(false);
  }

  async function callApiHandler2() {
    // setLoading(true);
    let response2 = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&offset=${cart}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
    );
    let dat = await response2.json();
    // console.log("dat",dat)
    // setRestaurant(...restaurant,dat?.data?.cards);
    rest?.push( ...dat?.data?.cards?.map((x) => x)
    ?.filter(
      (x) => 
        x.cardType ==
        "restaurant"
    )
    ?.flat()
    .map((x) => 
    // console.log(x.data.data)
    x.data?.data
    ) );

    
    // console.log(rest)
    setRestaurant((prev)=>[...prev,...rest]);
    setAllRestaurant((prev)=>[...prev,...rest]);
    // loading=false;
    // console.log(allRestaurant)

    // setLoading(false);
    
  }
  
  useEffect(() => {
    // console.log("calling")
    callApiHandler2();
    // setLoading(false);
    // loading=false;

    return () => {
      // console.log("unmounting")
      // loading=false;
      // setLoading(false);
    }
  }, [cart]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop +1 >=
        document.documentElement.scrollHeight 
      ) {
        // setLoading(true);
        setCart((prev) => prev + 16);
        
        
      }
    } catch (error) {
      // console.log(error);
    }
    
  };


  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);


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
              // console.log(restaurant)
              <RestaurantCard {...restaurant} key={restaurant?.data?.id} />
            );
          })
        )}
        {Array(1)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className=" animate-pulse w-[254px] h-[220px] p-3 m-5 border border-slate-200 rounded-md bg-[#fdfdfd]"
            >
              <div className="animate-pulse w-full h-[135px] border border-neutral-300 rounded-md bg-gray-100"></div>
              {/* <br /> */}

              <p class="leading-relaxed mt-4 mb-2 w-full h-3 animate-pulse bg-gray-200 rounded-sm"></p>
            <p class="leading-relaxed mt-2 mb-1 w-2/3 h-3 animate-pulse bg-gray-200 rounded-sm"></p>
            <p class="leading-relaxed  w-1/5 h-3 animate-pulse bg-gray-200 rounded-sm"></p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Body;
