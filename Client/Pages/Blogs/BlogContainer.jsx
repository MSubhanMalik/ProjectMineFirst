import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FilterCard from './BlogCard';
import styled from 'styled-components';
// import FilterCard from './FilterCard';

const BlogContainer = () => {
  const [activeSort, setActiveSort] = useState('latest');
  const [activeCategory, setActiveCategory] = useState('all');

  const sortOptions = [{ value: 'latest', label: 'Latest' }];
  const categoryOptions = [
    { value: 'all', label: 'All' },
    { value: 'abc', label: 'abc' },
    { value: 'xyz', label: 'xyz' },
  ];
  const tagOptions = [
    { value: 'all', label: 'All' },
    { value: 'abc', label: 'abc' },
    { value: 'xyz', label: 'xyz' },
  ];

  return (
    <Container className='h-100 mt-5 '>
      <Row className='d-flex flex-column'>
        <Col className='mb-3'>
          <FilterCard
            title="Sort By"
            options={sortOptions}
            activeOption={activeSort}
            onOptionClick={setActiveSort}
          />
        </Col>
        <Col className='mb-3'>
          <FilterCard
            title="Categories"
            options={categoryOptions}
            activeOption={activeCategory}
            onOptionClick={setActiveCategory}
          />
        </Col>
        <Col >
          <FilterCard
            title="Tags"
            options={tagOptions}
            activeOption={activeCategory}
            onOptionClick={setActiveCategory}
          />
        </Col>
      </Row>
  
    </Container>
  );
};

export default BlogContainer;
