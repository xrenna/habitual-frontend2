import React from 'react'
import { NavLink } from 'react-router-dom'

const Demo = () => {
    return (
        <section className='demo'>
            <div className='demo__description'>
            <h3 className='demo__header heading-tertiary'>About Habitual</h3>
                <p className='text text--1'>
                    Habitual is a habit tracker SPA that allows users to track their progress, set frequency by week, and manage their goals for personal growth.
                </p>
                <p className='text text--2'>
                    Engineered the UI using React.js and Redux to manage the state of application & used Redux and Thunk middleware to retrieve data and implement data persistence to a RoR backend.
                </p>
                <p className='text text--3'>
                    Implemented Sass as a CSS precompiler to efficiently design the UX.
                </p>
            </div>
            <div className='demo__box'>
                <iframe src="https://giphy.com/embed/92xpoIc5gFByR8ujtJ" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/92xpoIc5gFByR8ujtJ">via GIPHY</a></p>
            </div>
            <NavLink className='btn demo__btn' to="/tracker">Try it out now</NavLink>
        </section>
    )
}

export default Demo
