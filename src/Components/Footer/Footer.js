import React from 'react';
import './Footer.scss';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <nav className='footer-nav'>
                <Link to="/AboutMe" className="aboutMe"><a href="#">About me</a></Link>

                <Link to="/Skills" className="skills"><a href="#">Skills</a></Link>

                {/* <Link to="/Proyects" className="proyects"><a href="#">Proyects</a></Link> */}

                <Link to="/ContactMe" className="contactMe"><a href="#">Contact me</a></Link>
            </nav>
        </footer>
      
    )
}

export default Footer;