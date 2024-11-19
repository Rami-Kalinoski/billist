import React from 'react';
import checkIcon from '../assets/icons/check.png';
import moneyCheckIcon from '../assets/icons/money-check.png';
import reunionIcon from '../assets/icons/reunion.png';
import managementIcon from '../assets/icons/management.png';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <main className='landing-main'>
            <section className='top-section'>
                <article className='article'>
                    <div className='info-card'>
                        <img src={reunionIcon} alt='Llevar control del saldo de eventos' className='icon' />
                        <p className='text'>Podrás llevar control de los gastos de tus eventos y repartir de forma exacta los saldos de quienes están involucrados.</p>
                    </div>
                    <div className='info-card'>
                        <img src={moneyCheckIcon} alt='Conocer tus deudas y las de tus amigos' className='icon' />
                        <p className='text'>Podrás conocer todas tus deudas y créditos con tus amigos y entre todos los eventos de los que formas parte.</p>
                    </div>
                </article>
                <article className='article'>
                    <div className='info-card'>
                        <img src={managementIcon} alt='Crear proyectos y gestionar sus gastos' className='icon' />
                        <p className='text'>Podrás añadir y gestionar gastos de eventos con información detallada de cada uno de ellos y mantener un control del presupuesto gastado en total.</p>
                    </div>
                    <div className='info-card'>
                        <img src={checkIcon} alt='Mantener al día saldos y deudas' className='icon' />
                        <p className='text'>Podrás ver el detalle de los saldos de cada uno de los integrantes del proyecto al día, y liquidar los mismos a medida que los vayan pagando.</p>
                    </div>
                </article>
            </section>
            <section className='bottom-section'>
                <article className='article left'>
                    <h2 className='title'>Crea tu cuenta ahora</h2>
                    <p className='text'>No te arrepentirás de probar Billist como ayudante para gestionar los gastos de tus eventos.</p>
                    <Link to='/signup' className='btn signup-btn'>Crear una cuenta</Link>
                </article>
                <article className='article'>
                    <h2 className='title'>¿Ya tienes una cuenta?</h2>
                    <p className='text'>Comienza ya con la gestión de un nuevo proyecto e invita a tus amigos a participar de él.</p>
                    <button type='button' className='btn project-btn'>Crear nuevo proyecto</button>
                </article>
            </section>
        </main>
    )
}