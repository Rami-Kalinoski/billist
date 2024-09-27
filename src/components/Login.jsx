import React from 'react'

export default function Login() {
    return (
        <section className='login-section'>
            <article className='top-article'>
                <h2>Iniciar sesión</h2>
                <form action="" className='login-form'>
                    <div className='inputs-div'>
                        <input type="email" placeholder='Dirección email' className='input' />
                        <input type="password" placeholder='Contraseña' className='input' />
                    </div>
                    <button className='login-button'>INICIAR SESION</button>
                </form>
            </article>
            <article className='bottom-article'>
                <p>No tienes una cuenta? <button className='goto-signup'>Regístrate</button></p>
            </article>
        </section>
    )
}