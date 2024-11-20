import { useEffect, useState } from "react";
import { createContext } from "react";
import { fetchRecipes, postRecipe } from "../utils/Api";

const RecipeContext = createContext();

const RecipePrvider = ({ children }) => {
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
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
export { RecipePrvider, RecipeContext };
