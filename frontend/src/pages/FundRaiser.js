import React, { useState } from 'react';
import styled from 'styled-components';
import fundRaiserBackground from '../images/blood.jpg'; // Import your background image

const FundRaiserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-image: url(${fundRaiserBackground}); // Set the background image
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: #212129; // Set text color to white
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #f04;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #e03;
  }
`;

const FundRaiserPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    donationAmount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log('Form submitted:', formData);
    // Optionally, you can reset the form fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      donationAmount: '',
    });
  };

  return (
    <FundRaiserContainer>
      <Content>
        <Title>Fund Raiser</Title>
        <Description>
          Join us in raising funds to support our mission of providing safe and reliable blood products to those in need.
        </Description>
        <Form onSubmit={handleSubmit}>
          <Label>First Name</Label>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Label>Last Name</Label>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Label>Donation Amount</Label>
          <Input
            type="number"
            name="donationAmount"
            value={formData.donationAmount}
            onChange={handleChange}
            required
          />
          <Button type="submit">Donate Now</Button>
        </Form>
      </Content>
    </FundRaiserContainer>
  );
};

export default FundRaiserPage;
