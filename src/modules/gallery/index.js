import React from "react";
import die from "../common/images/AluminumDies.jpg";
import resurfacing from "../common/images/ReSurfacing.jpg";
import any from "../common/images/AluminumAnything.jpg";
import LazyImages from "./components/LazyImages";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  return (
    <div className="relative ">
      <div className="hidden md:grid md:relative z-40  grid-cols-3 gap-4 max-w-7xl mx-auto px-6 lg:px-8 xl:px-20 2xl:px-8 py-20 2xl:py-32">
        <div className="col-span-1 ">
          <LazyImages images={[die, resurfacing, any]} />
        </div>
        <div className="col-span-1">
          <LazyImages images={[resurfacing, any, die]} />
        </div>

        <div className="col-span-1 ">
          <LazyImages images={[any, die, resurfacing]} />
        </div>
      </div>
      <div className="relative md:hidden z-40 max-w-7xl mx-auto px-6 lg:px-8 xl:px-20 2xl:px-8 py-20 2xl:py-32">
        <Carousel
          centerMode={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div className="bg-black h-full flex items-center">
            <img src={die} alt="..." />
          </div>
          <div>
            <img src={any} alt="..." />
          </div>
          <div>
            <img src={resurfacing} alt="..." />
          </div>
        </Carousel>
      </div>
      <div className="absolute w-full top-0 z-10 bg-theme-blue-900 h-full"></div>
    </div>
  );
};

export default Gallery;
