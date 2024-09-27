import React, { useState } from 'react'

import userImg from '../assets/icons/user.png';
import addImg from '../assets/icons/add.png';
import Opacator from '../components/Opacator';
import { Link } from 'react-router-dom';

export default function CreateProject() {
    const [addMember, setAddMember] = useState(false);
    return (
        <div className='create-project-screen'>
            {addMember===true && 
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
                                setAddMember(false);
                            }}>CANCELAR</button>
                            <button className='add-button' onClick={()=>{
                                setAddMember(false);
                            }}>AGREGAR</button>
                        </article>
                    </section>
                </div>
            }
            {addMember===true && <Opacator></Opacator>}
            <section className='left-section'>
                <h2 className='title'>Crear proyecto</h2>
                <form action="" className='create-project-form'>
                    <div className='inputs-div'>
                        <input type="text" name="" id="" className='input' placeholder='Nombre del proyecto' />
                        <div className='date-inputs-div'>
                            <input type="date" name="" id="" className='input' placeholder='fecha inicio' />
                            <input type="date" name="" id="" className='input' placeholder='fecha fin' />
                        </div>
                        <textarea name="" id="" className='textarea' placeholder='Descripción (opcional)'></textarea>
                    </div>
                    <Link to="/manageProject" className='create-project-button'>CREAR PROYECTO</Link>
                </form>
            </section>
            <section className='right-section'>
                <h2 className='title'>Integrantes del proyecto</h2>
                <article className='members-article'>
                    <ul className='current-members-ul'>
                        <li className='member'>
                            <img src={userImg} alt="User Icon" className='user-img' />
                            <p>Carlos</p>
                        </li>
                        <li className='member'>
                            <img src={userImg} alt="User Icon" className='user-img' />
                            <p>Susana</p>
                        </li>
                    </ul>
                    <button className='add-member-button' onClick={()=>{
                                setAddMember(true);
                            }}> <img src={addImg} alt="Add member" /> añadir integrante </button>
                </article>
            </section>
        </div>
    )
}