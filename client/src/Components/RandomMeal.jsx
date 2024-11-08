import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RandomMeal = () => {
  const URL_RANDOM_MEAL = "https://www.themealdb.com/api/json/v1/1/random.php";
  const [randomMeal, setRandomMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch a random meal on component load
  useEffect(() => {
    const fetchRandomMeal = async () => {
      setLoading(true);
      try {
        const response = await axios.get(URL_RANDOM_MEAL);
        setRandomMeal(response.data.meals ? response.data.meals[0] : null);
      } catch (error) {
        console.error("Error fetching random meal:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRandomMeal();
  }, []);

  return (
    <div className="min-h-screen bg-[#111827]">
      <div className="relative text-center py-12 bg-[#1f2937]">
        <h5 className="text-2xl text-[#d79734] mt-4">Random Meal Idea</h5>
        <h2 className="text-3xl text-[#bc8738] mt-4">
          Surprise Your Taste Buds!
        </h2>
      </div>

      {/* Loading Animation */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        // Random Meal Section
        randomMeal && (
          <div className="w-11/12 mx-auto mt-12 flex justify-center">
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 transform hover:scale-105 hover:shadow-lg">
              <Link
                to={`/recipe/${randomMeal.idMeal}`}
                className="w-full h-52 overflow-hidden rounded-t-lg"
              >
                <img
                  src={randomMeal.strMealThumb}
                  alt={randomMeal.strMeal}
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="p-3">
                <h4 className="text-md font-semibold text-[#d79734]">
                  {randomMeal.strMeal}
                </h4>
                <p className="text-gray-500 text-sm">Click to view recipe</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default RandomMeal;
