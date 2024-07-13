import React from 'react'
import './../../Styles/Home.scss'
import styled from 'styled-components'
import { Row } from 'react-bootstrap'
import { Col , Button} from 'react-bootstrap';
import FrontPageImage from './../../Assets/Images/FrontPageImage.png'

export default function Front() {
  return (
    <>
    <Row id='divFront'>
        <Col className='px-3 pt-3 d-md-flex flex-column  justify-content-center  h-100'>
            <Row className=' mb-3'>
                <h1 style={{fontSize: '3.5rem'}}>I'm <strong style={{color: "#8bc4fd"}}> Muhammad Subhan </strong></h1>
            </Row>
            <Row className='' style={{fontSize: "medium", textAlign: "justify" ,textJustify : 'inter-word'}}>
              <p>This website is all about Website Development, Technical, Tips and Tricks, Designs Principle, Source Code sales and Programming videos in the Hindi Language.
              </p>
            </Row>
            <Row className=' d-lg-flex '>
              <Button style={{width: "40%"}}>Contact Me</Button>
              <Button className='mx-3' variant = "outline-primary" style={{width: "40%"}}>Click</Button>
            </Row>
        </Col>
        <Col className='  d-flex  justify-content-center' >
          <div className='h-100 w-50' style={{backgroundImage: `url(${FrontPageImage})`, backgroundSize: "contain", backgroundRepeat:"no-repeat"}}></div>
        </Col>
      </Row>
      <Row id='links'> 
        <Col className='h-100  col-6 align-items-center d-flex flex-row justify-content-between'>
            <Link>
            Facebook
            </Link>
            <Link>
            Instagram
            </Link>
            <Link>
            Linkedin
            </Link>
            <Link>
            Twitter
            </Link>
        </Col>
      </Row>
      </>
  )
}


const Link = styled.div`
  color: white;
`

