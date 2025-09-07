import React, { useState } from 'react';

function RegistrationForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password) {
      setError('All fields are required.');
      return;
    }
    setError('');
    alert('Registration successful!');
    // Simulate API call here
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
      <h2>Register</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0', width: '100%' }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0', width: '100%' }}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0', width: '100%' }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" style={{ padding: '8px 16px' }}>Register</button>
    </form>
  );
}

export default RegistrationForm;