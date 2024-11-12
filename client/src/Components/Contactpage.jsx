// import React from "react";
import chef2 from "../assets/chef2.png";

const ContactPage = () => {
  return (
    <div className="relative bg-[#1f2937] min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Background image with reduced opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?t=st=1729843596~exp=1729847196~hmac=886c2682fe6ff90186826b43e18e72dc64ca80855a915416786f4ea49a40de37&w=1060')`,
          opacity: 0.3,
          zIndex: 0,
        }}
      ></div>

      <img src={chef2} alt="" className="w-60 h-60 " />

      {/* Content container */}
      <div className="relative bg-white bg-opacity-90 shadow-md rounded-lg w-full max-w-xl p-6 z-10">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Have any questions or feedback? Reach out to us below.
        </p>

        <form className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#111827] text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Or contact us via email:{" "}
            <a
              href="mailto:support@cookkaro.com"
              className="text-blue-500 underline"
            >
              support@cookkaro.com
            </a>
          </p>
          <p className="text-gray-600 mt-1">Phone: +91-9778230292</p>
          <p className="text-gray-600 mt-1">Address: kozhikode,westhil</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
