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
