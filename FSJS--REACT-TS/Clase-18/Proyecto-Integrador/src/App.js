import React from 'react'
import './assets/main.css'
import BotonSubir from './components/BotonSubir'
import Carrousel from './components/Carrousel'
import FiltrarProductos from './components/FiltrarProductos'
import Footer from './components/Footer'
import Header from './components/Header'
import PreguntasFrecuentes from './components/PreguntasFrecuentes'

function App() {
    return (
        <div className="App">
            <Header />
            <Carrousel />
            <FiltrarProductos />
            <PreguntasFrecuentes />
            <BotonSubir />
            <Footer />
        </div>
    )
}

export default App
