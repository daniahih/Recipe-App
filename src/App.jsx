import RecipeForm from "./components/Recipe Form/RecipeForm";
import RecipeList from "./components/Recipe List/RecipeList";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchRecipes, postRecipe } from "./utils/Api";
export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // console.log(fetchRecipes());

    fetchRecipes().then((data) => {
      setRecipes(data);
      //  / recipes = data comes from api
    });
  }, []);

  function addRecipe(newRecipe) {
    postRecipe(newRecipe).then((data) => {
      setRecipes((prevRecipe) => [...prevRecipe, data]);
    });
  }
  console.log("test ", recipes);

  return (
    <div className="container">
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}
