import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import create from '../assets/icons/create.png';
import addFriend from '../assets/icons/add-firend.png';
import profile from '../assets/icons/profile1.png';

import fetchFriends from '../api/getFriendsFromUserById';
import fetchProjects from '../api/getProjectsFromUserById';
// import fetchBalance from '../api/balance';

export default function Dashboard() {
    const [friends, setFriends] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                // cargar amigos
                const friendsResponse = await fetchFriends();
                if (friendsResponse.status === 200) {
                    setFriends(friendsResponse.body.friendsList); // actualiza el estado de amigos
                } else {
                    console.error("Error al obtener amigos", friendsResponse.status);
                }
    
                // cargar proyectos
                const projectsResponse = await fetchProjects();
                if (projectsResponse.status === 200) {
                    setProjects(projectsResponse.body.projectsList); // actualiza el estado de proyectos
                } else {
                    console.error("Error al obtener proyectos", projectsResponse.status);
                }
            } catch (error) {
                console.error("Error en la llamada a las APIs:", error);
            }
        })();
    }, []);

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
                    <Link className='create-project-btn' to='/createProject'><img src={create} alt="Crear proyecto" className='img' /> CREAR</Link>
                </article>
                <article className="projects-article"> {/* lista de proyectos */}
                    {/* {projects.map(project => (
                        <Link
                            key={project.id}
                            to={`/projects/${project.id}`}
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
                    ))} */}
                    <Link
                            to={`/projects/1`}
                            className="project-link"
                            aria-label='Ver proyecto Cancún 2024'
                    >
                            <p className="project-name">Cancún 2024</p>
                            <p className='project-balance owes'>debes $5.000</p>
                    </Link>
                    <Link
                            to={`/projects/2`}
                            className="project-link"
                            aria-label='Ver proyecto Navidad 2024'
                    >
                            <p className="project-name">Navidad 2024</p>
                            <p className='project-balance payed'>no tienes deudas</p>
                    </Link>
                    <Link
                            to={`/projects/3`}
                            className="project-link"
                            aria-label='Ver proyecto Año nuevo 2025'
                    >
                            <p className="project-name">Año nuevo 2025</p>
                            <p className='project-balance lends'>prestate $3.000</p>
                    </Link>
                </article>
            </section>
        </main>
    )
}