import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../api/login';
import Swal from 'sweetalert2';

export default function Login() {
    // botón "limpiar"
    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const handleClear = () => {
        if (emailInput.current) {emailInput.current.value = ''};
        if (passwordInput.current) {passwordInput.current.value = ''};
    }

    // botón "ingresar"
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => { setEmail(e.target.value); };
    const handlePasswordChange = (e) => { setPassword(e.target.value); };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            if (response.status === 200) {
                sessionStorage.setItem('access-token', response.token);
                navigate('/dashboard');
            } else if (response.message === 'cuenta inexistente') {
                // si el email y contraseña no coinciden
                Swal.fire({
                    icon: "warning",
                    title: "Cuenta inexistente",
                    text: "El email o la contraseña son incorrectos.",
                    customClass: {
                        popup: "different-passwords-container",   // clase para el contenedor principal
                        title: "different-passwords-title",       // clase para el título
                        confirmButton: "different-passwords-btn", // clase para el botón de confirmación
                        htmlContainer: "different-passwords-text" // clase para el contenido
                    }
                });
            } else {
                // si ocurre otro tipo de error
                setError(response.message);
            }
        } catch (error) {
            // si ocurre otro tipo de error
            Swal.fire({
                icon: "warning",
                title: "Error inesperado",
                text: "Ocurrió un problema al intentar iniciar sesión. Por favor, inténtalo más tarde.",
                customClass: {
                    popup: "different-passwords-container",   // clase para el contenedor principal
                    title: "different-passwords-title",       // clase para el título
                    confirmButton: "different-passwords-btn", // clase para el botón de confirmación
                    htmlContainer: "different-passwords-text" // clase para el contenido
                }
            });
        }
    }

    return (
        <main className='login-main'>
            <form action="" className='form' onSubmit={handleSubmit}>
                <h2 className='title'>Iniciar Sesión</h2>
                <div className='inputs-div'>
                    <div className='input-div'>
                        <label htmlFor="login_email-input" className='label'>Correo electrónico</label>
                        <input type="email" name="email" id="login_email-input" className='input' ref={emailInput} onChange={handleEmailChange} />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="login_password-input" className='label'>Contraseña</label>
                        <input type="password" name="password" id="login_password-input" className='input' ref={passwordInput} onChange={handlePasswordChange} />
                    </div>
                </div>
                <div className='btns-div'>
                    <button type='button' className='btn limpiar-btn' onClick={handleClear}>Limpiar</button>
                    <button type='submit' className='btn ingresar-btn'>Ingresar</button>
                </div>
                <div className='anchors-div'>
                    <Link to="/signup" className='anchor'>¿Aún no te has registrado? Crea tu cuenta aquí</Link> {/* falta poner la dirección*/}
                    <Link to="." className='anchor'>¿Has olvidado tu contraseña? Recupérala aquí</Link> {/* falta poner la dirección*/}
                </div>
            </form>
        </main>
    )
}