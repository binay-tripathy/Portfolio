import React from 'react'
import './Portfolio.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'
import image1 from '../../assets/images/Wetter.png';
import image2 from '../../assets/images/Plantlet.png';
import image3 from '../../assets/images/Grill&Chill.png';
import image4 from '../../assets/images/ToDoList.png';

const Portfolio = () => {
    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass='text-animate' strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']} idx={15} />
                    </h1>
                </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <a href="/"><img src={image1} alt="Wetter" /></a>
                    </div>
                    <div className="grid-item">
                        <a href="/"><img src={image2} alt="Plantlet" /></a>
                    </div>
                    <div className="grid-item">
                        <a href="/"><img src={image3} alt="Grill&Chill" /></a>
                    </div>
                    <div className="grid-item">
                        <a href="/"><img src={image4} alt="ToDoList" /></a>
                    </div>
                </div>
            </div>
            <Loader type='ball-clip-rotate-multiple' />
        </>
    )
}

export default Portfolio