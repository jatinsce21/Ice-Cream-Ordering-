import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        setMessage('Login successful!');
        navigate(`/${data.role}`);
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (error) {
      setMessage('Error: Unable to connect to server');
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Navigates to the register page
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <select name="role" onChange={handleChange} required>
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="vendor">Vendor</option>
        <option value="user">User</option>
      </select>
      <button type="submit">Login</button>
      <button type="button" onClick={handleRegister}>
        Register
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Login;
