import React from 'react';
import './ListaProductos.css';
import Card from './Card';
import Productos from './productList.json';

function ListaProductos() {
    return (
        <div className="contenedor1">
            <h3>Procesadores</h3>
            <div className="procesadores">
                {Productos.filter(producto => producto.categoria === 'procesador').map(productoFiltrado => (
                    <Card key={productoFiltrado.id} imagen={productoFiltrado.imagen} nombre={productoFiltrado.nombre} precio={productoFiltrado.precio} />
                ))}
            </div>

            <h3>Tarjetas de Video</h3>
            <div className="tarjetasGraficas">
                {Productos.filter(producto => producto.categoria === 'tarjeta grafica').map(productoFiltrado => (
                    <Card key={productoFiltrado.id} imagen={productoFiltrado.imagen} nombre={productoFiltrado.nombre} precio={productoFiltrado.precio} />
                ))}
            </div>
                
        </div>
    );
}

export default ListaProductos;