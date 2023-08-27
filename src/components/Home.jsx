import React from 'react'
import { Row, Col, Container, Image, Button } from 'react-bootstrap'

const Home = () => {


  return (
        <>
            <Container>
              <Row>
                <Col>
                <Image fluid src='../img/home.svg' className='img-example' />
                </Col>
              </Row>
              
            </Container>
        </>
  )
}

export default Home