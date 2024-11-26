import { Link } from "react-router-dom";

function IngredientCards() {
  return (
    <div id="ingredient" className="py-16 bg-gray-900">
      {/* Introduction Section */}
      <div className="text-center text-white mb-12 w-11/12 mx-auto bg-transparent p-6 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-500 mb-4">
          Discover Delicious Recipes
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Explore a variety of food categories, areas, and meal types that suit
          your taste. From breakfast delights to mouth-watering desserts, we
          have got something for everyone. Start your culinary adventure today!
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12 mx-auto justify-items-center">
        {/* Card Component */}
        {[
          {
            title: "Search Food by Category",
            img: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg",
            link: "/category",
          },
          {
            title: "Search Food by Area",
            img: "https://cdn.pixabay.com/photo/2022/06/27/05/38/spices-7286739_1280.jpg",
            link: "/area",
          },
          {
            title: "Search Breakfast",
            img: "https://cdn.pixabay.com/photo/2016/11/18/14/39/beans-1834984_1280.jpg",
            link: "/breakfast",
          },
          {
            title: "Search Vegetarian",
            img: "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_1280.jpg",
            link: "/vegetarian",
          },
          {
            title: "Search Dessert",
            img: "https://cdn.pixabay.com/photo/2016/11/21/16/59/baked-goods-1846460_1280.jpg",
            link: "/dessert",
          },
        ].map((card, index) => (
          <Link to={card.link} className="group" key={index}>
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 bg-white">
              <img
                src={card.img}
                alt={card.title}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-50"></div>
              <div className="absolute bottom-0 w-full bg-gray-800 bg-opacity-80 text-white p-4 text-center">
                <p className="text-lg font-semibold">{card.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default IngredientCards;
