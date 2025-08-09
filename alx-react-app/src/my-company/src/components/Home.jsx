function Home() {
  const homeStyle = {
    padding: '20px',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const titleStyle = {
    color: '#333',
    fontSize: '2.5rem',
    marginBottom: '20px'
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#666'
  };

  return (
    <div style={homeStyle}>
      <h1 style={titleStyle}>Welcome to Our Company</h1>
      <p style={paragraphStyle}>We are dedicated to delivering excellence in all our services. Our team of experts is ready to help you achieve your business goals with innovative solutions and unparalleled customer service.</p>
    </div>
  );
}

export default Home;