import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({changeColor}) => {
    return (
        <header className='header'>
            <Link to="/" className='link'><h1 className='header-h1' style={changeColor ? {color: '#10BAB9'} : null}>Ornella Sciarrillo</h1></Link>
                
                 {/* poner un ternario */}
        </header>
        
    )
}

export default Header;