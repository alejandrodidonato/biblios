import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import useBook from '../hooks/useBook';
import { Row, Col, Container, Image, Button } from 'react-bootstrap'

const Book = () => {

  const { bookData, loading, userBooks, setUserBooks, userSearched, setUserSearched } = useBook()

  const params = useParams()

  const navigate = useNavigate();

  const handleAddBook = () => {
    const newBook = {
      id: bookData[params.id].id,
      image: bookData[params.id].volumeInfo.imageLinks.thumbnail,
    }

    setUserBooks([...userBooks, newBook])
    navigate("/profile", { replace: true });
  }

  const handleAddSearched= () => {
    const newSearched = {
      id: bookData[params.id].id,
      image: bookData[params.id].volumeInfo.imageLinks.thumbnail,
    }

    setUserSearched([...userSearched, newSearched])
    navigate("/profile", { replace: true });
  }

  

  return (
        <>
    
          <Container fluid className="my-4 mx-1 book-info">
            <Row className="justify-content-center">
              <Col className='mx-1'>
                <h1 className='book-title'>{ bookData[params.id].volumeInfo.title }</h1>
                <h2 className='book-author'>{ bookData[params.id].volumeInfo.authors }</h2>
                <h3 className='book-year'>{ bookData[params.id].volumeInfo.publishedDate.slice(0,4) }</h3>
                <h4 className='book-publisher'>{ bookData[params.id].volumeInfo.publisher}</h4>
              </Col>
              <Col className='mx-1'>
                <Image fluid src={ bookData[params.id].volumeInfo.imageLinks.thumbnail } className='book-image' />
              </Col>
            </Row>
            <Row className="justify-content-center mt-4">
              <Col className='mx-1'>
                <p className='book-description'>{ bookData[params.id].volumeInfo.description } </p>
              </Col>
            </Row>
          </Container>
          <Container fluid className="my-4 mx-auto">
            <Row className="justify-content-center mx-2 separator">
              <Col className='p-0'>
                <h5>Usuarios con este libro</h5>
                <ul className='book-users-list'>
                  <li>Juan Perez - <i>Liniers (a 2km)</i>  </li>
                  <li>Laura Gomez - <i>CABA (a 4km)</i></li>
                  <li>Roberto Fernandez - <i>Morón (a 6km)</i></li>
                </ul>
              </Col>
            </Row>
          </Container>
          <Container fluid className="my-4 mx-auto">
            <Row className="justify-content-center mx-2">
              <Col>
                <Button className='btn-book' onClick={handleAddBook}>
                Agregar a Mi Biblioteca
                </Button>
                
              </Col>
              <Col>
              <Button className='btn-book' onClick={handleAddSearched}>Agregar a Mis Buscados</Button>
              </Col>
              
            </Row>
          </Container>

        </>

  )
}

export default Book