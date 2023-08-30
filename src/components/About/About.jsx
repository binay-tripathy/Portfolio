import React from 'react'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJava, faJsSquare, faLinux, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass='text-animate' strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={9} />
                    </h1>
                    <p>
                        I'm a very ambitious Front-End Developer and currently learning Offensive Security
                        and looking for a role in an established IT company with the opportunity to work
                        with the latest technologies on challenging and diverse projects.
                    </p>
                    <p align="LEFT">
                        I'm always open to experience, quiet confident and naturally curious on
                        improving my skills at a time.
                    </p>
                    <p>
                        If I need to define myself in one sentence then that would be I am a bit Introspective,
                        love to work on what I like, a video gamer and tech-obsessed!!!
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faJava} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faLinux} color="#3B3700" />
                        </div>
                    </div>
                </div>

            </div>
            <Loader type="ball-clip-rotate-multiple" />
        </>
    )
}

export default About