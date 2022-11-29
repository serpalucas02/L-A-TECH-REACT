import React from 'react';
import './Contacto.css';
import { useForm, ValidationError } from '@formspree/react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Swal from 'sweetalert2';

function Contacto() {
    let [state, handleSubmit] = useForm("moqbovap");

    if (state.succeeded) {
            Swal.fire({
                title: 'Mensaje enviado!',
                text: 'Pronto le responderemos!',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then((result) => {
                window.location='/contacto';
              })
    }

    return (
        <>
        <Navbar/>
        <div className="container-form">
            <div className="form-wrap">
                <form onSubmit={handleSubmit}>
                    <h1>Contacto</h1>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre y Apellido</label>
                        <input id="nombre" type="text" name="nombre"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email"/>
                        <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea id="mensaje" name="mensaje"/>
                        <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors}/>
                    </div>
                    
                    <button type="submit" disabled={state.submitting}>Enviar</button>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Contacto;