import React from "react";
import SimpleMap from "./SimpleMap";

const BusinessInfo = () => {
  return (
    <div className="col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 pt-8 h-full text-theme-blue-500">
      <div className="col-span-1">
        <h2 className="text-2xl lg:text-4xl">Address</h2>
        <p className="lg:text-xl mt-4 text-theme-blue-900 font-light">
          1840 Country Line Road #103
          <br />
          Huntingdon Valley, PA 19006
        </p>

        <div className="block sm:hidden lg:block w-full lg:w-4/5 mr-4 lg:mr-12 mt-12">
          <SimpleMap />
        </div>

        <h2 className="text-2xl lg:text-4xl mt-12">Hours</h2>
        <div className="grid grid-cols-3 md:text-xl mt-4 text-theme-blue-900">
          <p className="col-span-1 font-medium">Mon:</p>
          <p className="col-span-2 font-light">8:00am - 5:00pm</p>
          <p className="col-span-1 font-medium">Tues:</p>
          <p className="col-span-2 font-light">8:00am - 5:00pm</p>
          <p className="col-span-1 font-medium">Wed:</p>
          <p className="col-span-2 font-light">8:00am - 5:00pm</p>
          <p className="col-span-1 font-medium">Thur:</p>
          <p className="col-span-2 font-light">8:00am - 5:00pm</p>
          <p className="col-span-1 font-medium">Fri:</p>
          <p className="col-span-2 font-light">8:00am - 5:00pm</p>
          <p className="col-span-1 font-medium">Sat:</p>
          <p className="col-span-2 font-light">Appointment only</p>
          <p className="col-span-1 font-medium">Sun:</p>
          <p className="col-span-2 font-light">Closed</p>
        </div>
      </div>

      <div className="hidden sm:flex lg:hidden col-span-1 h-full justify-center mr-12">
        <SimpleMap />
      </div>
    </div>
  );
};

export default BusinessInfo;
