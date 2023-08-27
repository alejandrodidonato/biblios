import {React, useState} from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Container, Row, Col } from 'react-bootstrap'
import useLocation from '../hooks/useLocation'

const containerStyle = {
  width: '100%',
  height: '400px'
};


const Map = () => {


  const {latlong} = useLocation()


  return (
        <>
           <Container className="mx-auto">
            <Row className='justify-content-center mx-auto'>
                <Col xs={12} >
                <LoadScript
      googleMapsApiKey="AIzaSyAnyZwuyjsG3Ece1XxgbCT5tT2Q7PSZBfE"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center= { latlong }
        marker={ latlong }
        zoom={15}
        options={{ mapId: 'a804006995f7dca8' }}
      >
        
      </GoogleMap>
    </LoadScript>
                </Col>
                   
            </Row>
           </Container>
        </>
  )
}

export default Map