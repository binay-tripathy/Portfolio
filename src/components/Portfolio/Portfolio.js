import React from 'react'
import './Portfolio.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Portfolio = () => {
    return (
        <div className='container portfolio-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass='text-animate' strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']} idx={15} />
                </h1>
            </div>
        </div>
    )
}

export default Portfolio