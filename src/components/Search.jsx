import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { Row, Col, Card, Container, BreadcrumbItem } from 'react-bootstrap'
import useBook from '../hooks/useBook'
import Loading from './Loading'
import { Link } from 'react-router-dom';

const Search = () => {

    const { bookData, loading } = useBook()


  return (
        <>
            {
             loading ? <Loading /> : 
            <Container fluid className="mt-4">
                <Row xs={3} md={4} lg={6} className="g-1 justify-content-center mx-1">
                {Array.from(bookData).map((item,index) => (

                    <Col key={index}>
                        { item.volumeInfo.imageLinks ?

                        <Link to={"../book/" + index }>   
                            <Card>
                                <Card.Img variant="middle" src={item.volumeInfo.imageLinks&&item.volumeInfo.imageLinks.thumbnail} />
                            </Card>
                        </Link>
                        : <Card className="card-no-img">
                            <Card.Title className="search-card-title">{item.volumeInfo.title}</Card.Title>
                            <Card.Text className="search-card-author">{item.volumeInfo.authors}</Card.Text>
                            <Card.Text className="search-card-publisher">{item.volumeInfo.publisher}</Card.Text>
                            <Card.Img src="../img/logo.png" alt="Logo de Biblios"/>
                        </Card>
                        }
                    </Col>
                ))}
                </Row>
            </Container>
            }
        </>
  )
}

export default Search