import React from 'react';
import styled from 'styled-components';

const DonationDriveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f04; // Set the background color
  height: 100%;
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

const EventContainer = styled.div`
  margin-top: 2rem;
`;

const Event = styled.div`
  background-color: #fff;
  color: #f04;
  padding: 1rem;
  margin-bottom: 3rem;
  border-radius: 0.25rem;
`;

const EventTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const EventInfo = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  background-color: black;
  color: #f04;
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

const DonationDrivePage = () => {
  const donationDriveEvents = [
    {
      title: 'Blood Donation Camp',
      location: 'Howrah, Kolkata',
      date: 'February 28, 2024',
    },
    {
      title: 'Community Blood Drive',
      location: 'Salt Lake, Kolkata',
      date: 'March 15, 2024',
    },
    {
      title: 'Blood Donation Marathon',
      location: 'Newtown, Kolkata',
      date: 'April 5, 2024',
    },
  ];

  return (
    <DonationDriveContainer>
      <Content>
        <Title>Donation Drive</Title>
        <Description>
          Join us in our upcoming donation drive events and make a difference in the lives of those in need.
        </Description>
        <EventContainer>
          {donationDriveEvents.map((event, index) => (
            <Event key={index}>
              <EventTitle>{event.title}</EventTitle>
              <EventInfo>Location: {event.location}</EventInfo>
              <EventInfo>Date: {event.date}</EventInfo>
            </Event>
          ))}
        </EventContainer>
        <Button style={{backgroundColor:'black'}}>Learn More</Button>
      </Content>
    </DonationDriveContainer>
  );
};

export default DonationDrivePage;
