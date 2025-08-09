function Services() {
  const servicesStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const titleStyle = {
    color: '#333',
    fontSize: '2rem',
    marginBottom: '20px'
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0'
  };

  const listItemStyle = {
    backgroundColor: '#f4f4f4',
    margin: '10px 0',
    padding: '15px',
    borderRadius: '5px',
    fontSize: '1.1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <div style={servicesStyle}>
      <h1 style={titleStyle}>Our Services</h1>
      <ul style={listStyle}>
        <li style={listItemStyle}>Technology Consulting</li>
        <li style={listItemStyle}>Market Analysis</li>
        <li style={listItemStyle}>Product Development</li>
        <li style={listItemStyle}>Digital Marketing Strategy</li>
        <li style={listItemStyle}>Business Process Optimization</li>
      </ul>
    </div>
  );
}

export default Services;