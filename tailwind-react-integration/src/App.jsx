import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to Tailwind React Integration!</h1>
      <p className="mt-4 text-gray-700">Tailwind CSS is now ready to use in your React project.</p>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
