import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const RecipeDetails = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [numPeople, setNumPeople] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL_DETAILS = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${URL_DETAILS}${id}`);
        const data = response.data;
        if (data.meals) {
          setRecipe(data.meals[0]);
          const ingredientsList = [];
          const measuresList = [];
          Object.keys(data.meals[0]).forEach((key) => {
            if (key.includes("strIngredient") && data.meals[0][key] !== "") {
              ingredientsList.push(data.meals[0][key]);
            }
            if (key.includes("strMeasure") && data.meals[0][key] !== "") {
              measuresList.push(data.meals[0][key]);
            }
          });
          setIngredients(ingredientsList);
          setMeasures(measuresList);
        } else {
          setError("No meals found.");
        }
      } catch (error) {
        console.log(error);
        setError("Error fetching recipe details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchRecipeDetails();
  }, [id]);

  const adjustMeasure = (measure) => {
    const measureValue = parseFloat(measure);
    if (!isNaN(measureValue)) {
      return (
        (measureValue * numPeople).toFixed(2) +
        " " +
        measure.replace(/[0-9.]/g, "")
      );
    }
    return measure;
  };

  const formatInstructions = (instructions) => {
    if (!instructions) return [];
    return instructions
      .split(".")
      .filter((instruction) => instruction.trim() !== "");
  };

  const getIngredientImage = (ingredient) => {
    return `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br via-blue-400 to-indigo-600 p-4">
      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl p-8 max-w-5xl mx-auto shadow-lg mt-6 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#111827] text-white px-5 py-2 rounded-md shadow-md hover:bg-teal-600 transition ease-in-out duration-300 mb-6"
        >
          Go Back
        </button>

        <h3 className="text-gray-800 text-3xl font-bold text-center mb-6">
          {recipe?.strMeal}
        </h3>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-6">
          <div className="flex flex-col items-center w-full md:w-1/2">
            <img
              src={recipe?.strMealThumb}
              alt={recipe?.strMeal || "Recipe image"}
              className="rounded-lg shadow-lg w-full object-cover mb-4" // Reduced margin here
            />
          </div>

          <div className="flex flex-col items-center w-full md:w-1/2">
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
              Ingredients (for {numPeople} people)
            </h3>

            <div className="flex gap-4 items-center justify-center mb-4">
              {" "}
              {/* Reduced margin here */}
              <label
                htmlFor="people"
                className="text-lg font-semibold text-gray-800"
              >
                Adjust Servings:
              </label>
              <input
                type="number"
                id="people"
                value={numPeople}
                onChange={(e) =>
                  setNumPeople(Math.max(Number(e.target.value), 1))
                }
                className="border border-gray-300 rounded-lg p-2 w-32 text-center"
                min="1"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {ingredients.map((ingredient, i) => (
                <div
                  key={ingredient}
                  className="bg-gray-100 rounded-lg p-4 shadow-sm flex flex-col items-center"
                >
                  <img
                    src={getIngredientImage(ingredient)}
                    alt={ingredient || "Ingredient image"}
                    className="w-12 h-12 rounded-full object-cover mb-2"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100";
                    }}
                  />
                  <span className="text-gray-800 text-sm font-medium">
                    {ingredient}
                  </span>
                  <span className="text-gray-700 text-sm">
                    {adjustMeasure(measures[i])}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <h3 className="text-gray-800 text-xl font-semibold text-center mb-4">
            Instructions
          </h3>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <ol className="list-decimal pl-5 space-y-2 text-gray-800 text-lg">
              {formatInstructions(recipe?.strInstructions).map(
                (step, index) => (
                  <li key={index} className="leading-relaxed">
                    {step.trim()}
                  </li>
                )
              )}
            </ol>
          </div>
        </div>

        {recipe?.strYoutube && (
          <div className="mt-10 w-full">
            <h3 className="text-gray-800 text-xl font-semibold text-center mb-4">
              Video Tutorial
            </h3>
            <div className="flex justify-center">
              <div className="w-full max-w-2xl aspect-w-16 aspect-h-9">
                <iframe
                  src={recipe.strYoutube.replace("watch?v=", "embed/")}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
