import React from "react";
import PageTop from "./PageTop";
import { Col, Row } from "antd";
import login from './../Assets/Images/Login.png'
import { HomeBlock } from "./Home";
import { Form , Button} from "react-bootstrap";

export default function Login() {
  return (
    <>
      <PageTop title="Login" />
      <HomeBlock className="my-5">
      <Row style={{height: '30rem'}} gutter={[16, 16]}>
        <Col span={12} >
        <div className="w-75  mx-auto">
              <img className="w-100" src={login} alt="" />
            </div>
        </Col>  
        <Col className="px-5 pb-5" span={12}>
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
                Login Now
              </Button>
            </Form>
        
        </Col>
      </Row>
      </HomeBlock>
    </>
  );
}
