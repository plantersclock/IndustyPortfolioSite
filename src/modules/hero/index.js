import React, { useEffect } from "react";
import heroImage from "../common/images/MetalShavings.png";
import logo from "../common/images/LeadingEdgeLogo.png";
import { useInView } from "react-intersection-observer";

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

  return (
    <div
      className="h-full w-full bg-cover"
      style={{
        backgroundImage: ` linear-gradient(to bottom, rgba(10, 15, 33, .5), rgba(10, 15, 33,.5)), url(${heroImage})`,
        animation: "fadein 1s",
      }}
    >
      <div>
        <img
          src={logo}
          alt="Leading Edge"
          className="w-80  xl:w-1/4 3xl:w-1/5 p-4 md:p-8 2xl:p-10 3xl:ml-72"
        />
      </div>

      <div className=" relative max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 xl:px-20 2xl:px-8">
        <div className=" sm:w-4/5 mt-4 sm:mt-4 2xl:mt-12 2xl:w-full">
          <h1 className="sm:font-light text-theme-blue-100 text-3xl xs:text-4xl md:text-6xl 2xl:text-8xl ">
            Aluminum
          </h1>
          <h1 className="sm:font-light text-theme-blue-100 text-3xl xs:text-4xl md:text-6xl 2xl:text-8xl ">
            Machining Experts
          </h1>
          <p className="font-light text-theme-blue-100 mt-4 sm:mt-6 md:text-xl 2xl:w-2/5">
            Leading Edge Tooling Specializes in the Design, Manufacture and
            Re-Surfacing of Custom Aluminum Dies and Products.
          </p>
        </div>
      </div>

      <div className="relative h-auto w-full mt-20  2xl:mt-28 3xl:mt-72">
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
    </div>
  );
};

export default Hero;
