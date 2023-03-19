import React from "react";

const Shimmer = () => {
  return (
        <div className="flex flex-wrap">
          {Array(10)
            .fill("")
            .map((e, index) => (
              <div key={index} className="w-[254px] h-[220px] p-3 m-3 border border-black bg-gray-100">
                
                <div className="w-full h-[135px] border border-black bg-zinc-50"></div>
                
                </div>
            ))
            
            }
        </div>
      );
     };
     
     export default Shimmer;