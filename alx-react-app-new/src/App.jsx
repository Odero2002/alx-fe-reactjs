import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <Counter />
            <Footer />
        </div>
    );
}

export default App;