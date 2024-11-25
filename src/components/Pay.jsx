import React from 'react'

export default function Pay({project, userPayer, userPayed, setPagar}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        setPagar('hide');
    };

    return (
        <div className='pay-container'>
            <form action="" className='pay-form' onSubmit={handleSubmit}>
                <section className='header-section'>
                    {/* <p>{userPayer.username} paga a {userPayed.username}</p> */}
                    <p className='text'>Tomás (tu) paga a Carlos</p>
                </section>
                <section className='amount-section'>
                    <div className='amount-div'>
                        <p className='text'>$</p>
                        <input type='number' className='amount-input' placeholder='0000.00' />
                    </div>
                </section>
                <section className='btns-section'>
                    <div className='disclaimer'>Esta función no transfiere dinero real, es solo para llevar las cuentas.</div>
                    <button type='submit' className='pay-btn'>REGISTRAR PAGO</button>
                    <button type='button' className='cancel-btn' onClick={()=>{setPagar('hide')}}>CANCELAR</button>
                </section>
            </form>
        </div>
    )
}