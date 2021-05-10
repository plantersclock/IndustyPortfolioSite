import React from "react";

import ProductSection from "./components/ProductSection";

const ProductServices = () => {
  return (
    <div className="w-full">
      {/* <Header
        textColor="text-theme-blue-900"
        bgColor="bg-theme-blue-100"
        title="Product & Services"
      /> */}
      <ProductSection
        image="https://res.cloudinary.com/mpwcloud/image/upload/c_scale,f_auto,q_auto,w_1440/v1620583770/IndustryWebsite/AluminumDies.png"
        offset={400}
        alignment="left"
        title="Aluminum Dies"
        text="text-theme-blue-900"
        color="bg-theme-blue-200"
        desc="We will die for you. No, really. Aluminum dies are our specialty. Large, small, medical, food: we make them all."
      />
      <ProductSection
        image="https://res.cloudinary.com/mpwcloud/image/upload/c_scale,f_auto,q_auto,w_1440/v1620583770/IndustryWebsite/ReSurfacing.png"
        offset={400}
        alignment="right"
        color="bg-theme-blue-700"
        text="text-theme-blue-100"
        title="Re-Surfacing"
        desc="Need a tolerance adjusted? Did a product fail in validation? We can re-surface dies to bring them back into alignment. Contact us."
      />
      <ProductSection
        image="https://res.cloudinary.com/mpwcloud/image/upload/c_scale,f_auto,q_auto,w_1440/v1620583770/IndustryWebsite/AluminumAnything.png"
        offset={800}
        alignment="left"
        title="Aluminum... Anything"
        color="bg-theme-blue-200"
        text="text-theme-blue-900"
        desc="We like aluminum projects. We have a shop full of equipment waiting for yours. We're ready to make your idea reality. Send us a design."
        extraMargin="mb-44"
      />
    </div>
  );
};

export default ProductServices;
