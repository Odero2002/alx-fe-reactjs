import React from 'react';
import RecipeList from '../components/RecipeList';

const HomePage = () => {
  // Dummy data for demonstration
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to the Recipe Sharing Platform!</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default HomePage;
