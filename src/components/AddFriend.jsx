import React from 'react'

export default function AddFriend() {
    return (
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
                    <button className='cancel-button'>CANCELAR</button>
                    <button className='add-button'>AGREGAR</button>
                </article>
            </section>
        </div>
    )
}