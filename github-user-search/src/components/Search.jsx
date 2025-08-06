
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
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
  );
};

export default Search;
