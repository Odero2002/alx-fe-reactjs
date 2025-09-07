import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!username) {
      newErrors.username = 'Username is required.';
    }
    if (!email) {
      newErrors.email = 'Email is required.';
    }
    if (!password) {
      newErrors.password = 'Password is required.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

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
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ display: 'block', margin: '10px 0', width: '100%' }}
      />
      {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ display: 'block', margin: '10px 0', width: '100%' }}
      />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ display: 'block', margin: '10px 0', width: '100%' }}
      />
      {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      <button type="submit" style={{ padding: '8px 16px' }}>Register</button>
    </form>
  );
}

export default RegistrationForm;