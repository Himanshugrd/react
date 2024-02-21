import React from 'react';
import styled from 'styled-components';
import aboutBackground from '../images/Picture2.jpg'; // Import your background image

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-image: url(${aboutBackground}); // Set the background image
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: black; // Set text color to white
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

const Quote = styled.blockquote`
  font-style: italic;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Content>
        <Title>About Us</Title>
        <Description>
          We are a passionate team dedicated to saving lives by providing safe and reliable blood products to those in need.
        </Description>
        <Quote>
          "Every drop counts. Join us in our mission to make a difference."
        </Quote>
        <p>For more information, contact us at: info@bloodbank.com</p>
      </Content>
    </AboutContainer>
  );
};

export default AboutPage;
