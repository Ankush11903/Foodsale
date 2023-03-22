import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";


const RestaurantMenu=()=>{
    const [restaurant,setRestaurant]=useState({});

    useEffect(()=>{
        getRestaurantInfo();
    },[]);
    

    async function getRestaurantInfo(){
        const response=await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId='+id);
        const data= await response.json();
        console.log(data);
        setRestaurant(data);

    }

    const {id}=useParams();
    return (
        <div>
            <h1>{id}</h1>
            <h1>{console.log((restaurant?.data?.cards?.map(x => x.card)))}</h1>
            {/* <h1>{console.log(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.card)}</h1> */}
        </div>
    )
}
export default RestaurantMenu;