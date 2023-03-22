import react from "react";
import {Link} from "react-router-dom";

const RestraurantCard = ({
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    id,
  }) => {
    return (
      <Link to={'/restaurant/'+id}><div className="w-[254px]  relative  p-3 m-3 border border-black flex-wrap break-words">
        {/* {console.log(name)} */}
        <img
          className="w-full"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt="Avatar"
        />
        <h1>{name}</h1>
        <h6 className="font-thin text-xs">{cuisines?.join(",")}</h6>
        <h2>{avgRating} Star</h2>
      </div></Link>
    );
  };
export default RestraurantCard;