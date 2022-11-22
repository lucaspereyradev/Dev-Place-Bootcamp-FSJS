import React from 'react';
import '../../assets/main.css';
import BotonSubir from '../BotonSubir';
import PreguntasFrecuentes from '../PreguntasFrecuentes';
import FiltrarProductos from '../productos/FiltrarProductos';

function ProductsPage() {
    return (
        <>
            <FiltrarProductos />
            <PreguntasFrecuentes />
            <BotonSubir />
        </>
    );
}
export default ProductsPage;
