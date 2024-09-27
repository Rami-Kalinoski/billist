import React from 'react'

import userImg from '../assets/icons/user.png';
import addImg from '../assets/icons/add.png';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='home-screen'>
            <section className='left-section'>
                <article className='balance-article'>
                    <h2 className='balance-title'>SALDO GENERAL PENDIENTE</h2>
                    <div className='balance-content'>
                        <p className='value'>$ 8500.00</p>
                        <p className='text'>debes</p>
                    </div>
                </article>
                <article className='friends-article'>
                    <div className='title-div'>
                        <h2 className='friends-title'>AMIGOS</h2>
                        <button className='add-friend-button'> <img src={addImg} alt="Add Friend" /> añadir amigo</button>
                    </div>
                    <div className='list-div'>
                        <ul>
                            <li className='friend-item'>
                                <img src={userImg} alt="User Icon" className='user-img' />
                                <p className='friend-name'>Carlos</p>
                            </li>
                            <li className='friend-item'>
                                <img src={userImg} alt="User Icon" className='user-img' />
                                <p className='friend-name'>Pedro</p>
                            </li>
                            <li className='friend-item'>
                                <img src={userImg} alt="User Icon" className='user-img' />
                                <p className='friend-name'>Susana</p>
                            </li>
                        </ul>
                    </div>
                </article>
            </section>
            <section className='right-section'>
                <article className='title-article'>
                    <h2 className='projects-title'>Proyectos</h2>
                    <button className='create-project-button'> <img src={addImg} alt="Create Icon" /> CREAR</button>
                </article>
                <article className='projects-list-article'>
                    <Link to='/manageProject' className='project-div'>
                        <h3 className='project-name'>Cancún 2024</h3>
                        <p className='project-balance owes'>debes $9500.00</p>
                    </Link>
                    {/* <div className='project-div'>
                        <h3 className='project-name'>Navidad 2024</h3>
                        <p className='project-balance lends'>prestaste $1000.00</p>
                    </div> */}
                </article>
            </section>
        </div>
    )
}