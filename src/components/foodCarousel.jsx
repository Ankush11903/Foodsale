import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/Ai";

function FoodCarousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(props.data.length)

  const prevImage = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="relative">
      {currentIndex!=0 && <button
        className="absolute z-10 top-1/2 left-2 bg-white text-gray-900 rounded-full p-4 transform -translate-y-1/2 hover:shadow-md focus:outline-none transition-all duration-500 ease-in-out"
        onClick={prevImage}
      >
        <AiOutlineArrowLeft className="h-6 w-6 hover:-translate-x-2 transition-transform duration-750  ease-in-out" />
      </button>}

      {currentIndex +3!=props.data.length && <button
        className="absolute z-10 top-1/2 right-2 bg-white text-gray-900 rounded-full p-4 transform -translate-y-1/2 hover:shadow-md focus:outline-none"
        onClick={nextImage}
      >
        <AiOutlineArrowRight className="h-6 w-6 hover:translate-x-2 transition-transform duration-750 ease-in-out" />
      </button>}

      <span
        className="flex  text-center transition-all duration-1000 ease-in-out "
        style={{ transform: `translateX(-${currentIndex * 24}rem)` }}
      >
        {props?.data?.map((image, index) => (
          <img
            key={index}
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/${image.data.creativeId}`}
            className={`h-[344px] object-cover py-10 px-6 ${
              index === 0 ? "ml-0" : ""
            }`}
            alt={`Image ${index}`}
            style={{ transition: "transform .5s" }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ))}
      </span>
    </div>
  );
}

export default FoodCarousel;
