import { useContext } from "react";
import RecipeItem from "../Recipe Item/RecipeItem";
import "./RecipeList.css";
import { RecipeContext } from "../../context/RecipeContext";
export default function RecipeList() {
  const { recipes } = useContext(RecipeContext);
  return (
    <>
      <h2>Recipe List </h2>
      <ul>
        {recipes.map((recipe, index) => (
          <RecipeItem key={index} recipe={recipe} />
        ))}
        {/* <RecipeItem />
        <RecipeItem /> */}
      </ul>
    </>
  );
}
