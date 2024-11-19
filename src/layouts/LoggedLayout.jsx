import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import title from '../assets/title.png';
import logo from '../assets/logo.png';
import location from '../assets/icons/location.png';

export default function LoggedLayout() {
    const logged = JSON.parse(localStorage.getItem('isLogged'));

    return (
        <div>
            <header className='header'>
                <a href="." className='title-anchor'> <img src={title} alt="Título Billist" className='title-img' /> </a> {/* falta poner el link*/}
                <a href="." className='logo-anchor'> <img src={logo} alt="Logo Billist" className='logo-img' /> </a> {/* falta poner el link*/}
                <div className='btns-container'>
                    {!logged && (
                        <div className='btns-div display-none'>
                            <button type='button' className='btn'>Iniciar Sesión</button>
                            <button type='button' className='btn purple'>Registrarse</button>
                        </div>
                    )}
                    {logged && (
                        <div className='logged-div'>
                        <Link to='/dashboard' className='dashboard-btn'>Ir al dashboard</Link>
                        <div className='user-btn-div'>
                            <button type='button' className='user-name'>VARIABLE</button> {/* falta traer y poner el nombre del usuario*/}
                            <button type='button' className='user-img'>VARIABLE</button> {/* falta traer y poner la foto del usuario*/}
                        </div>
                    </div>
                    )}
                </div>
            </header>
            <main className='logged-main'>
                <Outlet />
            </main>
            <footer className='footer'>
                <section className='top-section'>
                    <article className='left-article'>
                        <Link to='/'>QUÉ ES BILLIST</Link>
                    </article>
                    <article className='right-article'>
                        <p>Este es un proyecto para la universidad <a href="https://www.uade.edu.ar/" rel='noreferrer' target='_blank'>UADE</a></p> {/* investigar qué es eso del noreferrer */}
                    </article>
                </section>
                <section className='bottom-section'>
                    <article className='left-article'>
                        <p> <img src={location} alt="Localización" /> Argentina</p>
                    </article>
                    <article className='right-article'>
                        <p>Desarrollado por <a href="." rel='noreferrer' target='_blank'>Federico Torlaschi</a> y <a href="https://github.com/Rami-Kalinoski" rel='noreferrer' target='_blank'>Ramiro Kalinoski</a> </p> {/* faltan poner los links, investigar qué es eso del noreferrer */}
                    </article>
                </section>
            </footer>
        </div>
    )
}