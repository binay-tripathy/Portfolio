import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo1 from '../../assets/images/Logo_1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Navbar.scss'
const Navbar = () => {
    return (
        <div className='nav-bar'>
            <Link to='/' className='logo'>
                <img className='sub-logo' src={Logo1} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='projects-link' to='/projects'>
                    <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/binaytripathy/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/binay-tripathy" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/binay__tripathy" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar