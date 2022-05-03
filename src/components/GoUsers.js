import React from "react";
import './../assets/styles/GoUsers.css'
import {
    Link
  } from "react-router-dom";
import  Button  from "react-bootstrap/Button";  

const GoUsers = () => {
    return(
        <div className="goUsers">
            <p>Da click en el botón para dirigirte a la app para entontrar un usuario</p>
            <Link id="link" to="/Usuarios"><Button id="custom-btn" type="submit">Usuarios</Button></Link>
        </div>
    )
}

export default GoUsers