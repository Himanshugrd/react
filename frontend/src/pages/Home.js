import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bloodBackground from '../images/blood.jpg'; // Import your blood-related background image
import { useAuth } from './AuthContext';


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-image: url(${bloodBackground}); // Set the background image
  background-size: cover;
  background-position: center;
  height: 100vh; // Adjust the height to cover the entire viewport
`;

const Title = styled.h1`
  font-size: 3rem; // Increase font size for title
  margin-bottom: 1rem;
  text-align: center;
  color: red; // Change text color to white
`;

const Subtitle = styled.p`
  font-size: 1.5rem; // Increase font size for subtitle
  margin-bottom: 2rem;
  text-align: center;
  color: red; // Change text color to white
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: #f04;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 0.5rem; // Add margin between buttons
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #e03;
  }
`;

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <HomeContainer>
      <Title>Welcome to our Blood Bank</Title>
      <Subtitle>
        We are dedicated to providing safe and reliable blood products to those in need.
      </Subtitle>
      <ButtonContainer>
        <Button to="/donate-blood">Donate Blood</Button>
        <Button to="/fund-raiser">Fund Raiser</Button>
        <Button to="/donation-drive">Donation Drive</Button>
      </ButtonContainer>
      <div>
      {user && (
        <div>
          <p>Welcome, {user}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
      {!user && <p>Welcome! Please log in.</p>}
    </div>
    </HomeContainer>
  );
};

export default Home;
