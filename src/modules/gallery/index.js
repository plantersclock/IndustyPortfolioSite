import React from "react";
import die from "../common/images/AluminumDies.jpg";
import resurfacing from "../common/images/ReSurfacing.jpg";
import any from "../common/images/AluminumAnything.jpg";
import LazyImages from "./components/LazyImages";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import LazyLoad from "react-lazyload";

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
            <LazyLoad>
              <img src={die} alt="..." />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img src={any} alt="..." />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img src={resurfacing} alt="..." />
            </LazyLoad>
          </div>
        </Carousel>
      </div>
      <div className="relative z-40 flex w-full text-theme-blue-100 justify-center pb-4 xl:pb-12 opacity-50 text-center text-sm">
        Copyright © 2021 Leading Edge Tooling - All Rights Reserved.
      </div>
      <div className="relative z-40 flex w-full text-theme-blue-100 justify-center pb-4 xl:pb-12 opacity-50 text-center text-sm">
        Created By: Matthew Wright
      </div>
      <div className="absolute w-full top-0 z-10 bg-theme-blue-900 h-full"></div>
    </div>
  );
};

export default Gallery;
