import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import './../assets/styles/Usuarios.css';
import Col from "react-bootstrap/Col"
import Header from "./Header";
import Footer from "./Footer";

const Usuarios = () => {

    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false)

    const onClickHandler = () => {
        setLoading(true);
        axios.get('https://randomuser.me/api/')
        .then((response)=>{
            setUserData(response.data.results);
        }).catch((error) =>{
            setLoading(true)
        }).finally(()=>{
            setLoading(false)
        })
    }
    return (
       <div className="Usuarios">
           <Header/>
           <div className="container">
               <Row className="justify-content-center">
                   <Col xs={12} sm={11} md={11} lg={11} xl={11} xxl={11}>
                        <Button id="button-user" onClick= {onClickHandler}>Buscar usuario</Button>
                        <div>
                        {loading ? (<h1>loading...</h1>):(
                            <div>
                                {userData.map((user, index) =>{
                                return(
                                    <div>
                                        <Row className="justify-content-center">
                                        <Col xs={11} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                            <Card id="card-user">
                                            <Card.Img id="card-user-img" variant="top" src={user.picture.large} />
                                            <Card.Body>
                                                <Card.Title>{user.name.title + " " + user.name.first + " " + user.name.last}</Card.Title>
                                                <Card.Text>Gender: {user.gender}</Card.Text>
                                                <Card.Text>Phone: {user.cell}</Card.Text>
                                                <Card.Text>Email: {user.email}</Card.Text>
                                            </Card.Body>
                                            </Card>
                                        </Col>
                                        </Row>
                                    </div>
                                )
                                })}
                            </div>
                        )}
                        </div>
                   </Col>
               </Row>
           </div>
           <Footer/>
       </div>
    )
}

export default Usuarios