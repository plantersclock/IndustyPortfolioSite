import React from "react";
import LazyLoad from "react-lazyload";

const LazyImages = ({ images }) => {
  return (
    <>
      {images.map((image) => (
        <LazyLoad key={image}>
          <img
            src={image}
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
