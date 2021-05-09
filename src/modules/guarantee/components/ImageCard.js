import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const ImageCard = ({ image, title, desc, delay }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const downVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: delay },
    },
  };

  return (
    <>
      {/* When Screen is LARGE */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={downVariant}
        className="relative hidden lg:block col-span-1 bg-cover"
        style={{
          backgroundImage: `url(${image})`,
          paddingTop: "150%",
          clipPath: "polygon(0 75%, 50% 100%, 100% 75%, 100% 0, 0 0)",
        }}
      >
        <div className="absolute top-0 bg-theme-blue-700 bg-opacity-80 w-full h-full flex justify-center p-12">
          <div className="flex flex-col text-center items-center">
            <h2 className="text-4xl font-bold text-theme-blue-100">{title}</h2>
            <div
              ref={ref}
              className="border-t-2 my-8 w-20 border-theme-orange-500"
            ></div>
            <p className="text-lg font-medium text-theme-blue-100">{desc}</p>
          </div>
        </div>
      </motion.div>

      {/* When Screen is SMALL */}
      <div className="relative lg:hidden">
        <div className=" relative z-40 bg-theme-blue-700 bg-opacity-80 w-full h-full md:h-96 flex justify-center p-12 sm:p-8">
          <div className="flex flex-col text-center items-center">
            <h2 className="text-3xl font-bold text-theme-blue-100">{title}</h2>
            <div className="border-t-2 my-8 md:my-4 w-20 border-theme-orange-500"></div>
            <p className="text-base font-medium text-theme-blue-100 sm:px-8 md:px-0">
              {desc}
            </p>
          </div>
        </div>
        <div
          className="absolute z-10 top-0 h-full w-full col-span-1 h-96 lg:hidden bg-cover"
          style={{
            backgroundImage: `url(${image})`,

            // clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 100%, 0 100%)",
          }}
        ></div>
      </div>
    </>
  );
};

export default ImageCard;