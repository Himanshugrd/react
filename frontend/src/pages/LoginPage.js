import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext';


const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #f04;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #d63031;
  }
`;

const ErrorMessage = styled.p`
  color: #d63031;
  font-size: 0.9rem;
  text-align: center;
`;

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate()
  const { login } = useAuth();

  useEffect(() => {
    // Store the intended location in session storage
    sessionStorage.setItem('intendedLocation', location.state?.from.pathname || '/');
  }, [location]);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      
      if (response.ok) {
        // Call onLogin function with the username
        onLogin(username);
        // Redirect to the intended location
        // const intendedLocation = sessionStorage.getItem('intendedLocation') || '/';
        login(username); 
        console.log("pagee")
        navigate('/')
        return <Navigate to="/" />;
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred, please try again later');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <Title>Blood Bank Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <InputField
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
