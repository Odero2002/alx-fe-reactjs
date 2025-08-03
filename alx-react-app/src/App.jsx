import React from 'react';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/vite.svg" className="App-logo" alt="logo" />
        <h1>Welcome to My React App</h1>
        <p>
          This is a simple React application created using Vite.
        </p>
      </header>
      <WelcomeMessage />
    </div>
  );
}

export default App;