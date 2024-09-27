import React from 'react'

export default function Signup() {
    return (
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
                    <p>¿Ya tienes una cuenta? <button id="goto-login-btn" className='goto-login'>Inicia sesión</button></p>
                </article>
        </section>
    )
}