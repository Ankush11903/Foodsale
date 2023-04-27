import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import MealItemInput from "./MealItemInput";

import ShowContent from "./showContent";
import { RestaurantData } from "../config";



const RestaurantItem = (menuItem) => {
  const dispatch=useDispatch();

const addItemHandler=(item)=>{
  dispatch(addItem(item));
}

  return (
    <div className="flex ">
    <div className="flex w-full ">
      <div className="flex pt-7">
        <img
          className="w-[120px] h-[120px] rounded-2xl"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            menuItem.imageId
          }
          alt="Avatar"
        />
        <div className="pl-6 flex flex-col">
          <h1 className="text-lg font-semibold text-gray-600">{menuItem.name}</h1>
          <h2 className=" text-sm font-semibold text-gray-900">
            ₹ {menuItem.price ? menuItem.price / 100 : menuItem.defaultPrice / 100}
          </h2>
          <h3 className="pt-2 text-sm font-semibold text-gray-500">
            {menuItem.description}
          </h3>
        </div>
      </div>
      
    </div>
    <MealItemInput addItemHandler={addItemHandler} menuItem={menuItem}/>
    </div>
  );
};

const RestaurantMenu = () => {
  const [restaurantTop, setRestaurantTop] = useState(null);
  const [menuRestaurant, setMenuRestaurant] = useState([]);
  

  useEffect(() => {
    try {
      getRestaurantInfo()
        .then(response => {
          // handle the response here
        })
        .catch(error => {
          console.error(error);
          // handle the error here
          console.log(RestaurantData);
      const data = RestaurantData[id]?.data;
      console.log("data")
    console.log(data);
    console.log(id)
    const menuItems =
      data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.map((x) => x.card?.card)
        ?.filter(
          (x) =>
            x["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    // console.log(menuItems);
    setMenuRestaurant(menuItems);
    setRestaurantTop(data);

        });
    } catch (error) {
      console.log(RestaurantData);
      const data = RestaurantData[id]?.data;
      console.log("data")
    console.log(data);
    console.log(id)
    const menuItems =
      data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.map((x) => x.card?.card)
        ?.filter(
          (x) =>
            x["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    // console.log(menuItems);
    setMenuRestaurant(menuItems);
    setRestaurantTop(data);
    }
    
  }, []);

  async function getRestaurantInfo() {
    let response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=" +
        id
    );
    const json = await response.json();
    console.log("json")
    console.log(json)
    const data = json?.data;
    // console.log(data);
    const menuItems =
      data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.map((x) => x.card?.card)
        ?.filter(
          (x) =>
            x["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    // console.log(menuItems);
    setMenuRestaurant(menuItems);
    setRestaurantTop(data);
    // info : res_data.data.cards[0].card.card.info,
    // console.log("eh")
    // console.log(data?.cards[0]?.card?.card?.info);
    // console.log(menuRestaurant);
  }

  const { id } = useParams();
  return (
    <div>
      <div className="flex bg-[#171717]">
        <img
          className="w-[300px] ml-[200px] p-[10px] rounded-3xl"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            restaurantTop?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt="Avatar"
        />
        <div>
          <h1 className=" text-4xl text-white ml-[25px] pt-10">
            {restaurantTop?.cards[0]?.card?.card?.info?.name}
          </h1>
          <h4 className=" text-sm text-white ml-[25px] pt-4">
            {restaurantTop?.cards[0]?.card?.card?.info?.cuisines?.join(",")}
          </h4>
          <div className="flex">
            <h4 className=" text-sm text-white ml-[25px] pt-4">
              {restaurantTop?.cards[0]?.card?.card?.info?.avgRating} Stars
            </h4>
            <h4 className=" text-sm text-white ml-[25px] pt-4">
              {restaurantTop?.cards[0]?.card?.card?.info?.sla?.minDeliveryTime}{" "}
              MINS
            </h4>
            <h4 className=" text-sm text-white ml-[25px] pt-4">
              {restaurantTop?.cards[0]?.card?.card?.info?.totalRatingsString}
            </h4>
          </div>
        </div>

        {/* {console.log(restaurantTop?.cards[0]?.card?.card)} */}
      </div>
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700" />


      {console.log(menuRestaurant)}
      
      {menuRestaurant?.map((menu) => (<ShowContent menu={menu} />))}
      
      
      
     </div>
    // </div>
    // </div>
  );
};
export default RestaurantMenu;
