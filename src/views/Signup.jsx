import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const usernameInput = useRef(null);
    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const confirmPasswordInput = useRef(null);
    const handleClear = () => {
        if (usernameInput.current) {usernameInput.current.value = ''};
        if (emailInput.current) {emailInput.current.value = ''};
        if (passwordInput.current) {passwordInput.current.value = ''};
        if (confirmPasswordInput.current) {confirmPasswordInput.current.value = ''};
    }

    return (
        <main className='signup-main'>
            <form action="" className='form'>
                <h2 className='title'>Registrarse</h2>
                <div className='inputs-div'>
                    <div className='input-div'>
                        <label htmlFor="signup_username-input" className='label'>Nombre de usuario</label>
                        <input type="text" name="username" id="signup_username-input" className='input' ref={usernameInput} />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="signup_email-input" className='label'>Correo electrónico</label>
                        <input type="email" name="email" id="signup_email-input" className='input' ref={emailInput} />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="signup_password-input" className='label'>Contraseña</label>
                        <input type="password" name="password" id="signup_password-input" className='input' ref={passwordInput} />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="signup_confirm-password-input" className='label'>Confirmar contraseña</label>
                        <input type="password" name="confirm-password" id="signup_confirm-password-input" className='input' ref={confirmPasswordInput} />
                    </div>
                </div>
                <div className='btns-div'>
                    <button type='button' className='btn ingresar-btn'>Registrarse</button>
                    <button type='button' className='btn limpiar-btn' onClick={handleClear}>Limpiar</button>
                </div>
                <div className='anchors-div'>
                    <Link to="/login" className='anchor'>¿Ya tienes una cuenta? Inicia sesión aquí</Link> {/* falta poner la dirección*/}
                </div>
            </form>
        </main>
    )
}