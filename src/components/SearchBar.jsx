import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {Form, FormControl, Row, Col, Button } from 'react-bootstrap'
import useBook from '../hooks/useBook';
import { Outlet, useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const { search, dataSearch, getBookList, loading } = useBook()

    const { query } = search

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()
        getBookList(query, loading)
        navigate("list", { replace: true });
    }

  return (
      <>
      
        <div className='search-bar mt-4'>
            <Form onSubmit={handleSubmit} >
                <Row className='justify-content-center'>
                    <Col xs='8'>
                    <FormControl placeholder='Buscar por título, autor...' type="text" name="query" onChange={dataSearch} value={query} className='rounded-0' id="input-search"/>
                    </Col>
                    <Col xs='auto'>
                        <Button type="button" className='btn rounded-0' id="btn-filter"> <FontAwesomeIcon icon={faFilter} className='fa-lg' /></Button>  
                    </Col>
                    <Col xs='auto'>
                            <Button type="submit" className='btn rounded-0' id="btn-search"> <FontAwesomeIcon icon={faMagnifyingGlass} className='fa-lg' /></Button>
                    </Col>
                </Row>
            </Form>
        </div>
        <Outlet></Outlet>
      </>
        
  )
}

export default SearchBar