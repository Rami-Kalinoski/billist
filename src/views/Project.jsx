import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getProjectById from '../api/getProjectById';
import editIcon from '../assets/icons/edit.png';
import createIcon from '../assets/icons/create.png';
import profileIcon from '../assets/icons/profile.png';
import AddBill from '../components/AddBill';
import Pay from '../components/Pay';

export default function Project() {
    // cargar información del proyecto
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const data = await getProjectById(id);
                setProject(data);
            } catch (error) {
                console.error('Error fetching project:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    if (loading) {
        console.log("Cargando proyecto...");
    }

    if (!project) {
        console.log("¡Ha ocurrido un error! No pudimos encontrar el proyecto. Porfavor, intenta de nuevo más tarde.");
    }

    // estado para manejar la edición del nombre del proyecto
    const [editing, setEditing] = useState(false);
    const [projectName, setProjectName] = useState(''); // Para almacenar el nombre editable

    useEffect(() => {
        if (project) {
            setProjectName(project.name); // inicializar el nombre editable con el del proyecto
        }
    }, [project]);

    const handleSaveProjectName = () => {
        // simulamos la acción de guardar los cambios del nombre del proyecto
        setEditing(false);
    };

    // agregar gasto
    const [addBill, setAddBill] = useState('hide');

    // sección derecha
    const [detail, setDetail] = useState('members');
    const [pagar, setPagar] = useState('hide');

    return (
        <main className='project-main'>
            {/* SECCIÓN IZQUIERDA --------------------------------------------------------------------------------------------------------------- */}
            <section className='left-section'>
                <article className='title-article'>
                    <div className='top-div'>
                        {/* <h3>project.name</h3> */}
                        {/* <h3 className='title'>Cancún 2024</h3>
                        <button type='button' className='edit-btn'><img src={editIcon} alt="Lápiz" className='img' /> Editar</button> */}
                        {!editing ? (
                            <>
                                <h3 className='title'>{projectName || 'Cancún 2024'}</h3>
                                <button
                                    type='button'
                                    className='edit-btn'
                                    onClick={() => setEditing(true)}
                                >
                                    <img src={editIcon} alt="Lápiz" className='img' /> Editar
                                </button>
                            </>
                        ) : (
                            <>
                                <input
                                    type='text'
                                    className='project-name-input'
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                />
                                <button
                                    type='button'
                                    className='save-btn'
                                    onClick={handleSaveProjectName}
                                >
                                    Guardar cambios
                                </button>
                            </>
                        )}
                    </div>
                    <div className='balance-div'>
                        {/* <p
                            className={`text ${
                                project.balance > 0
                                    ? 'lends'
                                    : project.balance < 0
                                    ? 'owes'
                                    : ''
                            }`}
                        >
                            En este proyecto,{' '}
                            {project.balance > 0
                                ? `prestaste en general $${project.balance}`
                            : project.balance < 0
                                ? `debes en general $${Math.abs(project.balance)}`
                            : 'no tienes deudas en general'}
                        </p> */}
                        <p className='text owes'>En este proyecto, debes en general $5000.00</p>
                    </div>
                </article>
                <article className='bills-article'>
                    <div className='title-div'>
                        <h3 className='title'>Gastos</h3>
                        <button type='button' onClick={()=>{setAddBill('show')}} className='add-bill-btn'><img src={createIcon} alt="Suma" className='img' /> añadir gasto</button>
                    </div>
                    <section className='bills-section'>
                        {/* HACER LA CARGA REAL -------------------------------------------------------------------------------------------- */}
                        <article className='bill'>
                                <div className='date-description-div'>
                                    <div className='date-div'>
                                        <p className='month'>abr</p>
                                        <p className='day'>23</p>
                                    </div>
                                    <div className='bill-description'>
                                        <h4 className='name'>Gasolina</h4>
                                        <p className='description'>Carlos pagó $5000.00</p>
                                    </div>
                                </div>
                                <div className='bill-balance'>
                                    <p className='text owes'>debes</p>
                                    <p className='balance owes'>$1750.00</p>
                                </div>
                        </article>
                        <article className='bill'>
                                <div className='date-description-div'>
                                    <div className='date-div'>
                                        <p className='month'>jun</p>
                                        <p className='day'>02</p>
                                    </div>
                                    <div className='bill-description'>
                                        <h4 className='name'>Comida</h4>
                                        <p className='description'>Pagaste $2000.00</p>
                                    </div>
                                </div>
                                <div className='bill-balance'>
                                    <p className='text lends'>prestaste</p>
                                    <p className='balance lends'>$2000.00</p>
                                </div>
                        </article>
                        <article className='bill'>
                                <div className='date-description-div'>
                                    <div className='date-div'>
                                        <p className='month'>abr</p>
                                        <p className='day'>23</p>
                                    </div>
                                    <div className='bill-description'>
                                        <h4 className='name'>Hotel</h4>
                                        <p className='description'>bla bla bla bla bla bla</p>
                                    </div>
                                </div>
                                <div className='bill-balance'>
                                    <p className='text'>no tienes deudas</p>
                                </div>
                        </article>
                    </section>
                </article>
            </section>
            {/* SECCIÓN DERECHA ----------------------------------------------------------------------------------------------------------------- */}
            <section className='right-section'>
                <article className='btns-article'>
                    <button type='button' className={`btn ${detail === 'members' ? 'pressed' : ''}`} onClick={()=>{setDetail('members')}}>Integrantes</button>
                    <button type='button' className={`btn ${detail === 'resume' ? 'pressed' : ''}`} onClick={()=>{setDetail('resume')}}>Resumen</button>
                    <button type='button' className={`btn ${detail === 'bills' ? 'pressed' : ''}`} onClick={()=>{setDetail('bills')}}>Saldos</button>
                    <button type='button' className={`btn ${detail === 'pay' ? 'pressed' : ''}`} onClick={()=>{setDetail('pay')}}>Liquidar deudas</button>
                </article>
                {detail === 'members' && (
                    <article className='members-article'>
                        {/* HACER LA CARGA REAL -------------------------------------------------------------------------------------------- */}
                        <div className='list'>
                            {/* <p className='default-text'>Aún no hay integrantes en este proyecto.</p> */}
                            <div className='item'> <p className='text'><img src={profileIcon} alt='Integrante' className='img' /> Carlos</p> </div>
                            <div className='item'> <p className='text'><img src={profileIcon} alt='Integrante' className='img' /> Susana</p> </div>
                            <div className='item'> <p className='text'><img src={profileIcon} alt='Integrante' className='img' /> Pedro</p> </div>
                        </div>
                        <div className='btns-div'>
                            <button type="button" className='btn'>Agregar amigo</button>
                            <button type="button" className='btn'>Invitar integrante</button>
                        </div>
                    </article>
                )}
                {detail === 'resume' && (
                    <article className='resume-article'>
                        {/* HACER LA CARGA REAL -------------------------------------------------------------------------------------------- */}
                        <div className='div'>
                            <h4 className='title'>TOTAL GASTADO POR EL GRUPO</h4>
                            <p className='amount'>$10000.00</p>
                        </div>
                        <div className='div'>
                            <h4 className='title'>TOTAL QUE PRESTASTE</h4>
                            <p className='amount'>$2000.00</p>
                        </div>
                        <div className='div'>
                            <h4 className='title'>TOTAL QUE DEBES</h4>
                            <p className='amount'>$5000.00</p>
                        </div>
                    </article>
                )}
                {detail === 'bills' && (
                    <article className='bills-article'>
                        {/* HACER LA CARGA REAL -------------------------------------------------------------------------------------------- */}
                        <div className='member'>
                            <p className='resume'>Tomás (tu) debe $5000.00 en general</p>
                            <div className='detail'>
                                <p className='item'>debe $2000.00 a Carlos</p>
                                <p className='item'>prestó $1000.00</p>
                            </div>
                        </div>
                        <div className='member'>
                            <p className='resume'>Carlos debe $5000.00 en general</p>
                            <div className='detail'>
                                <p className='item'>debe $2000.00 a Susana</p>
                                <p className='item'>prestó $1000.00</p>
                            </div>
                        </div>
                        <div className='member'>
                            <p className='resume'>Tomás (tu) debe $5000.00 en general</p>
                            <div className='detail'>
                                <p className='item'>debe $2000.00 a Carlos</p>
                                <p className='item'>prestó $1000.00</p>
                            </div>
                        </div>
                    </article>
                )}
                {detail === 'pay' && (
                    <article className='pay-article'>
                        {/* HACER LA CARGA REAL -------------------------------------------------------------------------------------------- */}
                        <div className='member'>
                            <p className='name'><img src={profileIcon} alt='Integrante' className='img' /> Carlos</p>
                            <div className="btn-div">
                                <p className='detail'>aún le debes $2000.00</p>
                                <button type="button" className='btn' onClick={()=>{setPagar('show')}}>PAGAR</button>
                            </div>
                        </div>
                        <div className='member'>
                            <p className='name'><img src={profileIcon} alt='Integrante' className='img' /> Susana</p>
                            <div className="btn-div">
                                <p className='detail'>aún le debes $1000.00</p>
                                <button type="button" className='btn' onClick={()=>{setPagar('show')}}>PAGAR</button>
                            </div>
                        </div>
                        <div className='member'>
                            <p className='name'><img src={profileIcon} alt='Integrante' className='img' /> Carlos</p>
                            <div className="btn-div">
                                <p className='detail'>aún le debes $2000.00</p>
                                <button type="button" className='btn' onClick={()=>{setPagar('show')}}>PAGAR</button>
                            </div>
                        </div>
                    </article>
                )}
            </section>
            {/* AÑADIR GASTO -------------------------------------------------------------------------------------------------------------------- */}
            {addBill === 'show' && (
                <div>
                    <div className='overlay'></div>
                    <AddBill project={project} setAddBill={setAddBill}></AddBill>
                </div>
            )}
            {/* PAGAR --------------------------------------------------------------------------------------------------------------------------- */}
            {pagar === 'show' && (
                <div>
                    <div className='overlay'></div>
                    <Pay project={project} setPagar={setPagar}></Pay>
                </div>
            )}
        </main>
    )
}