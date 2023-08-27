import {React, useState } from 'react'
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import { Link, useNavigate, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import Loading from './Loading';

const Register = () => {

    const { userAuth, dataUser, signUp, userLogin, loading } = useAuth()

    const navigate = useNavigate()

    const [error, setError ] = useState()

    

    const handleSubmit = async(e) => {

        e.preventDefault()

        setError('')

        try {
            
            await signUp(userLogin.email, userLogin.password)
            navigate('/')

        } catch(error) {

            if ( error.code === "auth/internal-error")
            {
                setError('Se requiere una contraseña.');
            } else if ( error.code === "auth/email-already-in-use")
            {
                setError('El mail ingresado ya está siendo utilizado.');
            } else if ( error.code === "auth/weak-password")
            {
                setError('La contraseña debe tener al menos 6 caractéres.');
            } else if ( error.code === "auth/invalid-email")
            {
                setError('Se debe ingresar un mail válido.');
            } else
            {
                setError('Se produjo un error. Volvé a intentar más tarde.');
            }
                
        }
        
    }



  return (
        <>
        {
             userAuth != null ? <Navigate to="/" /> :
             loading ? <Loading /> : 

            <div>
            <Container fluid className="my-4 mx-auto">
                <Row className='mt-4 mb-4'>
                   <Image fluid src="../img/trama.svg"/>
                </Row>
                <Row className='mt-4 mb-4'>
                   <Image fluid src="../img/logo-register-login.png"/>
                </Row>
            </Container>
            <Container >
                <Row className='my-4'>
                   <h1 className='text-center title-form'>¡Bienvenido!</h1>
                   <p className='text-center subtitle-form'>Registrate para poder comenzar.</p>
                </Row>
            </Container>
            <Container fluid className="my-4 mx-auto">
                <Row className="justify-content-center mx-2">
                    <Col >
                    <Form onSubmit={handleSubmit} className='text-center'>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control className="field-register-log"  type="email" name="email" onChange={dataUser} placeholder="Email" />
                            
                            
                        </Form.Group>

                        <Form.Group className="mb-4 input-txt" controlId="formBasicPassword">
                            <Form.Control className="field-register-log"   type="password" name="password" onChange={dataUser} placeholder="Password" />
                            <Form.Control.Feedback type="invalid">
                                La contraseña tiene que tener al menos 6 caractéres.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4 input-txt" controlId="formBasicPasswordRepeat">
                            <Form.Control className="field-register-log"   type="password" placeholder="Repetir password" name="password-chek" />
                        </Form.Group>

                        {error &&
                            <Form.Text>
                               <p className='invalid'> {error} </p>
                            </Form.Text>
                            }

                        <Form.Text >
                            ¿Ya tenés una cuenta? <Link to='/login' replace={true} className='link-login'>Ingresá</Link>
                        </Form.Text>

                       

                        
                
                        <Button type="submit" className='btn-submit mt-4'>
                            Registrarme
                        </Button>
                        
                    </Form>
                    </Col>
                    
                </Row>
                
            </Container>
            </div>
}
        </>
  )
}

export default Register