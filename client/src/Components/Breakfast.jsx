import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Breakfast = () => {
  const URL_BREAKFAST =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast";
  const [breakfastRecipes, setBreakfastRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch breakfast recipes on component load
  useEffect(() => {
    const fetchBreakfastRecipes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(URL_BREAKFAST);
        setBreakfastRecipes(
          response.data.meals ? response.data.meals.slice(0, 12) : []
        );
      } catch (error) {
        console.error("Error fetching breakfast recipes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBreakfastRecipes();
  }, []);

  return (
    <div className="min-h-screen bg-[#111827]">
      <div className="relative text-center py-12 bg-[#1f2937]">
        <h5 className="text-2xl text-[#d79734] mt-4">Breakfast Ideas</h5>
        <h2 className="text-3xl text-[#bc8738] mt-4">Start Your Day Right</h2>
      </div>

      {/* Loading Animation */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        // Breakfast Recipes Section
        <div className="w-11/12 mx-auto mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {breakfastRecipes.map((recipe) => (
              <div
                key={recipe.idMeal}
                className="flex flex-col items-center text-center bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                <Link
                  to={`/recipe/${recipe.idMeal}`}
                  className="w-full h-52 overflow-hidden rounded-t-lg"
                >
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="h-full w-full object-cover"
                  />
                </Link>
                <div className="p-3">
                  <h4 className="text-md font-semibold text-[#d79734]">
                    {recipe.strMeal}
                  </h4>
                  <p className="text-gray-500 text-sm">Click to view recipe</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Breakfast;
