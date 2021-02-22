import React, { Fragment } from 'react';
import './Skills.scss';
import html from '../../Assets/html.png';
import css from '../../Assets/css.png';
import react from '../../Assets/react.png';
import js from '../../Assets/js.png';
import git from '../../Assets/git.png';
import sass from '../../Assets/sass.png';

const Skills = () => {
    return (
        <React.Fragment>
            <div className='skills'>
                <img src={html} alt='Perfil' className='skills-logo'></img>
                <img src={css} alt='Perfil' className='skills-logo'></img>
                <img src={react} alt='Perfil' className='skills-logo'></img>

            </div>

            <div className='skills'>
                <img src={js} alt='Perfil' className='skills-logo'></img>
                <img src={git} alt='Perfil' className='skills-logo'></img>
                <img src={sass} alt='Perfil' className='skills-logo'></img>
            </div>
        </React.Fragment>
    )
}

export default Skills;
