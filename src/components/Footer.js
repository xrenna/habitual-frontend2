import React from 'react'
import Logo from '../imgs/Habitual.png'
import sprite from '../imgs/sprite.svg'

const Footer = () => {
    return (
        <section className='footer'>
        <div className='footer__logo-box'>
            <img src={ Logo } className='footer__logo' />
        </div>
        <div className='footer__links'>
            <a href='https://www.linkedin.com/in/jordan-t-romero/'>
                <svg className="icon icon--footer">
                    <use href={sprite + '#icon-linkedin'} />
                </svg>
            </a>
            <a href='https://github.com/jordles113'>
                <svg className="icon icon--footer">
                    <use href={sprite + '#icon-github'} />
                </svg>
            </a>
            <a href='mailto: jordanromero1390@gmail.com'>
                <svg className="icon icon--footer">
                    <use href={sprite + '#icon-mail'} />
                </svg>
            </a>
        </div>
        <div>
            <p className='footer__text'>&copy; Jordan T. Romero 2021</p>
        </div>
        </section>
    )
}

export default Footer
