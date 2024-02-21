import React from 'react';
import styled from 'styled-components';
// import donateBackground from './donate_background.jpg'; // Import your background image
import DonationForm from './DonationForm'; // Import the DonationForm component

const DonateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color:black; // Set the background image
//   background-size: cover;
//   background-position: center;
  height: 100vh;
  color: #fff; // Set text color to white
`;

const Content = styled.div`
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const DonatePage = () => {
  return (
    <DonateContainer>
      <Content>
        <Title>Donate Blood</Title>
        <Description>
          Your blood donation can save lives. Join us in our mission to make a difference.
        </Description>
        {/* Render the DonationForm component */}
        <DonationForm />
      </Content>
    </DonateContainer>
  );
};

export default DonatePage;
