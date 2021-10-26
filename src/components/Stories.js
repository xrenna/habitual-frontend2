import React from 'react'
import Man1 from '../imgs/man1.jpg'
import Man2 from '../imgs/man2.jpg'
import Woman from '../imgs/woman.jpg'

const Stories = () => {
    return (
        <section className='story'>
            <div className='stories'>
                <div className='stories__text'>
                    <h3 className='heading-tertiary'>I finally won that body building competion!</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae dolor et felis ullamcorper posuere vitae ut ante. Morbi eu auctor erat. Morbi venenatis commodo enim, vel auctor ex ullamcorper porttitor. Curabitur sollicitudin vel lacus a feugiat. Quisque convallis sodales nunc in malesuada. Maecenas suscipit odio in ante pellentesque, et lobortis tellus ultrices. Etiam odio mi, fermentum quis sem ut, lobortis pulvinar dui. Suspendisse vitae lorem convallis, eleifend diam id, ullamcorper arcu.
                    </p>
                </div>
                <figure className='stories__shape'>
                    <img className='stories__img' src={Man1} alt='User 1' />
                    <figcaption className='stories__caption'></figcaption>
                </figure>
                

            </div>
            <div className='stories'>
                <div className='stories__text'>
                <h3 className='heading-tertiary'>Completed a 5k!</h3>
                    <p>
                        Aliquam tincidunt mi ut orci commodo, nec lacinia sapien viverra. In nunc justo, scelerisque eu nulla vitae, commodo sollicitudin dolor. Pellentesque lacinia ligula nec semper lacinia. Cras sollicitudin mauris leo, vitae mollis urna lobortis pretium. Mauris malesuada metus in risus mattis pellentesque. Aenean vitae nisl at est varius sodales ut sed nisl. Sed nibh nibh, rutrum sed neque in, bibendum viverra diam.   
                    </p>
                </div>
                <figure className='stories__shape'>
                    <img className='stories__img' src={Woman} alt='User 2' />
                    <figcaption className='stories__caption'></figcaption>
                </figure>
                
            </div>
            <div className='stories'>
                <div className='stories__text'>
                <h3 className='heading-tertiary'>Completed a 5k!</h3>
                    <p>
                        Donec blandit tincidunt neque at imperdiet. Curabitur pellentesque lacus quam, sit amet bibendum mi vulputate in. Maecenas mollis lacus sem, ac varius sapien fermentum quis. Curabitur finibus neque non sem tempus, vel pellentesque massa sagittis. Nulla gravida maximus eros posuere malesuada. Sed ac massa non est ornare finibus in ac lacus. Suspendisse sit amet odio in enim rutrum ultrices sed laoreet ligula.
                    </p>
                </div>
                <figure className='stories__shape'>
                    <img className='stories__img' src={Man2} alt='User 3' />
                    <figcaption className='stories__caption'></figcaption>
                </figure>
            </div>
        </section>
    )
}

export default Stories
