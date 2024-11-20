import RecipeItem from "../Recipe Item/RecipeItem";
import "./RecipeList.css";
export default function RecipeList({ recipes }) {
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
