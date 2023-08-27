import {React, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Container, Image, Button } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'
import useLocation from '../hooks/useLocation'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import UserBooks from './UserBooks';




const Profile = () => {

  const { userAuth, logOut } = useAuth()

  const { city } = useLocation()

  const handleLogout = async () => {
    await logOut()
  }

  const {email } = userAuth

  const username = email.substring(0, email.lastIndexOf("@"));


  const navigate = useNavigate();

    const loadMap = () => {

        navigate("map", { replace: true });
    }

   



  return (
        <>
           
             <Container className='text-center card-profile'>
              <Row className="justify-content-left my-3 mx-auto">
                <Col xs="4" className="align-items-left">
                  <img src="../img/profile-example.png" className="rounded-circle img-profile" alt="Foto de perfil" />
                </Col>
                <Col xs="8" className='mt-2'>
                  <h1 className="text-white username-profile">{ username }</h1>
                  <button onClick={handleLogout} className="btn-profile btn-edit">
                    Editar perfil
                  </button>
                  <button onClick={handleLogout} className="btn-profile btn-logout">
                    Cerrar sesión
                  </button>
                  
                  <button className='location-profile ' onClick={loadMap}>
                    <FontAwesomeIcon icon={faLocationDot} className='fa-lg' />
                    <span>{ city }</span>
                  </button>
                 
                  
                </Col>
              </Row>
              
            </Container>
            <Outlet></Outlet>
            <UserBooks />
        </>
  )
}

export default Profile