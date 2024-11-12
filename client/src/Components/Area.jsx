import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Area = () => {
  const URL_AREAS = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
  const URL_AREA_RECIPES =
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=";

  const [areas, setAreas] = useState([]);
  const [activeArea, setActiveArea] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAreas = async () => {
      setLoading(true);
      try {
        const response = await fetch(URL_AREAS);
        const data = await response.json();
        setAreas(data.meals.slice(0, 11).map((meal) => meal.strArea));
        setActiveArea(data.meals[0].strArea);
      } catch (error) {
        console.error("Error fetching areas:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAreas();
  }, []);

  useEffect(() => {
    if (!activeArea) return;
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${URL_AREA_RECIPES}${activeArea}`);
        const data = await response.json();
        setRecipes(data.meals?.slice(0, 12) || []);
      } catch (error) {
        console.error("Error fetching area recipes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [activeArea]);

  return (
    <div className="min-h-screen bg-[#111827]">
      <header className="text-center py-12 bg-[#1f2937]">
        <h5 className="text-2xl text-[#d79734]">Select an Area</h5>
        <h2 className="text-3xl text-[#bc8738] mt-4">
          Explore Cuisine by Region
        </h2>
      </header>

      <div className="w-11/12 mx-auto mt-12">
        <div className="flex flex-wrap justify-center">
          {areas.map((area) => (
            <button
              key={area}
              onClick={() => setActiveArea(area)}
              className={`py-2 px-4 border rounded-lg cursor-pointer m-2 transition duration-200 ${
                activeArea === area
                  ? "bg-[#d79734] text-white font-semibold border-[#d79734] transform scale-105"
                  : "bg-[#1f2937] text-blue-200"
              }`}
            >
              {area}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="w-11/12 mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.idMeal}
              to={`/recipe/${recipe.idMeal}`}
              className="flex flex-col items-center text-center bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-52 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h4 className="text-md font-semibold text-[#d79734]">
                  {recipe.strMeal}
                </h4>
                <p className="text-gray-500 text-sm">Click to view recipe</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Area;
