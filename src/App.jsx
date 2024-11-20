import RecipeForm from "./components/Recipe Form/RecipeForm";
import RecipeList from "./components/Recipe List/RecipeList";
import "./App.css";
import { RecipePrvider } from "./context/RecipeContext";

export default function App() {
  return (
    <RecipePrvider>
      <div className="container">
        <RecipeForm />
        <RecipeList />
      </div>
    </RecipePrvider>
  );
}
