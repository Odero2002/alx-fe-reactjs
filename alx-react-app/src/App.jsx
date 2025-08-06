import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <Footer />
        </div>
    );
}

export default App;