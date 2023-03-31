import React from "react";

const Shimmer = () => {
  return (
        <div className="flex flex-wrap justify-center  ">
          {Array(15)
            .fill("")
            .map((e, index) => (
              <div
              key={index}
              className=" animate-pulse w-[254px] h-[220px] p-3 m-5 border border-slate-200 rounded-md bg-[#fdfdfd]"
            >
              <div className="animate-pulse w-full h-[135px] border border-neutral-300 rounded-md bg-gray-100"></div>

              <p class="leading-relaxed mt-4 mb-2 w-full h-3 animate-pulse bg-gray-200 rounded-sm"></p>
            <p class="leading-relaxed mt-2 mb-1 w-2/3 h-3 animate-pulse bg-gray-200 rounded-sm"></p>
            <p class="leading-relaxed  w-1/5 h-3 animate-pulse bg-gray-200 rounded-sm"></p>
            </div>
            ))
            
            }
        </div>
      );
     };
     
export default Shimmer;