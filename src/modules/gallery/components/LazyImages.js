import React from "react";
import LazyLoad from "react-lazyload";

const LazyImages = ({ images }) => {
  return (
    <>
      {images.map((image) => (
        <LazyLoad key={image}>
          <img
            src={`https://res.cloudinary.com/mpwcloud/image/upload/c_pad,f_auto,g_center,q_auto,w_800/v1620583770/IndustryWebsite/${image}`}
            alt="..."
            className="mt-4"
            style={{ animation: "fadein 1s" }}
          ></img>
        </LazyLoad>
      ))}
    </>
  );
};

export default LazyImages;
