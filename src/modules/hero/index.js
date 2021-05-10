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

  return (
    <div className={`relative overflow-hidden w-full`}>
      <div>
        <img
          src={`https://res.cloudinary.com/mpwcloud/image/upload/c_scale,f_auto,q_auto,w_${
            width < 450 ? width : 900
          }/v1620583770/IndustryWebsite/LeadingEdgeLogo.png`}
          alt="Leading Edge"
          className=" h-24 xs:h-28 relative z-40 md:h-36 2xl:h-44 3xl:h-52 p-4 md:p-8 2xl:p-10 3xl:ml-20"
        />
      </div>

      <div className=" relative z-40 max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 xl:px-20 2xl:px-8">
        <div className=" sm:w-4/5 pt-4 pb-20  2xl:w-full">
          <h1 className="sm:font-light text-theme-blue-100 text-3xl xs:text-5xl 2xl:text-6xl 3xl:text-8xl ">
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

      <div className="relative z-40 h-auto w-full" ref={ref}>
        <div className="absolute top-0 left-0 w-full sm:w-2/3 md:w-1/2 2xl:w-2/5 bg-opacity-90 h-full bg-theme-blue-900"></div>
        <div className="relative h-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-8 py-6 xs:py-8 2xl:py-16 3xl:py-20 ">
          <h2 className="font-medium text-theme-blue-100 text-2xl  xl:text-3xl 3xl:text-5xl ">
            Partner With Us
          </h2>
          <div className="w-40 border-t-2 border-theme-orange-500 mt-2 sm:mt-6"></div>
          <p className="text-theme-blue-100 font-light pr-8 xs:w-2/3 md:w-1/2 2xl:w-1/3 md:text-lg 3xl:text-2xl my-6 3xl:my-12 lg:w-1/2">
            We would love to make your next Aluminum project a reality.
          </p>
          <button
            onClick={() => {
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="bg-theme-orange-500 p-2 text-theme-blue-100 font-medium md:text-lg 3xl:p-4 3xl:text-xl focus:outline-none"
          >
            Contact Us
          </button>
        </div>
      </div>

      <div
        className="absolute z-20 top-0 h-full w-full bg-cover bg-theme-blue-900"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/mpwcloud/image/upload/c_scale,f_auto,q_auto,w_100/v1620583770/IndustryWebsite/MetalShavings.jpg`,
          // animation: "fadein 1s",
        }}
      ></div>

      <LazyLoad offset={100}>
        <div
          className="absolute z-20 top-0 h-full w-full bg-cover"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/mpwcloud/image/upload/c_scale,f_auto,q_auto,w_${Math.round(
              width * 1.5
            )}/v1620583770/IndustryWebsite/MetalShavings.jpg`,
            animation: "fadein .2s",
          }}
        ></div>
      </LazyLoad>
      <div className="absolute z-30 top-0 h-full w-full bg-cover bg-opacity-50 bg-theme-blue-900"></div>
    </div>
  );
};

export default Hero;
