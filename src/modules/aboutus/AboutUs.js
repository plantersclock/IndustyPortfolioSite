import React from "react";
import symbol from "../common/images/LeadingEdgeSymbol.webp";
import Gallery from "../gallery";

const AboutUs = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 xl:px-20 2xl:px-8 py-20 2xl:py-32 text-theme-blue-900 md:text-2xl font-light md:leading-9">
        <h2 className="text-3xl lg:text-4xl mb-12 font-medium ">
          Long ago, in a tool shed far, far away...
        </h2>
        <p className="mb-8">
          Leading Edge Tooling started in 1987. Just one guy and a milling
          machine in a basement, saying "yes" when he was offered an
          opportunity. From that low-key beginning, we've grown up and out. But
          we never lost our drive to say "yes" whenever opportunity comes our
          way.
        </p>
        <p className="mb-8">
          Our goals are the same as they were 32 years ago:
        </p>
        <li>To help you solve your problems</li>
        <li>To get you what you need, as soon as you need it</li>
        <li>To communicate clearly, completely, and quickly</li>
        <p className="mt-8">And we've been woman-owned since 2019!</p>
      </div>
      <img
        src={symbol}
        alt="..."
        className="absolute z-30  -mt-96 -right-96 2xl:mb-20 2xl:-right-20 opacity-10"
      />
      <Gallery />
    </div>
  );
};

export default AboutUs;
