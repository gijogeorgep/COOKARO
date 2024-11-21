import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const URL_CATEGORIES =
    "https://www.themealdb.com/api/json/v1/1/categories.php";
  const URL_RECIPES = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories on component load
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch(URL_CATEGORIES);
        const data = await response.json();
        setCategories(data.categories.slice(0, 9));
        if (data.categories.length > 0) {
          setActiveCategory(data.categories[0].strCategory);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Fetch recipes based on the active category
  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const apiUrl = `${URL_RECIPES}${activeCategory}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setRecipes(data.meals ? data.meals.slice(0, 12) : []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };
    if (activeCategory) fetchRecipes();
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#111827]">
      <div className="relative text-center py-12 bg-[#1f2937]">
        <h5 className="text-2xl text-[#d79734] mt-4">Pick a category</h5>
        <h2 className="text-3xl text-[#bc8738] mt-4">Choose what suits you</h2>
      </div>

      {/* Categories Section */}
      <div className="w-11/12 mx-auto mt-12">
        <div className="flex flex-wrap justify-center">
          {categories.map((category) => (
            <div
              key={category.idCategory}
              onClick={() => setActiveCategory(category.strCategory)}
              className={`py-2 px-4 border rounded-2xl cursor-pointer m-2 transition duration-200 ${
                activeCategory === category.strCategory
                  ? "bg-[#d79734] text-white font-semibold border-[#d79734] transform scale-105"
                  : "bg-[#1f2937] text-blue-200"
              }`}
            >
              {category.strCategory}
            </div>
          ))}
        </div>
      </div>

      {/* Loading Animation */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        // Recipes Section
        <div className="w-11/12 mx-auto mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
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

export default Categories;
