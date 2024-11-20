import { useState } from "react";
import "./RecipeForm.css";
// eslint-disable-next-line react/prop-types
export default function RecipeForm({ addRecipe }) {
  const [recipeName, setRecipeName] = useState("");
  const [Instruction, setInstruction] = useState("");
  const [Category, setCategory] = useState("Lunch");
  function handelSubmit(e) {
    e.preventDefault();
    const newRecipe = { recipeName, Instruction, Category };
    addRecipe(newRecipe);
    setRecipeName("");
    setInstruction("");
    setCategory("");
  }
  return (
    <>
      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="">Recipe Name</label>
          <input
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Instruction</label>
          <textarea
            value={Instruction}
            onChange={(e) => setInstruction(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Category</label>
          <select
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Lunch">Lunch</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
        <button type="submit">Add Recipe </button>
      </form>
    </>
  );
}
