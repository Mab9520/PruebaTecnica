import React from "react";
import './../assets/styles/Footer.css'
import instagram  from './../assets/images/instagram-brands.svg'
import linkedin  from './../assets/images/linkedin-brands.svg'
import github  from './../assets/images/github-brands.svg'

function Footer(){
    return(
        <div className="footer">
            <p>Desarrollado por Galindo Núñez Mabel</p>
            <div className="redes">
            <p><a  href="https://www.linkedin.com/in/mabelgalindonunez/" target="_blank" rel="noreferrer" title="Mabel Galindo Núñez"><img className="img-icon" src = {linkedin} alt="Instagram"></img></a></p>
            <p><a  href="https://github.com/Mab9520" target="_blank" rel="noreferrer"><img className="img-icon" src = {github} alt="Instagram"></img></a></p>
            <p><a  href="https://www.instagram.com/mabign/" target="_blank" rel="noreferrer"><img className="img-icon" src = {instagram} alt="Instagram"></img></a></p>
            </div>
        </div>
    )

}
export default Footer