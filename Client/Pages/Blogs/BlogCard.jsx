import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const FilterCard = ({ title, options, activeOption, onOptionClick }) => {
  return (
    <Card className='w-100'>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {options.map(option => (
          <ListGroup.Item
            key={option.value}
            action
            active={activeOption === option.value}
            onClick={() => onOptionClick(option.value)}
          >
            {option.label}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default FilterCard;
