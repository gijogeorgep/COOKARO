import React from "react";
import chef2 from "../assets/chef2.png";
import chef3 from "../assets/chef3.png";
import chef4 from "../assets/chef4.png";

function ChefCards() {
  return (
    <div className="p-8 bg-[#111827]">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-white">
        Meet Our Top Chefs
      </h1>
      <div className="flex flex-wrap justify-center gap-12 p-4">
        {/* Card 1 */}
        <div className="relative w-80 h-80 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200 bg-white">
          <img src={chef2} alt="Chef" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent text-white w-full text-center p-6">
            <h2 className="text-xl font-bold">Chef Darwin</h2>
            <p className="text-sm mt-1">
              Known for his bold flavors and innovative fusion dishes, Darwin
              brings excitement to every plate.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-80 h-80 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200 bg-white">
          <img src={chef3} alt="Chef" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent text-white w-full text-center p-6">
            <h2 className="text-xl font-bold">Chef Johny Mike</h2>
            <p className="text-sm mt-1">
              Specializing in timeless classics, Johny crafts every dish with
              passion and finesse, bringing comfort and elegance together.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative w-80 h-80 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200 bg-white">
          <img src={chef4} alt="Chef" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent text-white w-full text-center p-6">
            <h2 className="text-xl font-bold">Chef Merin</h2>
            <p className="text-sm mt-1">
              With a knack for surprising flavor twists, Merin crafts culinary
              masterpieces that are a treat for the senses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChefCards;
