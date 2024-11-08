import React from "react";

import Hero from "../Components/Hero";
import FavouriteFoods from "../Components/FavouriteFoods";
// import Categories from "../Components/Categories";
import ChefCards from "../Components/ChefCards";
import IngredientCards from "../Components/IngredientCards";

const Home = () => {
  return (
    <div>
      <Hero />
      <IngredientCards />
      <FavouriteFoods />
      <ChefCards />

      {/* <Categories /> */}
    </div>
  );
};

export default Home;
