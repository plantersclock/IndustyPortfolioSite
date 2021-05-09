import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import LazyLoad from "react-lazyload";
import { forceCheck } from "react-lazyload";

const Hero = ({ setContactButtonState }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) {
      setContactButtonState("visible");
    }
    if (inView) {
      setContactButtonState("hidden");
    }
  }, [inView, setContactButtonState]);

  const anchor = document.querySelector("#contact-form-id");

  const width = window.screen.width;
  forceCheck();
  console.log(width);

  return (
    <div className="relative">
      <div>
        <img
          src={`https://res.cloudinary.com/mpwcloud/image/upload/c_scale,f_auto,q_auto,w_${
            width < 450 ? 450 : 900
          }/v1620583770/IndustryWebsite/LeadingEdgeLogo.png`}
          alt="Leading Edge"
          className=" h-24 xs:h-28 relative z-40 md:h-36 lg:h-44 3xl:h-52 p-4 md:p-8 2xl:p-10 3xl:ml-20"
        />
      </div>

      <div className=" relative z-40 max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 xl:px-20 2xl:px-8">
        <div className=" sm:w-4/5 mt-4 sm:mt-4 2xl:mt-12 2xl:w-full">
          <h1 className="sm:font-light text-theme-blue-100 text-3xl xs:text-4xl md:text-6xl 2xl:text-8xl ">
            Aluminum
            <br />
            Machining Experts
          </h1>
          <p className="font-light text-theme-blue-100 mt-4 sm:mt-6 md:text-xl 2xl:w-2/5">
            Leading Edge Tooling Specializes in the Design, Manufacture and
            Re-Surfacing of Custom Aluminum Dies and Products.
          </p>
        </div>
      </div>

      <div className="relative z-40 h-auto w-full mt-20  2xl:mt-28 3xl:mt-72">
        <div className="absolute top-0 left-0 w-full sm:w-2/3 md:w-1/2  bg-opacity-90 h-full bg-theme-blue-900"></div>
        <div className="relative h-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-8 py-6 xs:py-8 sm:py-10 2xl:py-20 ">
          <h2 className="font-medium text-theme-blue-100 text-2xl md:text-3xl 2xl:text-5xl ">
            Partner With Us
          </h2>
          <div className="w-40 border-t-2 border-theme-orange-500 mt-2 sm:mt-6"></div>
          <p className="text-theme-blue-100 font-light pr-8 xs:w-2/3 md:w-1/2 md:text-lg 2xl:text-2xl my-6 2xl:my-12 lg:w-1/2">
            We would love to make your next Aluminum project a reality.
          </p>
          <button
            ref={ref}
            onClick={() => {
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="bg-theme-orange-500 p-2 text-theme-blue-100 font-medium md:text-lg 2xl:p-4 2xl:text-xl focus:outline-none"
          >
            Contact Us
          </button>
        </div>
      </div>

      <div
        className="absolute z-30 top-0 h-full w-full bg-cover bg-theme-blue-900"
        style={{
          backgroundImage: ` linear-gradient(to bottom, rgba(10, 15, 33, .5), rgba(10, 15, 33,.5)), url(https://res.cloudinary.com/mpwcloud/image/upload/c_scale,f_auto,q_auto,w_100/v1620583770/IndustryWebsite/MetalShavings.png)`,
          // animation: "fadein 1s",
        }}
      ></div>
      <LazyLoad offset={100}>
        <div
          className="absolute z-30 top-0 h-full w-full bg-cover"
          style={{
            backgroundImage: ` linear-gradient(to bottom, rgba(10, 15, 33, .5), rgba(10, 15, 33,.5)), url(https://res.cloudinary.com/mpwcloud/image/upload/c_scale,f_auto,q_auto,w_${Math.round(
              width * 1.5
            )}/v1620583770/IndustryWebsite/MetalShavings.jpg)`,
            // animation: "fadein .5s",
          }}
        ></div>
      </LazyLoad>
    </div>
  );
};

export default Hero;
