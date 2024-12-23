import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dessert = () => {
  const URL_DESSERT =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";
  const [desserts, setDesserts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dessertsPerPage = 8; // Number of desserts per page

  // Fetch dessert recipes
  useEffect(() => {
    const fetchDessertRecipes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(URL_DESSERT);
        setDesserts(response.data.meals || []);
      } catch (error) {
        console.error("Error fetching dessert recipes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDessertRecipes();
  }, []);

  // Calculate the current desserts to display
  const indexOfLastDessert = currentPage * dessertsPerPage;
  const indexOfFirstDessert = indexOfLastDessert - dessertsPerPage;
  const currentDesserts = desserts.slice(
    indexOfFirstDessert,
    indexOfLastDessert
  );

  // Handle page navigation
  const totalPages = Math.ceil(desserts.length / dessertsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#111827]">
      {/* Header Section */}
      <div className="relative text-center py-12 bg-[#1f2937]">
        <h5 className="text-2xl text-[#d79734] mt-4">Discover Desserts</h5>
        <h2 className="text-3xl text-[#bc8738] mt-4">
          Indulge in Sweet Treats
        </h2>
      </div>

      {/* Loading Animation */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        // Desserts Section
        <div className="w-11/12 mx-auto mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {currentDesserts.map((dessert) => (
              <div
                key={dessert.idMeal}
                className="flex flex-col items-center text-center bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                <Link
                  to={`/recipe/${dessert.idMeal}`}
                  className="w-full h-52 overflow-hidden rounded-t-lg"
                >
                  <img
                    src={dessert.strMealThumb}
                    alt={dessert.strMeal}
                    className="h-full w-full object-cover"
                  />
                </Link>
                <div className="p-3">
                  <h4 className="text-md font-semibold text-[#d79734]">
                    {dessert.strMeal}
                  </h4>
                  <p className="text-gray-500 text-sm">Click to view recipe</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 border rounded-lg mx-2 ${
                currentPage === 1
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#d79734] text-white hover:bg-[#bc8738]"
              }`}
            >
              Previous
            </button>
            <span className="text-white mx-4">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border rounded-lg mx-2 ${
                currentPage === totalPages
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#d79734] text-white hover:bg-[#bc8738]"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dessert;
