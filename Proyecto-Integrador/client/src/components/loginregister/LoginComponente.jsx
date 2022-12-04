import { IconButton, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function LoginComponente() {
    const url = 'http://localhost:5050/v0/users/login';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            var bodyFormData = {
                email: email,
                password: password,
            };

            const resp = await axios.post(url, bodyFormData);
            console.log(resp.data);
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <div className="contenedor-form">
            <div className="contenido-contenedor">
                <form onSubmit={handleSubmit}>
                    <div className="contenido-form caja">
                        <h3>Iniciar sesión</h3>
                        <input
                            className="input-login"
                            type="email"
                            placeholder="Mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="input-login"
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div>
                            <input type="checkbox" name="recordar" id="recordar" />
                            <label htmlFor="recordar">Recordar</label>
                        </div>
                        <button type="submit">Ingresar</button>
                        <div className="text-center">
                            <h5>
                                ¿No tenes una cuenta? registrate{' '}
                                <NavLink to="/register">aquí</NavLink>
                            </h5>
                        </div>
                        <div className="contenedor-redes">
                            <Link href="/" color="inherit" underline="none">
                                <IconButton type="button" sx={{ p: 1 }} aria-label="search">
                                    <GoogleIcon fontSize="large" />
                                </IconButton>
                            </Link>
                            <Link href="/" color="inherit" underline="none">
                                <IconButton type="button" sx={{ p: 1 }} aria-label="search">
                                    <FacebookIcon fontSize="large" />
                                </IconButton>
                            </Link>
                            <Link href="/" color="inherit" underline="none">
                                <IconButton type="button" sx={{ p: 1 }} aria-label="search">
                                    <AppleIcon fontSize="large" />
                                </IconButton>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
