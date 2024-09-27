import React from 'react'

import membersImg from '../assets/img/landing/members.png';
import payImg from '../assets/img/landing/pay.png';
import projectImg from '../assets/img/landing/project.png';
import checkImg from '../assets/img/landing/check.png';

export default function Landing() {
    return (
        <div>
            <section className='landing-section top-section'>
                <h2>Bienvenido a Billist</h2>
                <article>
                    <div >
                        <p>En este lugar podrás llevar el control de los gastos de tus eventos (como fiestas, viajes o reuniones), con cuentas exactas para comprender fácilmente cómo se distribuyen los mismos entre las personas implicadas.</p>
                        <img src={membersImg} alt="Project Members" />
                    </div>
                    <div>
                        <img src={payImg} alt="Debts Paying" />
                        <p>Podrás crear una cuenta desde donde gestiones todos tus eventos, y veas cuáles son tus deudas con tus amigos y las de ellos contigo, en cada uno de esos eventos individualmente, y en la totalidad de ellos en general.</p>
                    </div>
                </article>
            </section>
            <section className='landing-section bottom-section'>
                <h2>Cómo gestionar tus proyectos</h2>
                <article>
                    <div>
                        <p>Los proyectos se crean fácilmente, con un nombre, descripción e integrantes.
                        Una vez creado, podrás ir añadiendo los gastos que se van realizando a medida que pase el tiempo, indicando una descripción, un monto, una fecha, e incluso un ticket de compra.</p>
                        <img src={projectImg} alt="Project Management" />
                    </div>
                    <div>
                        <img src={checkImg} alt="Debts Checking" />
                        <p>Tendrás la posibilidad de ver un resumen de los gastos del proyecto y un detalle de los saldos de cada uno de los integrantes. Además, también podrás actualizar los saldos que se vayan liquidando a medida que los integrantes paguen sus cuentas del proyecto.</p>
                    </div>
                </article>
            </section>
        </div>
    )
}