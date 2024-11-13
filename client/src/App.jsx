import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Home/Home";
import RecipeDetails from "./Components/RecipeDetails";
import Categories from "./Components/Categories";

import Footer from "./Components/Footer";
import ContactPage from "./Components/Contactpage";
import Area from "./Components/Area";
import Breakfast from "./Components/Breakfast";
import Dessert from "./Components/Dessert";
import Vegetarian from "./Components/Vegetarian";

function App() {
  return (
    <div className="bg-[#111827] min-h-screen w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/area" element={<Area />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="dessert" element={<Dessert />} />
        <Route path="vegetarian" element={<Vegetarian />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
