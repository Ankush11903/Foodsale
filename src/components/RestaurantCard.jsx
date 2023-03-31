import react from "react";
import {Link} from "react-router-dom";

const RestraurantCard = ({
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    id,
  }) => {
    if(!cloudinaryImageId) return (
      <Link to={'/restaurant/'+id}><div
      className="w-[254px]  relative  p-3 m-3  flex-wrap break-words"
            >
              <div className="animate-pulse w-full h-[135px] border border-neutral-300 rounded-md bg-gray-400"></div>

              <h1 className="py-2">{name}</h1>
        <h6 className="font-thin text-xs">{cuisines?.join(",")}</h6>
        <h2>{avgRating} Star</h2>
            </div></Link>
    )
    return (
      <Link to={'/restaurant/'+id}><div className="w-[254px]  relative  p-3 m-3  flex-wrap break-words">
        {/* {console.log(name)} */}
        <img
          className="w-full rounded-md"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt="Avatar"
        />
        <h1 className="py-2">{name}</h1>
        <h6 className="font-thin text-xs">{cuisines?.join(",")}</h6>
        <h2>{avgRating} Star</h2>
      </div></Link>
    );
  };
export default RestraurantCard;