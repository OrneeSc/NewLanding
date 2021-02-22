import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <Link to="/" className='link'><h1 className='header-h1'>Ornella Sciarrillo</h1></Link>
                
                 {/* poner un ternario */}
        </header>
        
    )
}

export default Header;