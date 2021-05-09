import "./App.css";
import React, { useState, Suspense } from "react";
import Hero from "./modules/hero";
import ContactButton from "./modules/contactbutton";

const ProductServices = React.lazy(() => import("./modules/productservices"));
const Guarantee = React.lazy(() => import("./modules/guarantee"));
const Contact = React.lazy(() => import("./modules/contact"));
const AboutUs = React.lazy(() => import("./modules/aboutus/AboutUs"));

function App() {
  const [contactButtonState, setContactButtonState] = useState("hidden");
  return (
    <div className="bg-theme-blue-100">
      <Hero setContactButtonState={setContactButtonState} />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductServices />

        <Guarantee />

        <Contact setContactButtonState={setContactButtonState} />

        <AboutUs />
      </Suspense>
      <ContactButton displayState={contactButtonState} />
    </div>
  );
}

export default App;
