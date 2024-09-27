import React, { useState } from 'react'

import addImg from '../assets/icons/add.png';
import ProjectResume from '../components/ProjectResume';
import ProjectBills from '../components/ProjectBills';
import ProjectPayment from '../components/ProjectPayment';

export default function ManageProject() {
    const [selectedTab, setSelectedTab] = useState('resume');

    return (
        <div className='manage-project-screen'>
            <section className='left-section'>
                <article className='project-header-article'>
                    <div className='project-title-div'>
                        <h2>Cancún 2024</h2>
                    </div>
                    <div className='project-balance-div'>
                        <p>En este proyecto, debes en general $9500.00</p>
                    </div>
                </article>
                <article className='project-bills-article'>
                    <div className='bills-title-div'>
                        <h2>Gastos</h2>
                        <button className='add-bill-button'> <img src={addImg} alt="Add bill" /> añadir gasto</button>
                    </div>
                    <div className='bills-div'>
                        <div className='bill'>
                            <div className='date-div'>
                                <p className='month'>abr</p>
                                <p className='day'>23</p>
                            </div>
                            <div className='content-div'>
                                <p className='bill-name'>Gasolina</p>
                                <p className='bill-payment'>Carlos pagó $5000.00</p>
                            </div>
                            <div className='balance-div'>
                                <p className='balance-text owes'>debes</p>
                                <p className='balance-price owes'>$1750.00</p>
                            </div>
                        </div>
                        <div className='bill'>
                            <div className='date-div'>
                                <p className='month'>abr</p>
                                <p className='day'>23</p>
                            </div>
                            <div className='content-div'>
                                <p className='bill-name'>Comida</p>
                                <p className='bill-payment'>Susana y tú pagaron $5000.00</p>
                            </div>
                            <div className='balance-div'>
                                <p className='balance-text lends'>prestaste</p>
                                <p className='balance-price lends'>$3000.00</p>
                            </div>
                        </div>
                        <div className='bill'>
                            <div className='date-div'>
                                <p className='month'>abr</p>
                                <p className='day'>23</p>
                            </div>
                            <div className='content-div'>
                                <p className='bill-name'>Hospedaje</p>
                                <p className='bill-payment'>Susana pagó $15000.00</p>
                            </div>
                            <div className='balance-div'>
                                <p className='balance-text owes'>debes</p>
                                <p className='balance-price owes'>$5000.00</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section className='right-section'>
                <article className='buttons-info-article'>
                    <button className={`info-button ${selectedTab === 'resume' ? 'active' : ''}`} onClick={() => setSelectedTab('resume')}>Resumen</button>
                    <button className={`info-button ${selectedTab === 'bills' ? 'active' : ''}`} onClick={() => setSelectedTab('bills')}>Saldos</button>
                    <button className={`info-button ${selectedTab === 'payment' ? 'active' : ''}`} onClick={() => setSelectedTab('payment')}>Liquidar deudas</button>
                </article>
                <article className='project-info-article'>
                    {/* <ProjectResume></ProjectResume> */}
                    {/* <ProjectBills></ProjectBills> */}
                    {/* <ProjectPayment></ProjectPayment> */}
                    {selectedTab === 'resume' && <ProjectResume />}
                    {selectedTab === 'bills' && <ProjectBills />}
                    {selectedTab === 'payment' && <ProjectPayment />}
                </article>
            </section>
        </div>
    )
}