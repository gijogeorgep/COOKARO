import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchRecipes = async () => {
      const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setRecipes(data.meals || []);
        setLoading(false);
      } catch (error) {
        setError("Failed to load recipes.");
        setLoading(false);
      }
    };

    if (query) {
      fetchRecipes();
    }
  }, [query]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-[#1f2937] text-white">
      <div className="text-center py-12 bg-[#374151]">
        <h2 className="text-3xl">Search Results for "{query}"</h2>
      </div>

      <div className="w-11/12 mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div
              key={recipe.idMeal}
              className="bg-gray-800 rounded-lg shadow-lg p-4"
            >
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="rounded-lg w-full h-48 object-cover"
              />
              <h4 className="text-xl font-semibold mt-4">{recipe.strMeal}</h4>
              <p className="text-gray-400 mt-2">
                Category: {recipe.strCategory}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center col-span-full">
            <p>No results found for "{query}".</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
