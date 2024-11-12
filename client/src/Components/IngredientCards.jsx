import { Link } from "react-router-dom";

function IngredientCards() {
  return (
    <div className="py-10 bg-[#1f2937]">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12 mx-auto">
        {/* Category Card */}
        <Link to="/category" className="group">
          <div className="relative border-2 border-gray-300 h-56 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-60"></div>
            <p className="absolute bottom-6 left-6 text-white text-lg font-semibold z-10 group-hover:text-yellow-400 transition-colors">
              Search Food by Category
            </p>
            <img
              src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"
              alt="Food Category"
              className="h-full w-full object-cover"
            />
          </div>
        </Link>

        {/* Other Cards */}
        <Link to="/area" className="group">
          <div className="relative border-2 border-gray-300 h-56 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-60"></div>
            <p className="absolute bottom-6 left-6 text-white text-lg font-semibold z-10 group-hover:text-yellow-400 transition-colors">
              Search Food by Area
            </p>
            <img
              src="https://cdn.pixabay.com/photo/2022/06/27/05/38/spices-7286739_1280.jpg"
              alt="Food Area"
              className="h-full w-full object-cover"
            />
          </div>
        </Link>

        <Link to="/breakfast" className="group">
          <div className="relative border-2 border-gray-300 h-56 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-60"></div>
            <p className="absolute bottom-6 left-6 text-white text-lg font-semibold z-10 group-hover:text-yellow-400 transition-colors">
              Search Breakfast
            </p>
            <img
              src="https://cdn.pixabay.com/photo/2016/11/18/14/39/beans-1834984_1280.jpg"
              alt="Breakfast"
              className="h-full w-full object-cover"
            />
          </div>
        </Link>

        <Link to="/vegetarian" className="group">
          <div className="relative border-2 border-gray-300 h-56 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105 bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400">
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-60"></div>
            <p className="absolute bottom-6 left-6 text-white text-lg font-semibold z-10 group-hover:text-yellow-400 transition-colors">
              Search Vegetarian
            </p>
            <img
              src="https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_1280.jpg"
              alt="Vegetarian"
              className="h-full w-full object-cover"
            />
          </div>
        </Link>

        <Link to="/dessert" className="group">
          <div className="relative border-2 border-gray-300 h-56 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105 bg-gradient-to-r from-pink-400 via-red-400 to-purple-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-60"></div>
            <p className="absolute bottom-6 left-6 text-white text-lg font-semibold z-10 group-hover:text-yellow-400 transition-colors">
              Search Dessert
            </p>
            <img
              src="https://cdn.pixabay.com/photo/2016/11/21/16/59/baked-goods-1846460_1280.jpg"
              alt="Dessert"
              className="h-full w-full object-cover"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default IngredientCards;
