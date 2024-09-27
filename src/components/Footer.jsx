import React from 'react'

import location from '../assets/icons/location.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <Link to="/" className="landing-page-link">QUÉ ES BILLIST</Link>
                <p>Este es un proyecto para la universidad <a href="https://www.uade.edu.ar/" target='_blank' className="uade-link">UADE</a> </p>
            </div>
            <div className="footer-bottom">
                <p className="location"> <img src={location} alt="Location" /> Argentina </p>
                <p className="developed-by-text">Desarrollado por <a href="" target='_blank'>Federico Torlaschi</a> y <a href="https://github.com/Rami-Kalinoski" target='_blank'>Ramiro Kalinoski</a> </p>
            </div>
        </div>
    )
}