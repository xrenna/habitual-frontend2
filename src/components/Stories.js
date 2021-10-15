import React from 'react'
import Man1 from '../imgs/man1.jpg'

const Stories = () => {
    return (
        <section className='stories'>
            <div className='stories__box'>
                <p className='stories__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae dolor et felis ullamcorper posuere vitae ut ante. Morbi eu auctor erat. Morbi venenatis commodo enim, vel auctor ex ullamcorper porttitor. Curabitur sollicitudin vel lacus a feugiat. Quisque convallis sodales nunc in malesuada. Maecenas suscipit odio in ante pellentesque, et lobortis tellus ultrices. Etiam odio mi, fermentum quis sem ut, lobortis pulvinar dui. Suspendisse vitae lorem convallis, eleifend diam id, ullamcorper arcu.
                </p>
                <img className='stories__img' src={Man1} alt='User 1' />
            </div>
        </section>
    )
}

export default Stories
