import React from 'react';
import './Footer.scss';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <nav className='footer-nav'>
                <Link to="/AboutMe" className="aboutMe">About me</Link>

                <Link to="/Skills" className="skills">Skills</Link>

                {/* <Link to="/Proyects" className="proyects"><a href="#">Proyects</a></Link> */}

                <Link to="/ContactMe" className="contactMe">Contact me</Link>
            </nav>
        </footer>
      
    )
}

export default Footer;