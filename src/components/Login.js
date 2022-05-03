import React from "react";
import Header from './Header';
import Footer from './Footer'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col"
import { Row } from "react-bootstrap";
import { useState } from "react";
import './../assets/styles/Login.css'

import GoUsers from "./GoUsers";

const Login = () => {

    const [isLogged, setIsLogged] = useState(false)

    const Submit =(event)=>{
      event.preventDefault();
      setIsLogged(true)
      document.getElementById('login').style.display='none'
      document.getElementById('login').style.visibility='false'
      
     
    };

    return(
        <div className="App">
      <Header />
      <div className='container'>
        <Row className='justify-content-center'>
          <Col xs={10} sm={11} md={511} lg={11} xl={11}>
            <Form onSubmit={ Submit } id='login'>
              <h1 className='title'>Ingresa tus datos</h1>
              <Form.Group className="input__Text" controlId="formBasicEmail">
                  <Form.Label>Usuario</Form.Label>
                  <Row className="justify-content-center">
                      <Col xs={12} sm={7} md={7} lg={7} xl={7}>
                      <Form.Control required type="email" placeholder="Ingresa tu correo" />
                      </Col>
                  </Row>
              </Form.Group>
              <Form.Group className="input__Text" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Row className="justify-content-center">
                      <Col  xs={12} sm={7} md={7} lg={7} xl={7}>
                      <Form.Control required type="password" placeholder="Ingresa tu contraseña" />
                      </Col>
                  </Row>
              </Form.Group>
              <Button id="custom-btn" type="submit">
                Iniciar Sesión
              </Button>
            </Form>
            {isLogged ? <GoUsers/>: undefined}

          </Col>
        </Row>
      </div>
      <Footer />
    </div>
    )
}

export default Login