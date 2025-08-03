import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { useEffect, useState } from 'react';
import { getRecipes } from './recipeStore';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const recipesFromServer = await getRecipes();
      setRecipes(recipesFromServer);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;