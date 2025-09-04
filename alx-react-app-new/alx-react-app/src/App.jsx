// src/App.jsx
import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';
import Counter from './components/Counter';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
      <Counter />
    </UserContext.Provider>
  );
}

export default App;
