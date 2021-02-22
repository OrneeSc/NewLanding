import React from 'react';
import './AboutMe.scss';
import emoji1 from '../../Assets/emoji1.png';

const AboutMe = () => {

    let text='Hola! Que gusto tenerte navegando por mi portfolio web. Aquí va un resumen sobre mí:'
    let text2='Me egresé en noviembre del 2020 como Desarrolladora Frontend Jr. en ADA ITW'
    let text3='Desde ese momento mi objetivo siempre fue seguir capacitándome día a día para crecer de manera personal y profesional en este nuevo mundo IT para mi'
    let text4='Actualmente estoy trabajando en una prestigiosa empresa multinacional llamada Teléfonica. Soy parte del equipo de desarrollo de un nuevo proyecto que tiene la compañia'
    let text5='Estoy súper feliz y agradecida. Espero que te sientas cómodo/a navegando por mi web y no dudes en contactarme, estoy dispuesta a aceptar siempre nuevos desafíos'
    return (
        <div className='aboutMe'>
            <div className='aboutMe-content'>
                {/* <img src={emoji1} alt='Perfil' className='index-logo'></img> */}
                <p className='aboutMe-p'>{text}</p>
                <p className='aboutMe-p'>{text2}</p>
                <p className='aboutMe-p'>{text3}</p>
                <p className='aboutMe-p'>{text4}</p>
                <p className='aboutMe-p'>{text5}</p>
            </div>
            
        </div>
    )
}

export default AboutMe;