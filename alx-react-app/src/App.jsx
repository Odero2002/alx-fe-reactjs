import React from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';

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

function Header() {
    return (
        <header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center', padding: '10px' }}>
            <h1>My Favorite Cities</h1>
        </header>
    );
}

export default Header;

function MainContent() {
    return (
        <main style={{ backgroundColor: '#f9f9f9', padding: '20px', textAlign: 'center' }}>
            <p style={{ fontSize: '18px', color: '#333' }}>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

export default MainContent;

function Footer() {
    return (
        <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '10px', marginTop: '20px' }}>
            <p>© 2023 City Lovers</p>
        </footer>
    );
}

export default Footer;