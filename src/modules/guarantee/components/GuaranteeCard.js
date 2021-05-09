import React from "react";

const GuaranteeCard = () => {
  return (
    <div className="relative lg:flex-1 lg:h-full flex items-center justify-center text-center">
      <svg
        className="hidden lg:h-full lg:block lg:w-full"
        viewBox="0 0 349 514"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 514V120.711L176.018 8L343 120.711V514"
          stroke="#F1F7FF"
          stroke-width="12"
        />
      </svg>
      <svg
        className="hidden xs:block lg:h-full lg:hidden lg:w-full"
        viewBox="0 0 639 349"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M639 343L148.555 343L8 172.982L148.555 6L639 6"
          stroke="#F1F7FF"
          stroke-width="12"
        />
      </svg>

      <div className="xs:absolute flex lg:flex-col items-center justify-center lg:top-0 lg:flex w-full lg:h-full grid grid-cols-12">
        <div className="lg:mt-12 hidden lg:block">PRETEND THIS IS</div>
        <div className="xs:col-span-3 lg:hidden"></div>
        <div className="my-4 xs:my-0 sm:mr-12 md:mr-40 lg:mr-0 col-span-12 xs:col-span-9 lg:col-span-12 lg:mt-12 lg:px-8 2xl:px-10 3xl:px-20 flex flex-col lg:justify-center lg:items-center text-left lg:text-center">
          <h2 className=" text-theme-blue-900 text-xl sm:text-3xl lg:text-4xl font-medium">
            Accuracy
          </h2>
          <div className="border-t-2 mt-2 sm:mt-6 w-20 border-theme-blue-500"></div>
          <p className="mt-2 sm:mt-4 lg:mt-8 text-theme-blue-900 text-sm sm:text-lg lg:text-xl">
            Do you have special requirements? Do you need assistance refining
            your designs? We meet your needs so that you can fill your
            customer's orders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeCard;
