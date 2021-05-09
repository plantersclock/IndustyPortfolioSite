import React from "react";

const Header = ({ title, textColor, bgColor }) => {
  return (
    <div className={bgColor && bgColor}>
      <div className=" max-w-7xl mx-auto px-6 lg:px-8 py-12 xs:py-20 lg:py-32">
        <h2
          className={
            (textColor && textColor) +
            " font-medium text-4xl md:text-5xl w-full border-b-2 pb-4 border-theme-blue-500"
          }
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Header;
