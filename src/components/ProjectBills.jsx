import React from 'react'

export default function ProjectBills() {
    return (
        <div className='project-bills-component'>
            <div className='member-bills-div'>
                <h3 className='member-balance-overall'>Tomás (tu) debe $ 9500.00 en total</h3>
                <ul className='member-balances'>
                    <li className='balance'>debe $ 1750.00 a Carlos</li>
                    <li className='balance'>debe $ 5000.00 a Susana</li>
                </ul>
            </div>
            <div className='member-bills-div'>
                <h3 className='member-balance-overall'>Carlos debe recuperar $ 3500.00 en total</h3>
                <ul className='member-balances'>
                    <li className='balance'>prestó $ 2000.00</li>
                    <li className='balance'>debe $ 5000.00 a Susana</li>
                </ul>
            </div>
            <div className='member-bills-div'>
                <h3 className='member-balance-overall'>Susana debe $ 1750.00 en total</h3>
                <ul className='member-balances'>
                    <li className='balance'>debe $ 1750.00 a Carlos</li>
                </ul>
            </div>
        </div>
    )
}