import React, { useEffect, useState } from "react";
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

  const getVisibleIndexes = (index) => {
    const leftIndex = index === 0 ? recipes.length - 1 : index - 1;
    const rightIndex = index === recipes.length - 1 ? 0 : index + 1;
    return { leftIndex, rightIndex, centerIndex: index };
  };

  const { leftIndex, rightIndex, centerIndex } = getVisibleIndexes(showRecipe);

  return (
    <div className="h-screen w-full mt-24 flex items-center justify-center bg-gray-900 text-gray-200 p-4">
      <div className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto relative">
        <div className="flex flex-col items-center mb-12 text-center">
          <h5 className="text-lg text-yellow-500 uppercase tracking-widest">
            Most Loved Recipes
          </h5>
          <h2 className="text-3xl font-extrabold text-yellow-500 mt-2 mb-6">
            Our Clients' Favorites
          </h2>
        </div>

        <div className="relative flex items-center justify-between w-full">
          {/* Left Arrow */}
          <AiOutlineArrowLeft
            onClick={() => handleArrow("left")}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-5xl text-yellow-500 bg-gray-800 bg-opacity-80 rounded-full p-3 cursor-pointer z-10 hover:bg-yellow-500 hover:text-gray-800 transition duration-300"
          />

          {/* Images */}
          <div className="flex items-center justify-center w-full space-x-4">
            {/* Left Image */}
            <div className="w-1/3 transition-transform duration-500 transform hover:scale-105">
              <img
                src={recipes[leftIndex]?.strMealThumb}
                alt={recipes[leftIndex]?.strMeal}
                className="object-cover h-56 w-full opacity-60 rounded-lg shadow-lg"
              />
            </div>

            {/* Center Image (Pop effect) */}
            <div className="w-1/3 transition-transform duration-500 transform scale-110 relative">
              <img
                src={recipes[centerIndex]?.strMealThumb}
                alt={recipes[centerIndex]?.strMeal}
                className="object-cover h-80 w-full rounded-lg shadow-2xl border-4 border-yellow-500"
              />
              <h3 className="absolute bottom-4 left-4 bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg shadow-lg font-bold text-lg">
                {recipes[centerIndex]?.strMeal}
              </h3>
            </div>

            {/* Right Image */}
            <div className="w-1/3 transition-transform duration-500 transform hover:scale-105">
              <img
                src={recipes[rightIndex]?.strMealThumb}
                alt={recipes[rightIndex]?.strMeal}
                className="object-cover h-56 w-full opacity-60 rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <AiOutlineArrowRight
            onClick={() => handleArrow("right")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-5xl text-yellow-500 bg-gray-800 bg-opacity-80 rounded-full p-3 cursor-pointer z-10 hover:bg-yellow-500 hover:text-gray-800 transition duration-300"
          />
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {recipes?.map((_, index) => (
            <div
              key={index}
              onClick={() => setShowRecipe(index)}
              className={`h-4 w-4 rounded-full cursor-pointer transition duration-300 ${
                showRecipe === index ? "bg-yellow-500" : "bg-gray-600"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouriteFoods;
