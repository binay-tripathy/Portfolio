import React from 'react'
import './Home.scss';
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Vector from '../../assets/images/myvector1.png'
import Loader from 'react-loaders'

const Home = () => {
  const letterClass = 'text-animate';

  const nameArray = [' ', 'B', 'i', 'n', 'a', 'y', ' ', 'T', 'r', 'i', 'p', 'a', 't', 'h', 'y']

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={10} />
          </h1>
          <h2>Front End Developer / Offensive Security / Programmer</h2>
          <Link to="/contact" className="flat-button"> CONTACT ME </Link>
        </div>
        <div className='image-container'>
          <img id='vector' src={Vector} alt="My Vector" />
        </div>
      </div>
      <Loader type='ball-clip-rotate-multiple'/>
    </>
  )

}

export default Home