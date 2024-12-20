import React, { useState, useRef, useContext } from 'react';
import createBill from '../api/createBill';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

export default function AddBill({ project, members, setAddBill }) {
    const { setIsLogged } = useContext(AuthContext);
    // obtener el token
    const accessToken = sessionStorage.getItem('access-token');
    const navigate = useNavigate();
    // Refs para inputs principales
    const descriptionRef = useRef(null);
    const dateRef = useRef(null);
    const amountRef = useRef(null);
    const fileInputRef = useRef(null);

    // Refs dinámicas para las contribuciones de los miembros
    const memberRefs = useRef({});

    // Estado para el archivo seleccionado
    const [archivo, setArchivo] = useState(null);
    const handleFileChange = (e) => {
        const seleccionado = e.target.files[0];
        if (seleccionado) {
            setArchivo(seleccionado); // Guardar el archivo seleccionado
        }
    };
    const deleteFile = () => {
        setArchivo(null); // Resetear el archivo
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Reiniciar el valor del input de archivo
        }
    };

    // Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Obtener valores de los inputs principales
        const description = descriptionRef.current.value;
        const date = dateRef.current.value;
        const totalAmount = amountRef.current.value;
        const file = fileInputRef.current.value;
        // Obtener valores de las contribuciones de los miembros como una lista de objetos
        const contributors = members.map(member => ({
            'id_user': parseInt(member.id),
            'partial_amount': parseFloat(memberRefs.current[member.id]?.value || 0)
        })).filter(contributor => contributor.partial_amount > 0);;
        try {
            const data = await createBill(accessToken, project.id, description, date, totalAmount, contributors, file);
            if (data.status===201) {
                Swal.fire({
                    icon: "success",
                    title: "Gasto subido",
                    text: "¡Gasto registrado exitosamente!",
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
            }
        } catch (error) {
            console.error("Error al subir gasto");
        }

    };

    return (
        <div className='addbill-container'>
            <form action='' onSubmit={handleSubmit} className='addbill-form'>
                <section className='title-section'>
                    <h3 className='title'>AÑADIR GASTO</h3>
                    <h4 className='subtitle'>a {project.name}</h4>
                </section>
                <section className='bottom-section'>
                    <article className='inputs-article'>
                        <input
                            type='text'
                            name='description'
                            id='description'
                            ref={descriptionRef}
                            className='input'
                            placeholder='Descripción'
                        />
                        <input
                            type='date'
                            name='date'
                            id='date'
                            ref={dateRef}
                            className='input'
                        />
                        <span className='amount-span'>
                            <p className='text'>$</p>
                            <input
                                type='number'
                                name='amount'
                                id='amount'
                                ref={amountRef}
                                className='amount-input'
                                placeholder='0000.00'
                            />
                        </span>
                    </article>
                    <article className='distribution-article'>
                        <p className='title'>Pagado por</p>
                        <div className='div'>
                            {members.map((member) => (
                                <div
                                    key={member.id}
                                    className="member-div"
                                    aria-label={`Miembro ${member.username}`}
                                >
                                    <label htmlFor={`member-${member.id}`} className='member-name'>{member.username}</label>
                                    <input
                                        type="number"
                                        id={`member-${member.id}`}
                                        className='member-contribution'
                                        placeholder='0.00'
                                        ref={(el) => (memberRefs.current[member.id] = el)}
                                    />
                                </div>
                            ))}
                        </div>
                    </article>
                    <article className='buttons-article'>
                        {archivo ? (
                            <div className='file-div'>
                                <span className='file-name'>{archivo.name}</span>
                                <button
                                    type='button'
                                    className='delete-btn'
                                    onClick={deleteFile}
                                >
                                    ✖
                                </button>
                            </div>
                        ) : (
                            <div className='addfile-div'>
                                <button
                                    type='button'
                                    className='addfile-btn'
                                    onClick={() => fileInputRef.current.click()}
                                >
                                    ADJUNTAR TICKET
                                </button>
                                <input
                                    id='input-file'
                                    type='file'
                                    accept='image/png, image/jpeg'
                                    ref={fileInputRef}
                                    className='addfile-input'
                                    onChange={handleFileChange}
                                />
                            </div>
                        )}
                        <button type='submit' className='addbill-btn'>REGISTRAR GASTO</button>
                        <button
                            type='button'
                            className='cancel-btn'
                            onClick={() => setAddBill('hide')}
                        >
                            CANCELAR
                        </button>
                    </article>
                </section>
            </form>
        </div>
    );
}