import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Corrected relative path
import './App.css'; // Corrected relative path

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);