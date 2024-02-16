import React, { useEffect } from 'react'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'
const TagCloud = require('TagCloud');

const About = () => {
    const languages = [
        'Python',
        'Java',
        'C',
        'HTML',
        'Javascript',
        'React',
        'Bootstrap',
        'CSS',
        'Linux',
        'NPM',
        'Git',
        'MySQL',
    ];
    useEffect(() => {
        TagCloud('.content', languages, {

            radius: 400,
            maxSpeed: 'fast',
            initSpeed: 'fast',

            top : 0,
            left : 90,
            rightBottom : 135,
            direction: 135,

            // interact with cursor move on mouse out
            keep: true

        });
        
        // Spin Random Color
        // const colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
        // const randomColor = colors[Math.floor(Math.random() * colors.length)];
        // document.querySelector('.content').style.color = randomColor;

        // eslint-disable-next-line
    }, []);

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
                {/* <div className="stage-cube-cont">
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
                        <div className="face7">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face8">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face9">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face10">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face11">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face12">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                    </div>
                </div> */}

                <span className="content"></span>
            </div>
            <Loader type="ball-clip-rotate-multiple" />
        </>
    )
}

export default About