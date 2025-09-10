import React from 'react';
import { useParams } from 'react-router-dom';
import Recipe from '../components/Recipe';

const RecipePage = () => {
  const { id } = useParams();

  // Dummy data for demonstration (in a real app, you'd fetch this from an API)
  const recipes = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      description: 'A classic Italian pasta dish.',
      ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan Cheese', 'Black Pepper'],
      instructions: [
        'Cook spaghetti according to package directions.',
        'Fry pancetta until crispy.',
        'Whisk eggs, grated Parmesan, and black pepper.',
        'Combine hot spaghetti with egg mixture and pancetta.',
        'Serve immediately.'
      ],
    },
    {
      id: 2,
      name: 'Chicken Curry',
      description: 'A rich and flavorful Indian chicken curry.',
      ingredients: ['Chicken', 'Onion', 'Garlic', 'Ginger', 'Tomatoes', 'Curry Powder', 'Coconut Milk'],
      instructions: [
        'Sauté onions, garlic, and ginger.',
        'Add chicken and brown.',
        'Stir in tomatoes and curry powder.',
        'Pour in coconut milk and simmer until chicken is cooked through.',
        'Serve with rice.'
      ],
    },
  ];

  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div className="container mx-auto p-4 text-red-500">Recipe not found!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">{recipe.name}</h1>
      <Recipe recipe={recipe} />
    </div>
  );
};

export default RecipePage;
