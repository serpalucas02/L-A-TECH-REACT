import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import burguerIcon from '../../img/burguerIcon.png';

function Navbar() {
    function toggle() {
        const element = document.getElementById("menu");
        if (element.classList.contains('active')) {
          element.classList.remove('active');
        } else {
          element.classList.add('active');
        }
    }

    return(
    <>
    <nav>
        <ul id='menu' className= "menu">
            <li className='logo'><Link to='/inicio'><img src={logo} alt="logo" /></Link></li>
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