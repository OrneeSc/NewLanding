import React from 'react';
import './Index.scss';
import Logo from './../Assets/foto.jpg';
import {Link} from 'react-router-dom'
const Index = () => {

    let title= 'Frontend Dev';

    return (
        <div className='index'>
            <div className='index-content'>
                <img src={Logo} alt='Perfil' className='index-logo'></img>
                <h2>{title}</h2>
            </div>

        </div>

    )
}

export default Index;