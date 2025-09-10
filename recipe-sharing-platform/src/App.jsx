import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipePage from './pages/RecipePage';
import AddRecipePage from './pages/AddRecipePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              RecipeShare
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-white hover:text-blue-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/add" className="text-white hover:text-blue-200">
                  Add Recipe
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
            <Route path="/add" element={<AddRecipePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
