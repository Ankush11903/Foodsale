import React from "react";

const Shimmer = () => {
  return (
        <div className="flex flex-wrap justify-center  ">
          {Array(15)
            .fill("")
            .map((e, index) => (
              <div key={index} className="w-[254px] h-[220px] p-3 m-5 border border-black bg-gray-100">
                
                <div className="w-full h-[135px] border border-black bg-zinc-50 "></div>
                <br />
                <div className="w-full h-[41px] border border-black bg-stone-200"></div>
                {/* <div className="w-full h-[15px] border border-black bg-zinc-50"></div> */}
                
                </div>
            ))
            
            }
        </div>
      );
     };
     
     export default Shimmer;