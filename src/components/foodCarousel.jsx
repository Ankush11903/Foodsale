import React from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
// import logo from "../logo.jpg";
// import logo2 from "../logo.jpg";
// import logo3 from "../logo.jpg";
// import logo4 from "../logo.jpg";

// const images = [logo];

function FoodCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const nextImage = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  const prevImage = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  return (
    <div className="relative h-72">
      
      <button
        className="absolute z-10 top-1/4 left-2 bg-white text-gray-900 rounded-full p-2 transform -translate-y-1/2 hover:shadow-md focus:outline-none"
        // onClick={prevImage}
      >
        {/* <ChevronLeftIcon className="h-6 w-6" /> */}
      </button>
      <button
        className="absolute z-10 top-1/4 right-2 bg-white text-gray-900 rounded-full p-2 transform -translate-y-1/2 hover:shadow-md focus:outline-none"
        // onClick={nextImage}
      >
        {/* <ChevronRightIcon className="h-6 w-6" /> */}
      </button>
    </div>
  );
}

export default FoodCarousel;
