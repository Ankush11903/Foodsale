import React from 'react'
import { useState } from 'react';
import MenuItem from "./menuItem";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const ShowContent=({menu})=> {
    const [isVisible, setIsVisible] = useState(true);

  const toggleView = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="p-5 mx-[250px]">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg cursor-pointer" onClick={toggleView}>
          {menu?.title} ({menu?.itemCards?.length})
        </h3>
        {isVisible ? (
          <SlArrowUp onClick={toggleView} className="cursor-pointer"/>
        ) : (
          <SlArrowDown onClick={toggleView} className="cursor-pointer" />
        )}
      </div>
      {isVisible && (
        <div className="flex flex-col justify-evenly">
          {menu?.itemCards?.map((item) => (
            <MenuItem key={item.id} item={item.card.info} />
          ))}
          </div>)}
    </div>
  )
};
export default ShowContent;
