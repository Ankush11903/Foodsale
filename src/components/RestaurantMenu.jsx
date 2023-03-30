import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";



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
    <button onClick={()=>addItemHandler(menuItem)}
    class="bg-gradient-to-r from-orange-300 to-orange-400 hover:bg-black text-red-600 font-bold mt-16 h-[40px] py-2 px-6 rounded-full">
        Add
      </button>
    </div>
  );
};

const RestaurantMenu = () => {
  const [restaurantTop, setRestaurantTop] = useState(null);
  const [menuRestaurant, setMenuRestaurant] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=" +
        id
    );
    const json = await response.json();
    // console.log(json)
    const data = json?.data;
    // console.log(data);
    const menuItems =
      data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.map((x) => x.card?.card)
        ?.filter(
          (x) =>
            x["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];
    console.log(menuItems);
    setMenuRestaurant(menuItems);
    setRestaurantTop(data);
    // console.log("restaurant");
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

      <h1 className="text-lg font-bold mx-[250px] text-center">MENU</h1>
      <div className="mx-[250px]">
        {/* {console.log(restaurantTop)} */}
        <h1 className="text-xl font-semibold text-gray-600">Recommanded</h1>
        <h4>{menuRestaurant.length} Items</h4>
        {console.log(menuRestaurant)}
        {menuRestaurant.map((menuItem) => {
          return <RestaurantItem {...menuItem} key={menuItem.id} />;
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
