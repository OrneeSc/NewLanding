import React from 'react';
import './Footer.scss';
import {Link} from 'react-router-dom';

const Footer = ({changeColor}) => {
    return (
        <footer className='footer'>
            <nav className='footer-nav'>
                <Link to="/AboutMe" className="aboutMe" style={changeColor ? {color:'#10BAB9'} : null } >About me</Link>

                <Link to="/Skills" className="skills" style={changeColor ? {color:'#10BAB9'} : null } >Skills</Link>

                {/* <Link to="/Proyects" className="proyects"><a href="#">Proyects</a></Link> */}

                <Link to="/ContactMe" className="contactMe" style={changeColor ? {color:'#10BAB9'} : null } >Contact me</Link>
            </nav>
        </footer>
      
    )
}

export default Footer;