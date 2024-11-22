import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import create from '../assets/icons/create.png';
import addFriend from '../assets/icons/add-firend.png';
import profile from '../assets/icons/profile.png';

import fetchFriends from '../api/friends';
import fetchProjects from '../api/projects';
import fetchBalance from '../api/balance';

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
        <main>
            <section>
                <article>
                    <div>
                        <h3>SALDO GENERAL PENDIENTE</h3>
                    </div>
                    <div>
                        <p>$ <p>VARIABLE</p> </p>
                        <p> VARIABLE </p>
                    </div>
                </article>
                <article>
                    <div>
                        <p>AMIGOS</p>
                        <button type='button'> <img src={addFriend} alt="Agregar amigo" /> añadir amigo</button>
                    </div>
                    <div className="friends-div"> {/* lista de amigos */}
                        {friends.map(friend => (
                            <div key={friend.id} className="div">
                                <img
                                    src={friend.imgProfile || profile}
                                    alt="Amigo"
                                    className="img"
                                />
                                <p className="text">{friend.username}</p>
                            </div>
                        ))}
                    </div>
                </article>
            </section>
            <section>
                <article>
                    <h3>Proyectos</h3>
                    <Link to='/createProject'> <img src={create} alt="Crear proyecto" /> CREAR</Link>
                </article>
                <article>
                <article className="projects-article"> {/* lista de proyectos */}
                        {projects.map(project => (
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
                        ))}
                    </article>
                </article>
            </section>
        </main>
    )
}