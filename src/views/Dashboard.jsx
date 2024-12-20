import React, { useEffect, useState, useContext  } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import create from '../assets/icons/create.png';
import addFriend from '../assets/icons/add-firend.png';
import profile from '../assets/icons/profile.png';

import fetchProjects from '../api/fetchProjects';
import fetchUserGeneralBalance from '../api/fetchUserGeneralBalance';
import validateToken from '../api/validateToken';

export default function Dashboard() {
    const { setIsLogged } = useContext(AuthContext);
    // obtener el token
    const accessToken = sessionStorage.getItem('access-token');

    // cargar información del usuario
    const [friends, setFriends] = useState([]);
    const [projects, setProjects] = useState([]);
    const [gralBalance, setGralBalance] = useState(0);
    const navigate = useNavigate();

    // AMIGOS
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             // cargar amigos
    //             const response = await fetchFriends(accessToken, setFriends);
    //             if (response.status === 201) {
    //                 navigate('/login');
    //             }
    //         } catch (error) {
    //             console.error("Error en la llamada a las APIs:", error);
    //         }
    //     })();
    // }, [accessToken, navigate]);
    // PROYECTOS
    useEffect(() => {
        (async () => {
            try {
                // cargar proyectos
                const response = await fetchProjects(accessToken, setProjects);
                if (response.status === 200) {
                    navigate('/login');
                }
            } catch (error) {
                console.error("Error en la llamada a las APIs:", error);
            }
        })();
    }, [accessToken, navigate]);

    // crear proyecto
    const handleCreateProject = async () => {
        try {
            // cargar proyectos
            const response = await validateToken(accessToken);
            if (response.status === 200) {
                navigate('/createProject');
            } else {
                setIsLogged(false)
                Swal.fire({
                    icon: "warning",
                    title: "Sesión vencida",
                    text: "La sesión se ha vencido, deberás ingresar nuevamente, ¡Gracias!",
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
                    navigate('/login');
                }, 3000);
            }
        } catch (error) {
            console.error("Error en la llamada a las APIs:", error);
        }
    }


    // SALDO GENERAL PENDIENTE
    useEffect(() => {
        (async () => {
            try {
                const response = await fetchUserGeneralBalance(accessToken, setGralBalance);
            } catch (error) {
                console.error("Error al cargar el balance general pendiente", error);
            }
        })();
    }, [accessToken]);


    return (
        <main className='dashboard-main'>
            <section className='left-section'>
                <article className='general-balance-article'>
                    <div className='title-div'>
                        <h3 className='title'>SALDO GENERAL PENDIENTE</h3>
                    </div>
                    <div className='balance-div'>
                        {/* <p>$ <p>VARIABLE</p> </p>
                        <p> VARIABLE </p> */}
                        <p className='text owes'>$ <p className='text owes'>2.000 </p> </p>
                        <p className='sub-text owes'> debes </p>
                    </div>
                </article>
                <article className='friends-article'>
                    <div className='title-div'>
                        <p className='title'>AMIGOS</p>
                        <button className='add-friend-btn' type='button'><img src={addFriend} alt="Agregar amigo" className='img' /> añadir amigo</button>
                    </div>
                    <div className="friends-div"> {/* lista de amigos */}
                        {/* {friends.map(friend => (
                            <div key={friend.id} className="div">
                                <img
                                    src={friend.imgProfile || profile}
                                    alt="Amigo"
                                    className="img"
                                />
                                <p className="text">{friend.username}</p>
                            </div>
                        ))} */}
                        <div className="div">
                                <img
                                    src={profile}
                                    alt="Amigo"
                                    className="img"
                                />
                                <p className="text">Ramón</p>
                        </div>
                        <div className="div">
                                <img
                                    src={profile}
                                    alt="Amigo"
                                    className="img"
                                />
                                <p className="text">Juana</p>
                        </div>
                        <div className="div">
                                <img
                                    src={profile}
                                    alt="Amigo"
                                    className="img"
                                />
                                <p className="text">Carlos</p>
                        </div>
                    </div>
                </article>
            </section>
            <section className='right-section'>
                <article className='title-article'>
                    <h3 className='title'>Proyectos</h3>
                    <button type='button' onClick={handleCreateProject} className='create-project-btn'><img src={create} alt="Crear proyecto" className='img' /> CREAR</button>
                </article>
                <article className="projects-article"> {/* lista de proyectos */}
                    {projects.map(project => (
                        <Link
                            key={project.id}
                            to={`/project/${project.id}`}
                            className="project-link"
                            aria-label={`Ver proyecto ${project.name}`}
                        >
                            <p className="project-name">{project.name}</p>
                            <p
                                className={`project-balance ${
                                    project.balance > 0
                                        ? 'lends'
                                        : project.balance < 0
                                        ? 'owes'
                                        : 'payed'
                                }`}
                            >
                                {project.balance > 0
                                    ? `prestaste $${project.balance}`
                                    : project.balance < 0
                                    ? `debes $${Math.abs(project.balance)}`
                                    : 'no tienes deudas'}
                            </p>
                        </Link>
                    ))}
                </article>
            </section>
        </main>
    )
}