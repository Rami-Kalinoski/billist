import React from 'react'

import logo from '../assets/brand/billist-logo.png';
import title from '../assets/brand/billist-title.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <div className="header-top">
                <Link to='/'> <img src={logo} alt="Billist Logo" className="header-logo" /> </Link>
                <Link to='/'> <img src={title} alt="Billist Title" className="header-title" /> </Link>
            </div>
            <div className='header-bottom'>
                <button>INICIAR SESIÓN</button>
                <button>REGISTRARSE</button>
            </div>            
        </div>
    )
}