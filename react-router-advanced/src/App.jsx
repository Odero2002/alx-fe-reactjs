import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  // Simulate authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/post/:postId" element={<BlogPost />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;