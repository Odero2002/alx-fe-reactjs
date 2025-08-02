// src/App.jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Search</h1>
      </header>
    </div>
  );
}

export default App;
// src/services/githubApi.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const API_URL = 'https://api.github.com';

export const searchUsers = async (query) => {
  const response = await axios.get(`${API_URL}/search/users?q=${query}`, {
    headers: {
      Authorization: `token ${API_KEY}`
    }
  });
  return response.data;
};
