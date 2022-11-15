import { IconButton, Link } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import AppleIcon from '@mui/icons-material/Apple'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LoginComponente() {
    const prevenir = (event) => {
        event.preventDefault()
    }

    return (
        <div className="contenedor-form">
            <div className="contenido-contenedor">
                <form action="">
                    <div className="contenido-form caja">
                        <h3>Iniciar sesión</h3>
                        <input className="input-login" type="email" placeholder="Mail" />
                        <input className="input-login" type="password" placeholder="Contraseña" />
                        <div>
                            <input type="checkbox" name="recordar" id="recordar" />
                            <label htmlFor="recordar">Recordar</label>
                        </div>
                        <button onClick={prevenir}>Ingresar</button>
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
    )
}
