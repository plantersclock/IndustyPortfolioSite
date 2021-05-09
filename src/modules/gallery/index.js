import React from "react";

import LazyImages from "./components/LazyImages";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import LazyLoad from "react-lazyload";

const Kirk = "Kirk.jpg";
const Lisa = "Lisa.jpg";
const WorkingLandscape = "WorkingLandscape.jpg";
const Tam = "Tam.jpg";
const PrevOwnersLandscape = "PrevOwnersLandscape.jpg";
const LisaMask = "LisaMask.jpg";
const PrevOwnerKirkLandscape = "PrevOwnerKirkLandscape.jpg";
const CoWorker = "Worker.jpg";
const ProductLandscape = "ProductLandscape.jpg";

const images = [
  Lisa,
  Kirk,
  WorkingLandscape,
  Tam,
  PrevOwnersLandscape,
  LisaMask,
  PrevOwnerKirkLandscape,
  CoWorker,
  ProductLandscape,
];

const Gallery = () => {
  return (
    <div className="relative ">
      <div className="hidden md:grid md:relative z-40  grid-cols-3 gap-4 max-w-7xl mx-auto px-6 lg:px-8 xl:px-20 2xl:px-8 py-20 2xl:py-32">
        <div className="col-span-1 ">
          <LazyImages images={[Lisa, WorkingLandscape, CoWorker]} />
        </div>
        <div className="col-span-1">
          <LazyImages
            images={[PrevOwnerKirkLandscape, Kirk, ProductLandscape]}
          />
        </div>

        <div className="col-span-1 ">
          <LazyImages images={[Tam, PrevOwnersLandscape, LisaMask]} />
        </div>
      </div>
      <div className="relative md:hidden z-40 max-w-7xl mx-auto px-6 lg:px-8 xl:px-20 2xl:px-8 py-20 2xl:py-32">
        <Carousel
          centerMode={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
        >
          {images.map((image) => (
            <div className="bg-black flex items-center">
              <LazyLoad>
                <img
                  src={`https://res.cloudinary.com/mpwcloud/image/upload/c_pad,f_auto,g_center,q_auto,h_600,w_800/v1620583770/IndustryWebsite/${image}`}
                  alt="..."
                />
              </LazyLoad>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="relative z-40 flex w-full text-theme-blue-100 justify-center pb-4 opacity-50 text-center text-sm">
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
