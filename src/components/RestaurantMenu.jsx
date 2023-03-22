import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import RestraurantCard from "./RestaurantCard";


const RestaurantMenu=()=>{
    const [restaurant,setRestaurant]=useState([]);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    

    async function getRestaurantInfo(){
        const response=await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId='+id);
        const json= await response.json();
        // console.log(json)
        const data=json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((x)=> x.card.card.type === undefined && x.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        // console.log(data);

        {(data?.filter((x)=> x && x.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory").map((x)=><h1>{x.card.card.title}</h1>))}

        setRestaurant(data);
        console.log("restaurant");


    }

    const {id}=useParams();
    return (
        <div>
            <h1 className="text-lg font-bold">MENU</h1>
            {console.log("restaurant")}
            {console.log("render")}
            {console.log(restaurant)}
            {(restaurant?.map((x)=><h1>{x.card.card.title}</h1>))}
            {/* {(setData?.map((x)=>console.log(x.card.card.title)))} */}
            <h1>{id}</h1>
            {/*
            <h1>{console.log((restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(x=>console.log(x.card.card.title))
            ))}</h1> */}
            
        </div>
    )
}
export default RestaurantMenu;