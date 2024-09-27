import React, { useState } from 'react'

import titleImg from '../assets/brand/billist-title.png';
import logoImg from '../assets/brand/billist-logo.png';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { Link, useLocation } from 'react-router-dom';

import users from '../js/database';

export default function Access() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const param = query.get('mode')!=null ? query.get('mode') : "login";
    const [mode, setMode] = useState(param);
    return (
        <div className='login-main-div'>
            {mode === "login" && 
                <section className='login-section'>
                    <article className='top-article'>
                        <h2>Iniciar sesión</h2>
                        <form action="" className='login-form'>
                            <div className='inputs-div'>
                                <input type="email" placeholder='Dirección email' id='email-login' className='input' />
                                <input type="password" placeholder='Contraseña' id='pw-login' className='input' />
                            </div>
                            <Link to="/home" className='login-button' onClick={()=>{
                                const email = document.querySelector("#email-login").value;
                                const password = document.querySelector("#pw-login").value;
                                let pass = false;
                                users.forEach((user)=>{
                                    if (user.email===email) {
                                        pass = user.pw===password ? true : false;
                                    }
                                });
                                if (pass===false) {
                                    window.location.reload();
                                }
                            }}>INICIAR SESION</Link>
                        </form>
                    </article>
                    <article className='bottom-article'>
                        <p>No tienes una cuenta? <button className='goto-signup' onClick={()=>{
                            setMode("signup");
                        }}>Regístrate</button></p>
                    </article>
                </section>
            }
            <section className='banner-section'>
                <img src={titleImg} alt="Billist Title" className='banner-title' />
                <img src={logoImg} alt="Billist Logo" className='banner-logo' />
                <p>El lugar para gestionar los gastos de tus proyectos con amigos</p>
            </section>
            {mode === "signup" &&
                <section className='signup-section'>
                    <article className='top-article'>
                        <h2>Crear nueva cuenta</h2>
                        <form action="" className='signup-form'>
                            <div className='inputs-div'>
                                <input type="text" placeholder='Nombre' className='input' />
                                <input type="email" placeholder='Dirección email' className='input' />
                                <input type="password" placeholder='Contraseña' className='input' />
                            </div>
                            <Link to="/home" className='signup-button'>CREAR CUENTA</Link>
                        </form>
                    </article>
                    <article className='bottom-article'>
                        <p>¿Ya tienes una cuenta? <button id="goto-login-btn" className='goto-login' onClick={()=>{
                            setMode("login");
                        }}>Inicia sesión</button></p>
                    </article>
                </section>
            }
        </div>
    )
}