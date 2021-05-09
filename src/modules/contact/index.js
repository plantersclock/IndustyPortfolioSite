import React, { useEffect } from "react";
import ContactForm from "./components/ContactForm";
import BusinessInfo from "./components/BusinessInfo";
import { useInView } from "react-intersection-observer";

const Contact = ({ setContactButtonState }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) {
      setContactButtonState("visible");
    }
    if (inView) {
      setContactButtonState("hidden");
    }
  }, [inView, setContactButtonState]);
  return (
    <div className="h-full ">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-4 max-w-7xl  mx-auto  lg:px-8 xl:px-20 2xl:px-8">
        <div className="w-full px-6 sm:px-6">
          <BusinessInfo />
        </div>
        <div className="col-span-2 " ref={ref}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
