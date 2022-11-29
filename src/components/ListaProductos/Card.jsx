import React from 'react';
import './Card.css';

function Card({imagen,nombre,precio}) {
    return (
        <div className="contenedor">
            <div className="carta">
                <img src={imagen} alt="producto" className="imgCard" />
                <p>{nombre}</p>
                <p className='precio'>{precio}</p>
            </div>
            <button id='agregarProducto' className='botonAgregar'>Agregar</button>
        </div>
    );
}

export default Card;