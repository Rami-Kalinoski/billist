import React, { useState, useRef, useContext  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import signup from '../api/signup';
import login from '../api/login';
import Swal from 'sweetalert2';

export default function Signup() {
    const { setIsLogged } = useContext(AuthContext);
    // botón "limpiar"
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

    // botón "registrarse"
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => { setUsername(e.target.value); };
    const handleEmailChange = (e) => { setEmail(e.target.value); };
    const handlePasswordChange = (e) => { setPassword(e.target.value); };
    const handleConfirmPasswordChange = (e) => { setConfirmPassword(e.target.value); };
    const handleSubmit = async (e) => { // REGISTRARSE
        e.preventDefault();
        
        // si las contraseñas no coinciden
        if (password.trim()!==confirmPassword.trim()) {
            setError("Las contraseñas no coinciden.");
            console.log("Error 1")
            Swal.fire({
                icon: "warning",
                title: "Error",
                text: error,
                customClass: {
                    popup: "different-passwords-container",   // clase para el contenedor principal
                    title: "different-passwords-title",       // clase para el título
                    confirmButton: "different-passwords-btn", // clase para el botón de confirmación
                    htmlContainer: "different-passwords-text" // clase para el contenido
                }
            });
        } else {
            try {
                const response = await signup(username, email, password);
                if (response.status === 201) {
                    const responseLogin = await login(email, password);
                    sessionStorage.setItem('access-token', responseLogin.token);
                    setIsLogged(true);
                    Swal.fire({
                        icon: "success",
                        title: "Registro exitoso",
                        text: "¡Usuario registrado exitosamente!",
                        customClass: {
                            popup: "different-passwords-container",   // clase para el contenedor principal
                            title: "different-passwords-title",       // clase para el título
                            confirmButton: "different-passwords-btn", // clase para el botón de confirmación
                            htmlContainer: "different-passwords-text" // clase para el contenido
                        },
                        allowOutsideClick: false, // Desactiva clics fuera de la alerta.
                        allowEscapeKey: false,    // Desactiva Escape.
                        showConfirmButton: false,  // Quita el botón de confirmación.
                        timer: 2990, // cierre automático
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading();
                        },
                        willClose: () => {
                        }
                        }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log("I was closed by the timer");
                        }
                    });
                    setTimeout(() => {
                        navigate('/dashboard');
                    }, 3000);
                } else if (response.message === 'El email ya está registrado') {
                    // si el email ya existe
                    setError("Este email ya tiene asociada una cuenta en Billist.");
                    console.log("Error 2")
                    Swal.fire({
                        icon: "warning",
                        title: "Error",
                        text: error,
                        customClass: {
                            popup: "different-passwords-container",   // clase para el contenedor principal
                            title: "different-passwords-title",       // clase para el título
                            confirmButton: "different-passwords-btn", // clase para el botón de confirmación
                            htmlContainer: "different-passwords-text" // clase para el contenido
                        }
                    });
                } else if (response.message === 'Nombre de usuario en uso') {
                    // si el username ya existe
                    setError("Este nombre de usuario ya existe en Billist.");
                    console.log("Error 3")
                    Swal.fire({
                        icon: "warning",
                        title: "Error",
                        text: error,
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
                    console.log("Error 4")
                    Swal.fire({
                        icon: "warning",
                        title: "Error inesperado",
                        text: "Ocurrió un problema al intentar registrarte. Por favor, inténtalo más tarde.",
                        customClass: {
                            popup: "different-passwords-container",   // clase para el contenedor principal
                            title: "different-passwords-title",       // clase para el título
                            confirmButton: "different-passwords-btn", // clase para el botón de confirmación
                            htmlContainer: "different-passwords-text" // clase para el contenido
                        }
                    });
                }
            } catch (error) {
                // si ocurre otro tipo de error
                setError(error);
                console.log("Error 5")
                Swal.fire({
                    icon: "warning",
                    title: "Error inesperado",
                    text: "Ocurrió un problema al intentar registrarte. Por favor, inténtalo más tarde.",
                    customClass: {
                        popup: "different-passwords-container",   // clase para el contenedor principal
                        title: "different-passwords-title",       // clase para el título
                        confirmButton: "different-passwords-btn", // clase para el botón de confirmación
                        htmlContainer: "different-passwords-text" // clase para el contenido
                    }
                });
            }
        }
    }

    return (
        <main className='signup-main'>
            <form action="" className='form' onSubmit={handleSubmit}>
                <h2 className='title'>Registrarse</h2>
                <div className='inputs-div'>
                    <div className='input-div'>
                        <label htmlFor="signup_username-input" className='label'>Nombre de usuario</label>
                        <input type="text" name="username" id="signup_username-input" className='input' ref={usernameInput} onChange={handleUsernameChange} />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="signup_email-input" className='label'>Correo electrónico</label>
                        <input type="email" name="email" id="signup_email-input" className='input' ref={emailInput} onChange={handleEmailChange} />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="signup_password-input" className='label'>Contraseña</label>
                        <input type="password" name="password" id="signup_password-input" className='input' ref={passwordInput} onChange={handlePasswordChange} />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="signup_confirm-password-input" className='label'>Confirmar contraseña</label>
                        <input type="password" name="confirm-password" id="signup_confirm-password-input" className='input' ref={confirmPasswordInput} onChange={handleConfirmPasswordChange} />
                    </div>
                </div>
                <div className='btns-div'>
                    <button type='button' className='btn limpiar-btn' onClick={handleClear}>Limpiar</button>
                    <button type='submit' className='btn ingresar-btn'>Registrarse</button>
                </div>
                <div className='anchors-div'>
                    <Link to="/login" className='anchor'>¿Ya tienes una cuenta? Inicia sesión aquí</Link> {/* falta poner la dirección*/}
                </div>
            </form>
            {/* CARTELES ------------------------------------------------------------------------------------------------------------------------ */}
            {/* <div>
                <div>
                    <h3>CONTRASEÑAS</h3>
                </div>
            </div> */}
        </main>
    )
}