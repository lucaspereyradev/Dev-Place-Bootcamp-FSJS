import React from 'react'
import '../../assets/main.css'
import BotonSubir from '../BotonSubir'
import Footer from '../footer/Footer'
import PreguntasFrecuentes from '../PreguntasFrecuentes'
import LoginComponente from '../loginregister/LoginComponente'

function LoginPage() {
    return (
        <>
            <LoginComponente />
            <PreguntasFrecuentes />
            <BotonSubir />
            <Footer />
        </>
    )
}
export default LoginPage
