import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import burguerIcon from '../../img/burguerIcon.png';

function Navbar() {
    const [state, setState] = useState(false);

    const toggle = () => {
        setState(!state);
    }

    return(
    <>
    <nav>
        <ul id='menu' className={state ? 'menu active':'menu'}>
            <li className='logo'><Link to='/'><img src={logo} alt="logo" /></Link></li>
            <li className='item'><Link to='/productos'>Productos</Link></li>
            <li className='item'><Link to='/contacto'>Contacto</Link></li>
            <li className='item button'><Link to='/login'>Iniciar Sesion</Link></li>
            <li className='item carrito'><Link to=''>Carrito</Link></li>
            <li className='toggle' onClick={toggle}><Link to='#'><img src={burguerIcon} alt='burguerIcon'/></Link></li>
        </ul>
    </nav>
    <div className="rgbar"></div>
    </>
    );
}

export default Navbar;