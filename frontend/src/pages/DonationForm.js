import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const Option = styled.option`
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

const DonationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bloodGroup: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('your_api_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Donation form submitted successfully!');
        // Reset form fields if needed
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          bloodGroup: '',
          phoneNumber: '',
        });
      } else {
        console.error('Failed to submit donation form');
      }
    } catch (error) {
      console.error('Error submitting donation form:', error);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label>First Name</Label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <Label>Last Name</Label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <Label>Email</Label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Label>Blood Group</Label>
        <Select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        >
          <Option value="">Select Blood Group</Option>
          <Option value="A+">A+</Option>
          <Option value="A-">A-</Option>
          <Option value="B+">B+</Option>
          <Option value="B-">B-</Option>
          <Option value="AB+">AB+</Option>
          <Option value="AB-">AB-</Option>
          <Option value="O+">O+</Option>
          <Option value="O-">O-</Option>
        </Select>
        <Label>Phone Number</Label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default DonationForm;
