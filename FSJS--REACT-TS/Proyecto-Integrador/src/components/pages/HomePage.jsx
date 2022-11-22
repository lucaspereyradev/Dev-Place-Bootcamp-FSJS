import React from 'react';
import '../../assets/main.css';
import BotonSubir from '../BotonSubir';
import PreguntasFrecuentes from '../PreguntasFrecuentes';
import CarrouselProductos from '../productos/CarrouselProductos';
import Carrousel from '../carrousel/Carrousel';

function HomePage() {
    return (
        <>
            <Carrousel />
            <CarrouselProductos />
            <PreguntasFrecuentes />
            <BotonSubir />
        </>
    );
}
export default HomePage;
