import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="block">
          <Recipe recipe={recipe} />
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
