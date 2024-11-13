import Hero from "../Components/Hero";
import FavouriteFoods from "../Components/FavouriteFoods";
import ChefCards from "../Components/ChefCards";
import IngredientCards from "../Components/IngredientCards";

const Home = () => {
  return (
    <div>
      <Hero />
      <IngredientCards />
      <FavouriteFoods />
      <ChefCards />
    </div>
  );
};

export default Home;
