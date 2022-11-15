import React from 'react'
import { NavLink } from 'react-router-dom'

export default function RegisterComponente() {
    const prevenir = (event) => {
        event.preventDefault()
    }

    return (
        <div className="contenedor-form">
            <div className="contenido-contenedor">
                <form action="">
                    <div className="contenido-form caja">
                        <h3>Registrarse</h3>
                        <input className="input-login" type="text" placeholder="*Nombre" />
                        <input className="input-login" type="email" placeholder="*Mail" />
                        <input className="input-login" type="password" placeholder="*Contraseña" />
                        <input
                            className="input-login"
                            type="password"
                            placeholder="*Repetir contraseña"
                        />
                        <div>
                            <input type="checkbox" name="recibirCorreos" id="recibirCorreos" />
                            <label htmlFor="recibirCorreos">
                                Recibir correos con actualizaciónes
                            </label>
                        </div>
                        <button onClick={prevenir}>Registrarse</button>
                        <div className="text-center">
                            <h5>
                                ¿Ya tenes una cuenta? ingresa <NavLink to="/login">aquí</NavLink>
                            </h5>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
