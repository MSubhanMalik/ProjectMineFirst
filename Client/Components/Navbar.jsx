import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './../Styles/Navbar.scss'
import styled from 'styled-components'
import Logo from './../Assets/Images/LOGOReal.png'
import NavLinks from './NavLinks';

function NavbarComp() {
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.stickyNav');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  return (
    <Navbar expand="lg" className="stickyNav mt-5 mb-3">
      <Container className='' >
        <Navbar.Brand  className='' style={{width: "40%"}} ><img className='w-25' src={Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <NavLinks includeAuthLinks = {true} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;

