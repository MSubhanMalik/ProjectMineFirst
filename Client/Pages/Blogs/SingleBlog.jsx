import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CheckImageBlog from './../../Assets/Images/CheckImageBlog.jpg';
import styled from 'styled-components';

function SingleBlog() {
  // Array to repeat the cards
  const cardData = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    date: '12/07/2024',
    author: 'Muhammad Subhan',
    title: 'Card Title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    link: '/learn-more', // Replace with actual link
  }));

  return (
    <CardHolder>
      <Row xs={1} md={3} className="g-4">
        {cardData.map((card) => (
          <Col key={card.id}>
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src={CheckImageBlog} />
              <Card.Body>
                <div>{card.date}</div>
                <div className='mb-1'>By: <strong>{card.author}</strong></div>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <NavLinkUnderlined to={card.link}>Learn More</NavLinkUnderlined>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </CardHolder>
  );
}

export default SingleBlog;

const NavLinkUnderlined = styled(NavLink)`
  text-decoration: underline;
`;

const CardHolder = styled.div`
  margin-top: 20px; /* Adjust margin as needed */
`;
