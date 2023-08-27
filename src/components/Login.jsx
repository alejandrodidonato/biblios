import { React, useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import Loading from './Loading'

const Login = () => {

    const { userAuth, dataUser, logIn, loading, userLogin } = useAuth()

    const navigate = useNavigate()

    const [error, setError ] = useState()


    const handleSubmit = async(e) => {

        e.preventDefault()

        setError('')

        try {
            
            await logIn(userLogin.email, userLogin.password)
            navigate('/')

        } catch(error) {

            if ( error.code === "auth/user-not-found")
            {
                setError('El usuario ingresado no existe.');
            } else if ( error.code === "auth/wrong-password")
            {
                setError('La contraseña no es correcta.');
            } else if ( error.code === "auth/internal-error")
            {
                setError('Se debe ingresar la contraseña.');
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
        
             <Container fluid className="mx-auto d-flex flex-column min-vh-100 justify-content-between">
                <Row className='mt-4'>
                   <Image fluid src="../img/trama.svg"/>
                </Row>
                <Row>
                   <Image fluid src="../img/logo-register-login.png"/>
                   <h1 className='text-center title-form mt-3'>¡Hola de nuevo!</h1>
                   <p className='text-center subtitle-form'>Ingresá con tu email y password.</p>
                </Row>

                        
                        <Form onSubmit={handleSubmit} className='text-center mx-4 mt-2 d-flex flex-column justify-content-between form-login'>
                            <div className=''>
                                <Form.Group className="mb-4 pb-4" controlId="formBasicEmail">
                                    <Form.Control className="field-register-log" type="email" placeholder="Email" name="email" onChange={dataUser} />
                                </Form.Group>

                                <Form.Group className="mb-5 input-txt" controlId="formBasicPassword">
                                    <Form.Control  className="field-register-log"  type="password" placeholder="Password" name="password" onChange={dataUser} />
                                </Form.Group>

                                {error &&
                                    <Form.Text>
                                    <p className='invalid'> {error} </p>
                                    </Form.Text>
                                    }

                                <Form.Text className=''>
                                    ¿No tenés una cuenta? <Link to='/register' replace={true} className='link-login'>Registrate</Link>
                                </Form.Text>
                            </div>
                            <Button type="submit" className='btn-submit mb-5'>
                                Ingresar
                            </Button>
                                
                        </Form>
                        
                
            </Container>
}
        </>
  )
}

export default Login