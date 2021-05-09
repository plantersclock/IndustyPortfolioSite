import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LazyLoad from "react-lazyload";

const ProductSection = ({
  image,
  title,
  desc,
  color,
  alignment,
  text,
  extraMargin,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ delay: 40 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const rightVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };
  const leftVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };
  return (
    <div className="relative z-20 h-full w-full">
      <div className={(color && color) + " relative z-20 bg-opacity-80 w-full"}>
        <div
          className={
            "flex max-w-7xl mx-auto px-6 lg:px-8 xl:px-20 2xl:px-8 py-20 2xl:py-24 3xl:py-32 " +
            (alignment === "right" && "justify-end text-right")
          }
        >
          <div className="sm:w-1/2 xl:w-1/3">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={alignment === "right" ? rightVariant : leftVariant}
            >
              <h1
                className={(text && text) + " font-medium text-3xl sm:text-5xl"}
              >
                {title}
              </h1>

              <p
                ref={ref}
                className={
                  (text && text) + ` sm:text-xl mt-2 md:mt-4 ${extraMargin}`
                }
              >
                {desc}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <LazyLoad offset={300}>
        <div
          style={{
            backgroundImage: `url(${image})`,
            animation: "fadein .5s",
          }}
          className="absolute z-10 top-0 h-full w-full bg-cover"
        ></div>
      </LazyLoad>
    </div>
  );
};

export default ProductSection;
