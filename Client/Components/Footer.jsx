import React from "react";
import { HomeBlock } from "../Pages/Home";
import {Row, Col} from 'antd'
import NavLinks from "./NavLinks";
import Logo from './../Assets/Images/LOGOReal.png'
import styled from "styled-components";

export default function FooterComp() {
  return (
    <HomeBlock className="mt-3" style={{height: '10rem'}}>
      <Row  >
        <Col span={12} >
        <ImageContainer className="mx-auto"/>
        </Col>
        <Col span={12} className="">
        <NavLinks color='#b0b0b0' />
        </Col>

      </Row>
      <Row className="h-50">
        <Col span={24} className="h-100  d-flex justify-content-center align-items-center">
            <Copyright className="  d-flex justify-content-center w-25">© Copyright 2024, All rights reserved!</Copyright>
        </Col>
        
      </Row>
    </HomeBlock>
  );
}


const ImageContainer = styled.div`  
    background-image: url(${Logo});
    height: 3rem;
    background-size: contain;
    width: 25%;
    background-repeat: no-repeat;
`
const Copyright = styled.div`
    color: #b0b0b0;
`