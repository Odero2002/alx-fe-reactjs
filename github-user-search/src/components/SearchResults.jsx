import React from 'react';

const SearchResults = ({ users }) => {
  return (
    <div className="space-y-4 p-4">
      {users.map((user) => (
        <div key={user.id} className="p-4 border border-gray-300 rounded-md shadow-sm">
          <div className="flex items-center space-x-4">
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="text-lg font-medium">{user.login}</h2>
              <p className="text-sm text-gray-500">Location: {user.location || 'N/A'}</p>
              <p className="text-sm text-gray-500">Repositories: {user.repos || 'N/A'}</p>
              <a href={user.html_url} className="text-blue-500 hover:underline">View Profile</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
