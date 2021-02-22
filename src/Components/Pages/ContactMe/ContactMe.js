import React from 'react';
import './ContactMe.scss';
import emoji3 from '../../Assets/emoji3.png';

const ContactMe = () => {
    return (
        <div className='contactMe'>
                <img src={emoji3} alt='Perfil' className='contactMe-logo'></img>
                <a href='http://www.gmail.com'>ornee.sci@gmail.com</a>                
                
        </div>
    )
}

export default ContactMe;