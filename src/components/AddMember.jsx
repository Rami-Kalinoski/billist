import React, { useRef, useContext } from 'react';
import addMember from '../api/addMember';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

export default function AddBill({ project, email, setAddMember }) {
    const { setIsLogged } = useContext(AuthContext);
    // obtener el token
    const accessToken = sessionStorage.getItem('access-token');
    const navigate = useNavigate();
    // Refs para inputs principales
    const emailRef = useRef(null);

    // Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await addMember(accessToken, project.id, email);
            if (data.status===201) {
                Swal.fire({
                    icon: "success",
                    title: "Nuevo Miembro",
                    text: "¡El nuevo miembro ha sido agregado exitosamente!",
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
                setAddMember('hide'); // Ocultar formulario
                window.location.reload();
            }
        } catch (error) {
            console.error("Error al subir gasto");
        }
    };

    return (
        <div className='addmember-container'>
            <form action='' onSubmit={handleSubmit} className='addbill-form'>
                <section className='title-section'>
                    <h3 className='title'>AÑADIR INTEGRANTE</h3>
                    <h4 className='subtitle'>a {project.name}</h4>
                </section>
                <section className='bottom-section'>
                    <article className='inputs-article'>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            ref={emailRef}
                            className='input'
                            placeholder='Email'
                        />
                    </article>
                    <article className='buttons-article'>
                        <button type='submit' className='addbill-btn'>AGREGAR INTEGRANTE</button>
                        <button
                            type='button'
                            className='cancel-btn'
                            onClick={() => setAddMember('hide')}
                        >
                            CANCELAR
                        </button>
                    </article>
                </section>
            </form>
        </div>
    );
}