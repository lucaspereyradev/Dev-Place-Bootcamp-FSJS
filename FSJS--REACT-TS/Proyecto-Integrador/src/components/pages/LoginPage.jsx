import React from 'react';
import '../../assets/main.css';
import BotonSubir from '../BotonSubir';
import Footer from '../footer/Footer';
import LoginComponente from '../loginregister/LoginComponente';

function LoginPage() {
    return (
        <>
            <LoginComponente />
            <BotonSubir />
            <Footer />
        </>
    );
}
export default LoginPage;
