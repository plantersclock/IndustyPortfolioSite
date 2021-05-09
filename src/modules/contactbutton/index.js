import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

const ContactButton = ({ displayState }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(displayState);
  }, [controls, displayState]);

  const appearVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const anchor = document.querySelector("#contact-form-id");
  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={appearVariant}
      className="fixed z-60 right-6 bottom-6 md:right-20 md:bottom-20"
    >
      <button
        onClick={() => {
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        className="shadow-md bg-theme-orange-500 p-2 text-theme-blue-100 font-medium md:text-lg 2xl:p-4 2xl:text-xl rounded-2xl focus:outline-none"
      >
        Contact Us
      </button>
    </motion.div>
  );
};

export default ContactButton;
