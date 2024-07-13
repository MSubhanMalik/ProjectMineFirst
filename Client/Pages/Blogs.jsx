import React from "react";
import { Row, Col } from "antd";
import "./../Styles/Blogs.scss";
import { HomeBlock } from "./Home";
import BlogContainer from "./Blogs/BlogContainer";
import PageTop from "./PageTop";
import CarousalBlog from "./Blogs/CarousalBlog";
import RemainingBlogs from "./Blogs/RemainingBlogs";
export default function Blogs() {
  return (
    <>
    <PageTop title='Blogs'/>
    <HomeBlock  style={{padding: "0 !important",  height: "auto" }}>
      <Row >
        
        <Col span={18}>
          <CarousalBlog />
          <RemainingBlogs  />
        </Col>
        <Col span={6} className="">
          <BlogContainer />
        </Col>
      </Row>
     
    </HomeBlock>
    </>
  );
}

