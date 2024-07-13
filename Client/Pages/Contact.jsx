import React from "react";
import { Button, Form } from "react-bootstrap";
import { HomeBlock } from "./Home";
import ContactImage from "./../Assets/Images/ContactImage.png";
import { Row, Col } from "antd";

export default function Contact() {
 
  return (
    <HomeBlock className="aboutBlock">
      <div
        className="block aboutBlock"
        style={{
          paddingLeft: "0px !important",
          paddingRight: "0px !important",
        }}
      >
        <div className="container  ">
          <div className="titleHolder">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <Row gutter={[24, 16]}>
          <Col span={12}>
            <div className="w-75 h-75">
              <img className="w-100" src={ContactImage} alt="" />
            </div>
          </Col>
          <Col span={12}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone Number" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Message"/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </HomeBlock>
  );
}
