import React, { useState } from 'react'

import logo from '../assets/brand/billist-logo.png';
import title from '../assets/brand/billist-title.png';
import { Link } from 'react-router-dom';

export default function Header() {
    const [logged, setLogged] = useState(false);
    return (
        <div>
            <div className="header-top">
                <Link to='/'> <img src={logo} alt="Billist Logo" className="header-logo" onClick={()=>{
                    setLogged(false);
                }} /> </Link>
                <Link to='/'> <img src={title} alt="Billist Title" className="header-title" onClick={()=>{
                    setLogged(false);
                }} /> </Link>
            </div>
            {logged === false &&
                <div className='header-bottom'>
                    <Link to="/access?mode=login" className='header-button' onClick={()=>{
                        setLogged(true);
                    }}>INICIAR SESIÓN</Link>
                    <Link to="/access?mode=signup" className='header-button' onClick={()=>{
                        setLogged(true);
                    }}>REGISTRARSE</Link>
                </div>
            }
        </div>
    )
}