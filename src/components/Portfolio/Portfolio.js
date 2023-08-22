import React from 'react'
import './Portfolio.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'


const Portfolio = () => {
    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass='text-animate' strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']} idx={15} />
                    </h1>
                </div>
            </div>
            <Loader type='ball-clip-rotate-multiple' />
        </>
    )
}

export default Portfolio