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
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 bg-cover bg-center bg-no-repeat bg-blend-overlay"
      style={{
        backgroundImage: "url('https://example.com/your-background-image.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 max-w-5xl mx-auto shadow-lg mt-6 mb-8">
        <div className="flex flex-col items-center mb-6">
          {/* Number of People Input */}
          <label
            htmlFor="people"
            className="block mb-2 text-lg font-medium text-black"
          >
            Adjust Servings:
          </label>
          <input
            type="number"
            id="people"
            value={numPeople}
            onChange={(e) => setNumPeople(Math.max(Number(e.target.value), 1))}
            className="border border-gray-300 rounded-lg p-3 text-xl w-32 mb-4"
            min="1"
          />
        </div>

        <button
          onClick={() => navigate(-1)}
          className="bg-[#d78b21] text-white px-6 py-2 rounded-lg mb-4 hover:bg-[#bf7319] transition-all duration-300 ease-in-out"
        >
          Go Back
        </button>

        <h3 className="text-black text-3xl font-bold text-center mb-6">
          {recipe?.strMeal}
        </h3>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Left Column: Meal Image */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <img
              src={recipe?.strMealThumb}
              alt={recipe?.strMeal || "Recipe image"}
              className="rounded-lg shadow-xl w-full object-cover mb-4"
            />
            <h3 className="text-black text-xl font-semibold text-center mb-3">
              Ingredients
            </h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {ingredients.map((ingredient, i) => (
                <div
                  key={ingredient}
                  className="bg-white bg-opacity-70 rounded-xl shadow-md p-3 flex flex-col items-center gap-2"
                >
                  <img
                    src={getIngredientImage(ingredient)}
                    alt={ingredient || "Ingredient image"}
                    className="w-14 h-14 object-cover rounded-md"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100";
                    }}
                  />
                  <span className="text-black text-sm font-medium">
                    {ingredient}
                  </span>
                  <span className="text-black text-sm">
                    {adjustMeasure(measures[i])}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Instructions */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <h3 className="text-black text-xl font-semibold text-center mb-4">
              Instructions
            </h3>
            <div className="bg-white bg-opacity-60 p-5 rounded-xl shadow-md w-full">
              <ol className="list-decimal pl-5 text-black space-y-2 text-lg">
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
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
