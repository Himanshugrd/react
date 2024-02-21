import React from 'react';
import styled from 'styled-components';

const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #3498db; // Set the background color
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

const TextArea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
  height: 150px;
`;

const Button = styled.button`
  background-color: #fff;
  color: #3498db;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #eee;
  }
`;

const ContactUsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <ContactUsContainer>
      <Content>
        <Title>Contact Us</Title>
        <Description>
          Have a question or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.
        </Description>
        <Form onSubmit={handleSubmit}>
          <Label>Name</Label>
          <Input type="text" name="name" required />
          <Label>Email</Label>
          <Input type="email" name="email" required />
          <Label>Message</Label>
          <TextArea name="message" required />
          <Button type="submit">Send Message</Button>
        </Form>
      </Content>
    </ContactUsContainer>
  );
};

export default ContactUsPage;
