import React from 'react';

const MainContent = () => {
  return (
    <main style={{
      padding: '20px',
      backgroundColor: '#f4f4f4',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    }}>
      <h2 style={{ color: 'green', marginBottom: '10px' }}>Welcome to My Favorite Cities</h2>
      <p style={{ fontSize: '16px', marginBottom: '12px' }}>Here are some of the cities I love:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{
          padding: '8px',
          backgroundColor: 'white',
          margin: '5px 0',
          borderRadius: '6px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
        }}>New York</li>
        <li style={{
          padding: '8px',
          backgroundColor: 'white',
          margin: '5px 0',
          borderRadius: '6px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
        }}>Paris</li>
        <li style={{
          padding: '8px',
          backgroundColor: 'white',
          margin: '5px 0',
          borderRadius: '6px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
        }}>I love to visit New York, Paris, and Tokyo.</li>
      </ul>
    </main>
  );
};

export default MainContent;
