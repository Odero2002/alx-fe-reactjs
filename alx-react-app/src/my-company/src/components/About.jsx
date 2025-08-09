function About() {
  const aboutStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const titleStyle = {
    color: '#333',
    fontSize: '2rem',
    marginBottom: '20px'
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#666',
    marginBottom: '15px'
  };

  return (
    <div style={aboutStyle}>
      <h1 style={titleStyle}>About Us</h1>
      <p style={paragraphStyle}>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
      <p style={paragraphStyle}>With over three decades of experience, we have helped hundreds of businesses transform their operations and achieve sustainable growth. Our commitment to innovation and customer satisfaction has made us a trusted partner in the industry.</p>
    </div>
  );
}

export default About;