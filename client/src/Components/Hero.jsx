import heroimg from "../assets/hero_img_4.png";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-60px)] w-full bg-gradient-to-b from-[#0f172a] to-[#1e293b] flex items-center">
      <div className="h-full w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex flex-col md:w-1/2 text-center md:text-left animate-fade-in-down flex-grow">
          <h2 className="text-[#fbbf24] text-4xl md:text-5xl font-extrabold leading-tight tracking-wide">
            Ready to Cook <br /> with Ease?
          </h2>

          <h5 className="tracking-wide mt-3 text-[#f59e0b] text-2xl md:text-3xl font-semibold animate-fade-in-right">
            Discover Simple, Delicious Recipes
          </h5>
          <p className="tracking-wide text-lg font-medium mt-4 text-orange-400 animate-fade-in-left">
            Perfect for beginners and food lovers alike!
          </p>

          <p className="tracking-wide mt-2 text-gray-300 text-lg font-medium animate-fade-in-up">
            Start your cooking journey with easy-to-follow recipes and tasty
            results every time.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 animate-fade-in-up">
            <button className="px-5 py-3 bg-[#f59e0b] text-white rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-white hover:text-[#f59e0b] hover:scale-105 transform">
              <a href="#chef">Meet Our Chefs</a>
            </button>

            <button className="px-5 py-3 bg-gray-200 text-[#f59e0b] rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-[#f59e0b] hover:text-white hover:scale-105 transform">
              <a href="#ingredient">Browse Recipes</a>
            </button>
          </div>
        </div>

        {/* Right Section (Hero Image) */}
        <div className="relative h-[300px] w-full md:w-[600px] md:h-[500px] mt-6 md:mt-0">
          <img
            src={heroimg}
            alt="Main meal"
            className="object-contain h-full w-full px-1 rounded-lg md:mt-16  transform transition-transform duration-500 hover:scale-105 "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
