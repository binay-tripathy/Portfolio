import React from 'react'
import './Home.scss';
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Vector from '../../assets/images/myvector.png'

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
          <h2>Front End Developer / Offensive Security / Java Programmer</h2>
          <Link to="/contact" className="flat-button"> CONTACT ME </Link>
        </div>
        <div className='image-container'>
          <img src={Vector} alt="My Vector" />
        </div>
      </div>
    </>
  )

}

export default Home