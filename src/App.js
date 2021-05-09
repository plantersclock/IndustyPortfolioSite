import "./App.css";
import Hero from "./modules/hero";
import ProductServices from "./modules/productservices";
import Guarantee from "./modules/guarantee";
import Contact from "./modules/contact";
import AboutUs from "./modules/aboutus/AboutUs";
import ContactButton from "./modules/contactbutton";
import { useState } from "react";

function App() {
  const [contactButtonState, setContactButtonState] = useState("hidden");
  return (
    <div className="bg-theme-blue-100">
      <Hero setContactButtonState={setContactButtonState} />
      <ProductServices />
      <Guarantee />
      <Contact setContactButtonState={setContactButtonState} />
      <AboutUs />
      <ContactButton displayState={contactButtonState} />
    </div>
  );
}

export default App;
