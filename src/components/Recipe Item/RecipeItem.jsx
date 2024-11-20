import "./RecipeItem.css";
export default function RecipeItem({ recipe }) {
  return (
    <li>
      <h3>{recipe.recipeName}</h3>
      <p>
        <strong> Instructions </strong>
        {recipe.instructions}
      </p>
      <p>
        <strong>Category:</strong> {recipe.category}
      </p>
    </li>
  );
}
