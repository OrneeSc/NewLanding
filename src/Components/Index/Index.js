import React from 'react';
import './Index.scss';
// import Logo from './../Assets/foto.jpg';
import emoji2 from '../Assets/emoji2.png';
const Index = () => {

    let title= 'Frontend Developer';

    return (
        <div className='index'>
            <div className='index-content'>
                <img src={emoji2} alt='Perfil' className='index-logo'></img>
                <h2>{title}</h2>
            </div>
            <div className='button-slider'>
                <span>Modo oscuro</span>
                <input type='checkbox' id='toggle' />
                    <label className='toggle-track' for='toggle'>
                        <span className='toggle-track__indicator'></span>
                    </label>
            </div>

        </div>

    )
}

export default Index;