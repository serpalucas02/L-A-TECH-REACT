import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function Register() {
    return (
        <>
        <Navbar/>
        <div className="container-login">
            <div className="login-wrap">
                <form>
                    <h1>Registrate</h1>
                    <div className="login-group">
                        <label htmlFor="email">Nombre y Apellido</label>
                        <input id="nombre" type="text" name="nombre"/>
                    </div>
                    <div className="login-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email"/>
                    </div>
                    <div className="login-group">
                        <label htmlFor="password">Contraseña</label>
                        <input id="password" type="password" name="password"/>
                    </div>
                    <div className="login-group">
                        <label htmlFor="password">Confirmar Contraseña</label>
                        <input id="password" type="password" name="password"/>
                    </div>

                    <button type="submit">Registrarme</button>
                </form>
            </div>

            <div className='footer-inicioSesion'>
                <p>¿Ya tenés cuenta?<Link to='/login'> Iniciá sesión</Link></p>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Register;