import RecipeForm from "./components/Recipe Form/RecipeForm";
import RecipeList from "./components/Recipe List/RecipeList";
import "./App.css";
import { useState } from "react";
export default function App() {
  const [recipes, setRecipes] = useState([]);

  function addRecipe(newRecipe) {
    setRecipes([...recipes, newRecipe]);
  }
  console.log("test ", recipes);

  return (
    <div className="container">
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}
