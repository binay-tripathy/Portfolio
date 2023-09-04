import React, { useRef } from 'react'
import './Contact.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'
import ContactImg from '../../assets/images/Contact2.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const refForm = useRef()
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs
            .sendForm(
                'service_f0y8so4',
                'template_d4h6hay',
                refForm.current,
                'S6uqU59PY__Ccz6BU'
            )
            .then(
                () => {
                    alert('Message successfully sent!!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }
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
                        <form id='contact-form' ref={refForm} onSubmit={sendEmail}>
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