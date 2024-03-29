import React, { useEffect } from "react";
import symbol from "../common/images/LeadingEdgeSymbol.webp";
import Gallery from "../gallery";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LazyLoad from "react-lazyload";

const AboutUs = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    // if (!inView) {
    //   controls.start("hidden");
    // }
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const appearVariant = {
    hidden: { opacity: 0, scale: 0.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="relative overflow-hidden">
      <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 xl:px-20 2xl:px-8 py-20 2xl:py-32 text-theme-blue-900 md:text-2xl font-light md:leading-9">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={appearVariant}
          className="text-center md:text-left text-3xl lg:text-4xl mb-12 font-medium inline-block"
        >
          Long ago, in a tool shed far, far away...
        </motion.h2>
        <p className="mb-8">
          Industry Site Tooling started in 1987. Just one guy and a milling
          machine in a basement, saying "yes" when he was offered an
          opportunity. From that low-key beginning, we've grown up and out. But
          we never lost our drive to say "yes" whenever opportunity comes our
          way.
        </p>
        <p className="mb-8">
          Our goals are the same as they were 32 years ago:
        </p>
        <ul className="list-disc ml-4 md:ml-6">
          <li>To help you solve your problems</li>
          <li>To get you what you need, as soon as you need it</li>
          <li>To communicate clearly, completely, and quickly</li>
        </ul>
        <p className="mt-8">And we've been woman-owned since 2019!</p>
      </div>
      <LazyLoad offset={500}>
        <img
          src={symbol}
          alt="..."
          className="hidden sm:block absolute z-30 -mt-96 -right-96 2xl:mb-20 2xl:-right-20 opacity-10"
        />
      </LazyLoad>
      <Gallery />
    </div>
  );
};

export default AboutUs;
