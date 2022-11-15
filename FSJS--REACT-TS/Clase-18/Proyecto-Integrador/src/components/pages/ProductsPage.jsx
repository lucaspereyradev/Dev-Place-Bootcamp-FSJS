import React from 'react'
import '../../assets/main.css'
import BotonSubir from '../BotonSubir'
import Footer from '../footer/Footer'
import PreguntasFrecuentes from '../PreguntasFrecuentes'
import FiltrarProductos from '../productos/FiltrarProductos'

function ProductsPage() {
    return (
        <>
            <FiltrarProductos />
            <PreguntasFrecuentes />
            <BotonSubir />
            <Footer />
        </>
    )
}
export default ProductsPage
