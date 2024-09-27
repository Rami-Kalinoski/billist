import React from 'react'

import titleImg from '../assets/brand/billist-title.png';
import logoImg from '../assets/brand/billist-logo.png';

export default function Login() {
    const [signup, setSignup] = useState(true);
    return (
        <div className='login-main-div'>
            <section className='banner-section'>
                <img src={titleImg} alt="Billist Title" className='banner-title' />
                <img src={logoImg} alt="Billist Logo" className='banner-logo' />
                <p>El lugar para gestionar los gastos de tus proyectos con amigos</p>
            </section>
            <section className='signup-section'>
                <article className='top-article'>
                    <h2>Crear nueva cuenta</h2>
                    <form action="" className='signup-form'>
                        <div className='inputs-div'>
                            <input type="text" placeholder='Nombre' className='input' />
                            <input type="email" placeholder='Dirección email' className='input' />
                            <input type="password" placeholder='Contraseña' className='input' />
                        </div>
                        <button className='signup-button'>CREAR CUENTA</button>
                    </form>
                </article>
                <article className='bottom-article'>
                    <p>¿Ya tienes una cuenta? <button className='goto-login'>Inicia sesión</button></p>
                </article>
            </section>
            
        </div>
    )
}