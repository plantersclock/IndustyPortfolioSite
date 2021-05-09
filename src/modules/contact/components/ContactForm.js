import React from "react";

const ContactForm = () => {
  return (
    <form
      id="contact-form-id"
      className="bg-theme-blue-900 pt-16 flex flex-col items-center w-full px-6 xs:px-8 sm:px-20 pb-32"
    >
      <h1 className="text-theme-blue-100 text-5xl">Contact Us</h1>
      <div className="w-20 border-theme-orange-500 border-t-2 my-4"></div>
      <div className="w-full">
        <label
          htmlFor="name"
          className="block font-medium text-xl text-theme-blue-100 mt-8"
        >
          Name
        </label>
        <div className="mt-1 w-full">
          <input
            type="text"
            name="name"
            id="name"
            className="shadow-sm focus:ring-theme-orange-500 h-12 text-lg focus:border-theme-orange-500 block w-full sm:text-lg border-gray-300 rounded-md"
            placeholder="John Smith"
          />
        </div>
        <label
          htmlFor="email"
          className="block font-medium text-xl text-theme-blue-100 mt-8"
        >
          Email
        </label>
        <div className="mt-1 w-full">
          <input
            type="text"
            name="email"
            id="email"
            className="shadow-sm focus:ring-theme-orange-500 h-12 text-lg focus:border-theme-orange-500 block w-full sm:text-lg border-gray-300 rounded-md"
            placeholder="you@example.com"
          />
        </div>
        <label
          htmlFor="message"
          className="block font-medium text-xl text-theme-blue-100 mt-8"
        >
          Message
        </label>
        <div className="mt-1 w-full mb-16">
          <textarea
            id="message"
            name="message"
            rows="3"
            autoComplete="off"
            className="shadow-sm block w-full focus:ring-theme-orange-500 focus:border-theme-orange-500 sm:text-lg border-gray-300 rounded-md"
            placeholder="Enter your message here. We can't wait to hear from you!"
          ></textarea>
        </div>
      </div>
      <button className="bg-theme-orange-500 p-4 text-theme-blue-100 font-medium md:text-2xl">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
