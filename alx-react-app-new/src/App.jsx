import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './Footer';
import UserProfile from './components/UserProfile';

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

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Counter: {count}</h2>
            <button style={{ margin: '5px', padding: '10px' }} onClick={() => setCount(count + 1)}>Increase</button>
            <button style={{ margin: '5px', padding: '10px' }} onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
};

export default Counter;