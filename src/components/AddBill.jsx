import React from 'react'

export default function AddBill() {
    return (
        <div className='add-bill-component'>
            <section className='title-section'>
                <h4>AÑADIR GASTO</h4>
                <h5>a Cancún 2024</h5>
            </section>
            <section className='bottom-section'>
                <article className='form-article'>
                    <input type="text" name="" id="" placeholder='Descripción...' />
                    <input type="date" name="" id="" placeholder='Fecha' />
                    <div className='price-div'>
                        <p>$</p>
                        <input type="number" name="" id="" placeholder='0000.00' />
                    </div>
                </article>
                <article className='payment-article'>
                    <div>
                        <p>Pagado por</p>
                        <button className='member-button'>vos</button>
                    </div>
                    <div>
                        <p>y dividido</p>
                        <button className='division-button'>a partes iguales</button>
                    </div>
                </article>
                <article className='buttons-article'>
                    <button className='attach-button'>ADJUNTAR TICKET</button>
                    <button className='save-button'>REGISTRAR GASTO</button>
                </article>
            </section>
        </div>
    )
}