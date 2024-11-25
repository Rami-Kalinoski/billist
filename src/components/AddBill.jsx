import React, { useState } from 'react'

export default function AddBill({project, setAddBill}) {
    // archivo ticket de compra
    const [archivo, setArchivo] = useState(null);
    const handleFileChange = (e) => {
        const seleccionado = e.target.files[0];
        if (seleccionado) {
        setArchivo(seleccionado); // guardar el archivo seleccionado
        }
    };
    const deleteFile = () => {
        setArchivo(null); // resetear el archivo
    };

    // submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setAddBill('hide');
    };

    return (
        <div className='addbill-container'>
            <form action='' onSubmit={handleSubmit} className='addbill-form'>
                <section className='title-section'>
                    <h3 className='title'>AÑADIR GASTO</h3>
                    {/* <h4 className='subtitle'>a {project.name}</h4> */}
                    <h4 className='subtitle'>a Cancún 2024</h4>
                </section>
                <section className='bottom-section'>
                    <article className='inputs-article'>
                        <input type='text' name='description' id='description' className='input' placeholder='Descripción' />
                        <input type='date' name='date' id='date' className='input' />
                        <span className='amount-span'>
                            <p className='text'>$</p>
                            <input type='number' name='amount' id='amount' className='amount-input' placeholder='0000.00' />
                        </span>
                    </article>
                    <article className='distribution-article'>
                        <div className='div'>
                            <p className='text'>Pagado por</p>
                            <button type="button" className='btn'>vos</button>
                        </div>
                        <div className='div'>
                            <p className='text'>y dividido</p>
                            <button type="button" className='btn'>en partes iguales</button>
                        </div>
                    </article>
                    <article className='buttons-article'>
                    {archivo ? (
                        <div className='file-div'>
                            <span className='file-name'>{archivo.name}</span>
                            <button type='button' className='delete-btn' onClick={deleteFile}>✖</button>
                        </div>
                        ) : (
                        <div className='addfile-div'>
                            <button type='button' className='addfile-btn' onClick={() => document.getElementById('input-file').click()}>ADJUNTAR TICKET</button>
                            <input id='input-file' type='file' accept='image/png, image/jpeg' className='addfile-input' onChange={handleFileChange}/>
                        </div>
                    )}
                        <button type='submit' className='addbill-btn'>REGISTRAR GASTO</button>
                        <button type='button' className='cancel-btn' onClick={()=>{setAddBill('hide')}}>CANCELAR</button>
                    </article>
                </section>
            </form>
        </div>
    )
}