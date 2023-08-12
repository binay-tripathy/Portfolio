import React from 'react'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const About = () => {
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass='text-animate' strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={9}/>
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

                
            </div>
        </>
    )
}

export default About