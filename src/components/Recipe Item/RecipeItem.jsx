import "./RecipeItem.css";
export default function RecipeItem({ recipe }) {
  console.log("rcipe inside recipe item ", recipe);

  return (
    <li>
      <h3>{recipe.recipeName}</h3>
      <p>
        <strong> Instructions </strong>
        {recipe.Instruction}
      </p>
      <p>
        <strong>Category:</strong> {recipe.Category}
      </p>
    </li>
  );
}
