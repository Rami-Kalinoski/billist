import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';import fecthProjectById from '../api/fecthProjectById';
import editIcon from '../assets/icons/edit.png';
import createIcon from '../assets/icons/create.png';
import profileIcon from '../assets/icons/profile.png';
import AddMember from '../components/AddMember';
import AddBill from '../components/AddBill';
import Pay from '../components/Pay';

import updateProjectName from '../api/updateProjectName';
import fetchMembersById from '../api/fetchMembersById';
import fetchBillsByProjectId from '../api/fetchBillsByProjectId';
import fetchTotalSpent from '../api/fetchTotalSpent';
import fetchTotalLend from '../api/fetchTotalLend';
import fetchTotalOwed from '../api/fetchTotalOwed';

export default function Project() {
    const { setIsLogged } = useContext(AuthContext);
    // obtener el token
    const accessToken = sessionStorage.getItem('access-token');
    // cargar información del proyecto
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [projectName, setProjectName] = useState('');
    const [members, setMembers] = useState([]);
    const [bills, setBills] = useState([]);

    const [totalSpent, setTotalSpent] = useState(0);
    const [totalLend, setTotalLend] = useState(0);
    const [totalOwed, setTotalOwed] = useState(0);

    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const data = await fecthProjectById(accessToken, id, setProject);
                setProject(data);
                setProjectName(data.name);
                const membersData = await fetchMembersById(accessToken, id);
                setMembers(membersData.members);
                const billsData = await fetchBillsByProjectId(accessToken, id);
                setBills(billsData);

                const totalSpentData = await fetchTotalSpent(accessToken, id);
                // const totalLendData = await fetchTotalLend(accessToken, id);
                // const totalOwedData = await fetchTotalOwed(accessToken, id);
                setTotalSpent(totalSpentData);
                // setTotalLend(totalLendData);
                // setTotalOwed(totalOwedData);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };
        fetchProjectData();
    }, [id, accessToken]); // Solo estas dependencias
    
    if (!project) {
        console.log("¡Ha ocurrido un error! No pudimos encontrar el proyecto. Porfavor, intenta de nuevo más tarde.");
    }

    // estado para manejar la edición del nombre del proyecto
    const [editing, setEditing] = useState(false);

    const handleSaveProjectName = () => {
        const changeName = async () => {
            try {
                await updateProjectName(accessToken, projectName, setProjectName );
            } catch (error) {
                console.error('Error al cambiar el nombre del proyecto. Porfavor, intenta de nuevo más tarde')
            }
        }
        changeName();
        setEditing(false);
    };

    // SECCIÓN GASTOS -----------------------------------------------
    // agregar gasto
    const [addBill, setAddBill] = useState('hide');
    const [addMember, setAddMember] = useState('hide');

    // sección derecha
    const [detail, setDetail] = useState('members');
    const [pagar, setPagar] = useState('hide');

    const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];

    return (
        <main className='project-main'>
            {/* SECCIÓN IZQUIERDA --------------------------------------------------------------------------------------------------------------- */}
            <section className='left-section'>
                <article className='title-article'>
                    <div className='top-div'>
                        {!editing ? (
                            <>
                                <h3 className='title'>{projectName}</h3>
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
                        {bills.map((bill) => (
                            <article className='bill' key={bill.id}>
                                <div className='date-description-div'>
                                    <div className='date-div'>
                                        <p className='month'>{months[new Date(bill.date).getMonth()]}</p>
                                        <p className='day'>{new Date(bill.date).getDay()}</p>
                                    </div>
                                    <div className='bill-description'>
                                        <h4 className='name'>{bill.description}</h4>
                                        <p className='description'>Carlos pagó $5000.00</p>
                                    </div>
                                </div>
                                <div className='bill-balance'>
                                    <p className='text owes'>debes</p>
                                    <p className='balance owes'>$1750.00</p>
                                </div>
                            </article>
                        ))}
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
                        <div className='list'>
                            {members.map((member)=>(
                            <div className='item'> <p className='text'><img src={profileIcon} alt='Integrante' className='img' /> {member.username} </p> </div>
                        ))}
                        </div>
                        <div className='btns-div'>
                            <button type="button" onClick={()=>{setAddMember('show')}} className='btn'>Agregar integrante</button>
                        </div>
                    </article>
                )}
                {addMember === 'show' && (
                    <div>
                        <div className='overlay'></div>
                        <AddMember project={project} setAddMember={setAddMember}></AddMember>
                    </div>
                )}
                {detail === 'resume' && (
                    <article className='resume-article'>
                        <div className='div'>
                            <h4 className='title'>TOTAL GASTADO POR EL GRUPO</h4>
                            <p className='amount'>${totalSpent}</p>
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
                        {members.map((member)=>{
                            const username = member.username;
                            return (
                                <div className='member'>
                                <p className='resume'> {username} debe $5000.00 en general</p>
                                <div className='detail'>
                                    <p className='item'>debe $2000.00 a Carlos</p>
                                    <p className='item'>prestó $1000.00</p>
                                </div>
                            </div>
                            )
                        })}
                    </article>
                )}
                {detail === 'pay' && (
                    <article className='pay-article'>
                        {members.map((member)=>{
                            const username = member.username;
                            return (
                                <div className='member'>
                                    <p className='name'><img src={profileIcon} alt='Integrante' className='img' /> {username}</p>
                                    <div className="btn-div">
                                        <p className='detail'>aún le debes $2000.00</p>
                                        <button type="button" className='btn' onClick={()=>{setPagar('show')}}>PAGAR</button>
                                    </div>
                                </div>
                            )
                        })}
                    </article>
                )}
            </section>
            {/* AÑADIR GASTO -------------------------------------------------------------------------------------------------------------------- */}
            {addBill === 'show' && (
                <div>
                    <div className='overlay'></div>
                    <AddBill project={project} members={members} setAddBill={setAddBill}></AddBill>
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