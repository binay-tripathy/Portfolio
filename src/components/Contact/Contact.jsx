import React from 'react'
import './Contact.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'
import ContactImg from '../../assets/images/Contact.png'

const Contact = () => {
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass='text-animate' strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>
                    <p>
                        If you have any requests or questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input placeholder="Email" type="email" name="email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <button type="submit" className="flat-button"> SEND </button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="contact-img">
                    <img src={ContactImg} alt="contact" />
                </div>
            </div>
            <Loader type='ball-clip-rotate-multiple' />
        </>
    )
}

export default Contact