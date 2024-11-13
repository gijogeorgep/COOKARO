import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const FavouriteFoods = () => {
  const URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=rice";
  const [recipes, setRecipes] = useState([]);
  const [showRecipe, setShowRecipe] = useState(0);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setRecipes(data.meals);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipes();
  }, []);

  const handleArrow = (direction) => {
    if (direction === "left") {
      setShowRecipe(showRecipe === 0 ? recipes.length - 1 : showRecipe - 1);
    }
    if (direction === "right") {
      setShowRecipe(showRecipe === recipes.length - 1 ? 0 : showRecipe + 1);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative bg-cover bg-center bg-fixed bg-no-repeat text-gray-200 p-6"
      style={{
        backgroundImage: `url("https://cpmgsandiego.com/wp-content/uploads/2018/03/Family-Cooking.jpg")`,
      }}
    >
      {/* Darkened overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md lg:max-w-2xl mx-auto text-center">
        <div className="mb-10">
          <h5 className="text-base md:text-lg text-yellow-400 uppercase tracking-wide">
            Most Loved Recipes
          </h5>
          <h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 mt-2 mb-4">
            Our Clients' Favorites
          </h2>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <AiOutlineArrowLeft
            onClick={() => handleArrow("left")}
            className="absolute left-0 md:left-2 top-1/2 transform -translate-y-1/2 text-3xl md:text-4xl text-yellow-400 bg-gray-900 rounded-full p-2 cursor-pointer z-10 hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
          />

          {/* Center Recipe Card */}
          <div className="w-80 md:w-96 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-500">
            <img
              src={recipes[showRecipe]?.strMealThumb}
              alt={recipes[showRecipe]?.strMeal}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-yellow-400">
                {recipes[showRecipe]?.strMeal}
              </h3>
              <p className="text-gray-300 mt-2">
                Delicious rice-based meal loved by our clients.
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <AiOutlineArrowRight
            onClick={() => handleArrow("right")}
            className="absolute right-0 md:right-2 top-1/2 transform -translate-y-1/2 text-3xl md:text-4xl text-yellow-400 bg-gray-900 rounded-full p-2 cursor-pointer z-10 hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
          />
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {recipes?.map((_, index) => (
            <div
              key={index}
              onClick={() => setShowRecipe(index)}
              className={`h-3 w-3 md:h-4 md:w-4 rounded-full cursor-pointer transition duration-300 ${
                showRecipe === index ? "bg-yellow-400" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouriteFoods;
