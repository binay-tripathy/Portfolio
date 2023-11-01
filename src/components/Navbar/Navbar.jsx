import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo1 from '../../assets/images/Logo_1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBriefcase, faClose, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Navbar.scss'
const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <div className='nav-bar'>
            <Link className="logo" to="/" onClick={() => setShowNav(false)}>
                <img className='sub-logo' src={Logo1} alt="logo" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to='/' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='about-link' to='/about' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='projects-link' to='/projects' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='contact-link' to='/contact' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
                <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#4d4d4e" size="3x" className='close-icon' />
            </nav>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/binaytripathy/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' className="anchor-icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/binay-tripathy" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' className="anchor-icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/binay__tripathy" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' className="anchor-icon"/>
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#4d4d4e" size="3x" className='hamburger-icon' />
        </div>
    )
}

export default Navbar