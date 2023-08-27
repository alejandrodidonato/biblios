import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faMagnifyingGlass, faRightLeft, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import {Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
         <Navbar fixed="bottom">
            <Container>
            <Nav className="mx-auto">
                <Nav.Link as={NavLink} to="/"><FontAwesomeIcon icon={faHouseChimney} className='icono-navbar fa-xl' /></Nav.Link>
                <Nav.Link as={NavLink} to="/search"><FontAwesomeIcon icon={faMagnifyingGlass} className='icono-navbar fa-xl' /></Nav.Link>
                <Nav.Link as={NavLink} to="/matches"><FontAwesomeIcon icon={faRightLeft} className='icono-navbar fa-xl' /></Nav.Link>
                <Nav.Link as={NavLink} to="/profile"><FontAwesomeIcon icon={faUserLarge} className='icono-navbar fa-xl' /></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <Outlet></Outlet>
    </>
  )
}

export default NavBar