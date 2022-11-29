import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Login.css';

function Login() {
    return (
        <>
        <Navbar/>
        <div className="container-login">
            <div className="login-wrap">
                <form>
                    <h1>Iniciá sesión</h1>
                    <div className="login-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email"/>
                    </div>
                    <div className="login-group">
                        <label htmlFor="password">Contraseña</label>
                        <input id="password" type="password" name="password"/>
                    </div>

                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>

            <div className='footer-inicioSesion'>
                <p>¿Aún no tenés cuenta?<Link to='/register'> Registrate</Link></p>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Login;