import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { scrollToTop } from '../Pages/Blogs/CarousalBlog';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const NavLinkModified = styled(NavLink)`
  color: ${({ color }) => color || '#8bc4fd'} !important;
  text-decoration: none;
`;

const AnchorLinkModified = styled(AnchorLink)`
  color: ${({ color }) => color || '#8bc4fd'} !important;
  text-decoration: none;
`;


const NavLinks = ({ includeAuthLinks, color }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const renderLink = (to, href, text) => {
    if (['/blogs', '/works', '/register', '/login'].includes(currentPath)) {
      return (
        <Nav.Link className="navLink">
          <NavLinkModified  onClick={scrollToTop} color={color} to={to}>{text}</NavLinkModified>
        </Nav.Link>
      );
    }
    return (
      <Nav.Link className="navLink">
        <AnchorLinkModified color={color} href={href}>{text}</AnchorLinkModified>
      </Nav.Link>
    );
  };

  return (
    <Nav  className="me-auto desktopTab">
      <Nav.Link className="navLink">
        <NavLinkModified  onClick={scrollToTop} color={color} to="/">Home</NavLinkModified>
      </Nav.Link>
      {renderLink('/', '#about', 'About')}
      {renderLink('/', '#services', 'Services')}
      {renderLink('/', '#contact', 'Contact')}
      <Nav.Link className="navLink">
        <NavLinkModified  onClick={scrollToTop} color={color} to="/blogs">Blogs</NavLinkModified>
      </Nav.Link>
      <Nav.Link className="navLink">
        <NavLinkModified  onClick={scrollToTop} color={color} to="/works">Works</NavLinkModified>
      </Nav.Link>
      {includeAuthLinks && (
        <>
          <Nav.Link className="navLink">
            <NavLinkModified  onClick={scrollToTop} color={color} to="/register">Register</NavLinkModified>
          </Nav.Link>
          <Nav.Link className="navLink">
            <NavLinkModified  onClick={scrollToTop} color={color} to="/login">Login</NavLinkModified>
          </Nav.Link>
        </>
      )}
    </Nav>
  );
};

export default NavLinks;
