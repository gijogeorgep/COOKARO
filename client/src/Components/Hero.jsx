import React from "react";
import heroimg from "../assets/hero_img_1.png"; // Ensure this path is correct

const Hero = () => {
  return (
    <div className="h-[calc(100vh-60px)] w-full mt-24 bg-[#111827]">
      <div className="h-full w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex flex-col md:w-1/2">
          <h2 className="mb-8 text-[#d49726] text-3xl md:text-4xl font-bold leading-[48px] tracking-wide animate-fade-in-down">
            Craving some <br /> delicious meals
          </h2>
          <h5 className="tracking-wide mt-4 mb-12 text-[#b9944f] text-2xl md:text-3xl font-bold animate-fade-in-right">
            Feeling the cooking vibe
          </h5>
          <p className="tracking-wide text-lg font-medium mb-6 text-orange-500 animate-fade-in-left">
            You've come to the right place for some tasty recipes
          </p>
          <p className="tracking-wide mb-12 text-gray-500 text-lg font-medium">
            Just see what we have for you
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up">
            <button className="px-4 py-2 bg-[#d49726] text-white rounded-md text-lg transition hover:bg-white hover:text-[#d49726] hover:scale-105 transform duration-300">
              Get Started
            </button>
            <button className="px-4 py-2 bg-gray-100 text-[#d49726] rounded-md text-lg transition hover:bg-[#d49726] hover:text-white hover:scale-105 transform duration-300">
              Explore recipes
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative h-[300px] w-full md:w-[600px] md:h-[500px] mt-6 md:mt-0">
          <img
            src={heroimg}
            alt="Main meal"
            className="object-contain h-full w-full rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
