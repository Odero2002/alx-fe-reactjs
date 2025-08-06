import React, { useState } from 'react';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to fetch user data based on search criteria
  const fetchUserData = async ({ username, location, minRepos }) => {
    try {
      // Construct the query string for the GitHub API
      let query = username;
      if (location) query += `+location:${location}`;
      if (minRepos) query += `+repos:>=${minRepos}`;

      // Fetch data from GitHub API
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      // Extract and return relevant user information
      return data.items.map(user => ({
        login: user.login,
        repos: user.public_repos,
        html_url: user.html_url
      }));
    } catch (error) {
      console.error('Error fetching user data:', error);
      return [];
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Use fetchUserData to get search results
    const results = await fetchUserData({ username, location, minRepos });
    setSearchResults(results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow-md rounded-lg">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
          <input
            type="number"
            id="minRepos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Search
        </button>
      </form>

      {searchResults.length > 0 && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-medium mb-2">Search Results</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index} className="p-2 border-b border-gray-200">
                <div>
                  <span className="font-medium">{result.login}</span> - Repos: {result.repos || 'N/A'}
                </div>
                <a href={result.html_url} className="text-blue-500 hover:underline text-sm">
                  View Profile
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
