import chef2 from "../assets/chef2.png";
import chef3 from "../assets/chef3.png";
import chef4 from "../assets/chef4.png";

function ChefCards() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative bg-cover bg-center bg-fixed bg-no-repeat text-gray-200 p-6"
      style={{
        backgroundImage: `url("https://images.ctfassets.net/szez98lehkfm/4w7RGCV3yGDj2mYxOO5yXA/440c72b3e289bc86ceb36eb03d6adef3/MyIC_Article116159?w=1106&h=622&fm=webp&fit=fill")`,
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-12 text-yellow-500">
          Meet Our Top Chefs
        </h1>
        <div className="flex flex-wrap justify-center gap-8 p-4">
          {/* Card 1 */}
          <div className="relative w-80 h-auto rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl bg-[#1f2937] border border-[#374151]">
            <img
              src={chef2}
              alt="Chef Darwin"
              className="w-full h-64 object-contain bg-white p-4"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-2">
                Chef Darwin
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Known for his bold flavors and innovative fusion dishes, Darwin
                brings excitement to every plate.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-80 h-auto rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl bg-[#1f2937] border border-[#374151]">
            <img
              src={chef3}
              alt="Chef Johny Mike"
              className="w-full h-64 object-contain bg-white p-4"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-2">
                Chef Johny Mike
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Specializing in timeless classics, Johny crafts each dish with
                passion, combining comfort and elegance.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-80 h-auto rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl bg-[#1f2937] border border-[#374151]">
            <img
              src={chef4}
              alt="Chef Merin"
              className="w-full h-64 object-contain bg-white p-4"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-2">
                Chef Merin
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Known for surprising flavor twists, Merin crafts culinary
                masterpieces that are a treat for the senses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChefCards;
