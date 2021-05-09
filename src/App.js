import "./App.css";
import Hero from "./modules/hero";
import ProductServices from "./modules/productservices";
import Guarantee from "./modules/guarantee";
import Contact from "./modules/contact";
import AboutUs from "./modules/aboutus/AboutUs";
import ContactButton from "./modules/contactbutton";
import { useState } from "react";
import LazyLoad from "react-lazyload";

function App() {
  const [contactButtonState, setContactButtonState] = useState("hidden");
  return (
    <div className="bg-theme-blue-100">
      <Hero setContactButtonState={setContactButtonState} />
      <LazyLoad offset={50}>
        <ProductServices />
      </LazyLoad>
      <LazyLoad offset={50}>
        <Guarantee />
      </LazyLoad>
      <LazyLoad offset={50}>
        <Contact setContactButtonState={setContactButtonState} />
      </LazyLoad>
      <LazyLoad offset={50}>
        <AboutUs />
      </LazyLoad>

      <ContactButton displayState={contactButtonState} />
    </div>
  );
}

export default App;
