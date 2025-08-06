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
// MainContent.jsx
const MainContent = () => {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h2 style={{ color: 'green' }}>Welcome to My Favorite Cities</h2>
      <p style={{ fontSize: '16px' }}>Here are some of the cities I love:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ padding: '8px', backgroundColor: 'white', margin: '5px 0' }}>New York</li>
        <li style={{ padding: '8px', backgroundColor: 'white', margin: '5px 0' }}>Paris</li>
        <li style={{ padding: '8px', backgroundColor: 'white', margin: '5px 0' }}>Tokyo</li>
      </ul>
    </main>
  );
};

export default MainContent;
