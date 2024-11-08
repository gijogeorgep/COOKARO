import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import bgimage from "../assets/meal3.jpg";

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
      className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-[#1f2937]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgimage})`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg border border-white border-opacity-30 p-4 md:p-6 max-w-5xl mx-auto shadow-lg mt-8 mb-8">
        <h2 className="text-[#d78b21] text-2xl md:text-3xl mb-6 md:mb-10 text-center">
          Recipe Details
        </h2>

        <button
          onClick={() => navigate(-1)}
          className="bg-[#d78b21] text-white px-4 py-2 rounded-lg mb-6 md:mb-10 hover:bg-[#bf7319] transition-colors"
        >
          Back
        </button>

        {/* Display the meal name */}
        <h3 className="text-white text-3xl font-bold text-center mb-4">
          {recipe?.strMeal}
        </h3>

        <div className="mb-6 w-full flex flex-col md:flex-row justify-center items-center">
          <label
            htmlFor="people"
            className="block mb-2 md:mb-0 text-lg font-medium text-white"
          >
            Number of People:
          </label>
          <input
            type="number"
            id="people"
            value={numPeople}
            onChange={(e) => setNumPeople(Math.max(Number(e.target.value), 1))}
            className="border border-gray-300 text-gray-900 text-lg rounded-lg p-2 w-24 ml-2"
            min="1"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Ingredients */}
          <div className="flex flex-col">
            <div className="flex justify-center mb-6 md:mb-8">
              <img
                src={recipe?.strMealThumb}
                alt={recipe?.strMeal || "Recipe image"}
                className="object-cover rounded-lg shadow-lg"
                style={{ maxWidth: "100%", maxHeight: "300px" }}
              />
            </div>

            <h3 className="text-center text-2xl font-medium mb-6 text-white">
              Ingredients and Measures
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 justify-center">
              {ingredients.map((ingredient, i) => (
                <div
                  key={`${ingredient}-${i}`}
                  className="flex flex-col items-center gap-2"
                >
                  <img
                    src={getIngredientImage(ingredient)}
                    alt={ingredient || "Ingredient image"}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100";
                    }}
                  />
                  <span className="font-semibold text-white text-sm md:text-base">
                    {ingredient}
                  </span>
                  <span className="text-white text-sm md:text-base">
                    {adjustMeasure(measures[i])}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Instructions */}
          <div className="flex flex-col">
            <h3 className="text-center text-2xl font-medium mb-6 text-white">
              Instructions
            </h3>
            <div className="text-base md:text-lg leading-relaxed space-y-4">
              {formatInstructions(recipe?.strInstructions).map(
                (step, index) => (
                  <p key={index} className="text-white">
                    <strong>Step {index + 1}: </strong>
                    {step.trim()}.
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
