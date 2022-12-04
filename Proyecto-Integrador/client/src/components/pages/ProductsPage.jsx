import React from 'react';
import '../../assets/main.css';
import PreguntasFrecuentes from '../PreguntasFrecuentes';
import FiltrarProductos from '../productos/FiltrarProductos';

function ProductsPage() {
    return (
        <>
            <FiltrarProductos />
            <PreguntasFrecuentes />
        </>
    );
}
export default ProductsPage;
