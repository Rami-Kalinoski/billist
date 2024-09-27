import React, { useState } from 'react'

import userImg from '../assets/icons/user.png';
import addImg from '../assets/icons/add.png';
import { Link } from 'react-router-dom';
// import AddFriend from '../components/AddFriend';
import Opacator from '../components/Opacator';

export default function Home() {
    const [addFriend, setAddFriend] = useState(false);
    return (
        <div className='home-screen'>
            {addFriend===true &&
                <div className='add-friend-component'>
                    <section className='title-section'>
                        <h4>AÑADIR AMIGO</h4>
                    </section>
                    <section className='form-section'>
                        <article className='inputs-article'>
                            <input type="text" name="" id="" placeholder='Nombre...' />
                            <input type="number" name="" id="" placeholder='Teléfono...' />
                            <input type="email" name="" id="" placeholder='Email...' />
                        </article>
                        <article className='buttons-article'>
                            <button className='cancel-button' onClick={()=>{
                                setAddFriend(false);
                            }}>CANCELAR</button>
                            <button className='add-button' onClick={()=>{
                                setAddFriend(false);
                            }}>AGREGAR</button>
                        </article>
                    </section>
                </div>
            }
            {addFriend===true && <Opacator></Opacator>}
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
                        <button className='add-friend-button' onClick={()=>{
                            setAddFriend(true);
                        }}> <img src={addImg} alt="Add Friend" /> añadir amigo</button>
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
                    <Link to='/createProject' className='create-project-button'> <img src={addImg} alt="Create Icon" /> CREAR</Link>
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