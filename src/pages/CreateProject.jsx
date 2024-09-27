import React from 'react'

import userImg from '../assets/icons/user.png';
import addImg from '../assets/icons/add.png';

export default function CreateProject() {
    return (
        <div className='create-project-screen'>
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
                    <button className='create-project-button'>CREAR PROYECTO</button>
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
                    <button className='add-member-button'> <img src={addImg} alt="Add member" /> añadir integrante </button>
                </article>
            </section>
        </div>
    )
}