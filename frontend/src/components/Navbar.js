import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem;
`;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/about">About Us</NavbarLink>
      <NavbarLink to="/donate-blood">Donate Blood</NavbarLink>
      <NavbarLink to="/fund-raiser">Fund Raiser</NavbarLink>
      <NavbarLink to="/donation-drive">Donation Drive</NavbarLink>
      <NavbarLink to="/contact">Contact Us</NavbarLink>
    </NavbarContainer>
  );
};

export default Navbar;