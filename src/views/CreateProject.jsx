import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import create from '../api/createProject';

export default function CreateProject() {
    // botón "limpiar"
    const projectNameInput = useRef(null);
    const descriptionInput = useRef(null);
    const handleClear = () => {
        if (projectNameInput.current) {projectNameInput.current.value = ''};
        if (descriptionInput.current) {descriptionInput.current.value = ''};
    }

    // botón "CREAR PROYECTO"
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleProjectNameChange = (e) => { setName(e.target.value); };
    const handleDescriptionChange = (e) => { setDescription(e.target.value); };
    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await create(name, description);
        if (response.status === 200) {
            navigate(`/project/${response.body.id}`);
        } else {
            setError(response.message);
        }
    }

    return (
        <main className='create-project-main'>
            <form action="" className='form' onSubmit={handleSubmit}>
                <h2 className='title'>Crear proyecto</h2>
                <div className='inputs-div'>
                    <div className='input-div'>
                        <label htmlFor="project-name" className='label'>Nombre del proyecto</label>
                        <input type="text" name="project-name" id="project-name" className='input' ref={projectNameInput} onChange={handleProjectNameChange} />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="project-desc" className='label'>Descripción del proyecto (opcional)</label>
                        <textarea name="project-desc" id="project-desc" className='textarea' ref={descriptionInput} onChange={handleDescriptionChange}></textarea>
                    </div>
                </div>
                <div className='btns-div'>
                    <button type='button' className='btn limpiar-btn' onClick={handleClear}>Limpiar</button>
                    <button type='submit' className='btn crear-btn'>CREAR PROYECTO</button>
                </div>
            </form>
        </main>
    )
}