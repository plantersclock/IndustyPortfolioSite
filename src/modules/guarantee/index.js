import React from "react";

import ImageCard from "./components/ImageCard";

const Guarantee = () => {
  return (
    <div className="w-full">
      {/* <Header textColor="text-theme-blue-900" title="Why Leading Edge" /> */}
      {/* <h2 className="mt-12 xs:mt-20 mb-20 max-w-7xl mx-auto px-6 lg:px-8 text-5xl text-theme-blue-900">
        Why Leading Edge?
      </h2> */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 -mt-44
        max-w-7xl mx-auto px-6 lg:px-8 xl:px-20 2xl:px-8 mb-12 xs:mb-20 lg:mb-32"
      >
        <div className="">
          <ImageCard
            image="https://res.cloudinary.com/mpwcloud/image/upload/c_scale,f_auto,g_center,q_auto,w_800/v1620583770/IndustryWebsite/Accuracy.jpg"
            delay={1}
            title="Accuracy"
            desc="Do you have special requirements? Do you need assistance refining
              your designs? We meet your needs so that you can fill your
              customer's orders."
          />
        </div>
        <div className="">
          <ImageCard
            delay={1.5}
            image="https://res.cloudinary.com/mpwcloud/image/upload/c_scale,f_auto,g_center,q_auto,w_800/v1620583770/IndustryWebsite/Speed.jpg"
            title="Speed"
            desc="We can turn your project around quickly, often within 48 hours.
            If you're in panic-mode, contact us. We have shipped dies in 1 day:
            designed, machined, shipped, and making pouches the next day."
          />
        </div>
        <div className="">
          <ImageCard
            delay={2}
            image="https://res.cloudinary.com/mpwcloud/image/upload/c_scale,f_auto,g_center,q_auto,w_800/v1620583770/IndustryWebsite/Size.jpg"
            title="Scale"
            desc={`We make all size dies. We've made them as small as 2" x 3" and up to 36" x 70". Front and back tooling, in a variety of thicknesses and configurations.`}
          />
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
