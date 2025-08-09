import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const contactStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const titleStyle = {
    color: '#333',
    fontSize: '2rem',
    marginBottom: '20px'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const inputStyle = {
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px'
  };

  const textareaStyle = {
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    minHeight: '120px'
  };

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px'
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049'
  };

  return (
    <div style={contactStyle}>
      <h1 style={titleStyle}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
          required
        />
        <button 
          type="submit" 
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;