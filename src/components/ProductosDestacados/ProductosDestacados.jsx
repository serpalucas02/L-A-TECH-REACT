import React from 'react';
import './ProductosDestacados.css';
import Card from '../ListaProductos/Card';
import Productos from '../ListaProductos/productList.json';
import Carousel from 'react-elastic-carousel';

function ProductosDestacados() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 },
      ];

    return (
        <div>
            <h3 className='tituloPD'>Productos Destacados</h3>
            <div className='contenedorPD'>
                <Carousel breakPoints={breakPoints}>
                {Productos.filter(producto => producto.oferta === '10%').map(productoFiltrado => (
                    <Card imagen={productoFiltrado.imagen} nombre={productoFiltrado.nombre} precio={productoFiltrado.precio} />
                ))}
                </Carousel>
            </div>
                
        </div>
    );
}

export default ProductosDestacados;