import React from 'react';
import './Index.scss';
import Logo from './../Assets/foto.jpg';
import {Link} from 'react-router-dom'
const Index = () => {

    let title= 'Frontend Dev';

    return (
        <div className='index'>

            <header className='header'>
                <h1 className='header-h1'>Ornella</h1>
                 {/* poner un ternario */}
            </header>

            <section className='index-perfil'>
                <img src={Logo} alt='Perfil' className='index-logo'></img>
                <h2>{title}</h2>
            </section>

            <footer className='footer'>
                <nav className='footer-nav'>
                    <Link to="/AboutMe" className="aboutMe"><a href="#">About me</a></Link>

                    <Link to="/Skills" className="skills"><a href="#">Skills</a></Link>

                    <Link to="/Proyects" className="proyects"><a href="#">Proyects</a></Link>

                    <Link to="/ContactMe" className="contactMe"><a href="#">Contact me</a></Link>
                </nav>
            </footer>

        </div>

    )
}

export default Index;