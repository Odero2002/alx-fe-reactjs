function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: '40px'
  };

  const textStyle = {
    margin: '0',
    fontSize: '0.9rem'
  };

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2025 My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;