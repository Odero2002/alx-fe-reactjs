import MainContent from './components/MainContent';

function App() {
    return (
        <div>
            <MainContent />
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