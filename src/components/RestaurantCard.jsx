import react from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/Ai";
import {CiDiscount1} from "react-icons/ci"

const RestraurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  id,
  costForTwoString,
  slaString,aggregatedDiscountInfo
}) => {
  if (!cloudinaryImageId)
    return (
      <Link to={"/restaurant/" + id}>
        <div className="w-[254px]  relative  p-3 m-3  flex-wrap break-words">
          <div className="animate-pulse w-full h-[135px] border border-neutral-300 rounded-md bg-gray-400"></div>

          <h1 className="py-2">{name}</h1>
          <h6 className="font-thin text-xs">{cuisines?.join(",")}</h6>
          <h2>{avgRating} Star</h2>
        </div>
      </Link>
    );
  return (
    <Link to={"/restaurant/" + id}>
      {/* <Tilt> */}
        <div className="w-[290px] relative  py-6 mx-3 flex-wrap break-words">
          <div className="p-4 rounded-md  hover:shadow-xl hover:border hover:border-zinc-300">
            <img
              className=""
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                cloudinaryImageId
              }
              alt="Avatar"
            />
            <h1 className="pt-2 font-semibold">{name}</h1>
            <h6 className="font-normal text-zinc-600 text-xs">
              {cuisines?.join(", ")}
            </h6>

            <div className="flex mt-4 justify-between items-center text-xs pb-2.5 text-gray-700 font-normal mob:flex-col mob:items-start">
              <div
                className="flex items-center h-5 w-11 gap-1 py-0 px-1"
                style={{
                  backgroundColor:
                    avgRating == "--"
                      ? "#fff"
                      : parseFloat(avgRating) >= 4.0
                      ? "#48c479"
                      : parseFloat(avgRating) >= 3.0
                      ? "#db7c38"

                      : "#e8c13a",
                  color: isNaN(avgRating) ? "#535665" : "#fff",
                }}
              >
                <AiFillStar />
                <span>{avgRating}</span>
              </div>
              <div>•</div>
              <div>{slaString}</div>
              <div>•</div>
              <div>{costForTwoString}</div>
            </div>
            {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta ? 
            <>
            <hr />
            <div className="flex pt-3 text-yellow-800">
               <CiDiscount1 className="h-[1.4rem]"/>
            <span className="font-semibold text-sm pl-2 ">{aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}</span>
            </div> </> : null}
            
            
          </div>
        </div>
      {/* </Tilt> */}
    </Link>
  );
};
export default RestraurantCard;
