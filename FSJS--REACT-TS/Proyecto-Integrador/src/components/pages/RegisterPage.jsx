import React from 'react'
import '../../assets/main.css'
import BotonSubir from '../BotonSubir'
import Footer from '../footer/Footer'
import PreguntasFrecuentes from '../PreguntasFrecuentes'
import RegisterComponente from '../loginregister/RegisterComponente'

function LoginPage() {
    return (
        <>
            <RegisterComponente />
            <PreguntasFrecuentes />
            <BotonSubir />
            <Footer />
        </>
    )
}
export default LoginPage
