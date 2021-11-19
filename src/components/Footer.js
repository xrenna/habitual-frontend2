import React from 'react'
import Logo from '../imgs/Habitual.png'

const Footer = () => {
    return (
        <section className='footer'>
        <div className='footer__logo-box'>
            <img src={ Logo } className='footer__logo' />
        </div>
        <div className='footer__links'>

        </div>
        <div>
            <p>&copy; Jordan T. Romero 2021</p>
        </div>
        </section>
    )
}

export default Footer
