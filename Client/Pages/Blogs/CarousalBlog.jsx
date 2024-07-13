import React from 'react'
import { Carousel } from 'react-bootstrap'
// import {  } from 'components/ExampleCarouselImage';
import image from './../../Assets/Images/ContactImage.png'
import { NavLink } from 'react-router-dom';
// Context
export const scrollToTop = () => {
   window.scrollTo(0, 0);
 };
export default function CarousalBlog() {
    const carouselStyle = {
        height: '500px', // Adjust this height as needed
      };
  return (
    
    <Carousel style={carouselStyle}>
      <Carousel.Item className='h-100' interval={1000}>
        <NavLink to = '/'  onClick={scrollToTop}>
        <img
          className="d-block mx-auto img-fluid w-50"
          src={image}
          
          alt="First slide"
        />
        </NavLink>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
   
    </Carousel>

  )
}
