import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export default function BotonSubir() {
    window.onscroll = () => {
        if (document.documentElement.scrollTop > 100) {
            document.querySelector('.contenedor-subir').classList.add('mostrar-contenedor')
        } else {
            document.querySelector('.contenedor-subir').classList.remove('mostrar-contenedor')
        }
    }

    const subir = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className="contenedor-subir" onClick={subir}>
            <div className="boton-subir">
                <KeyboardArrowUpIcon className="icono-subir" fontSize="large" />
            </div>
        </div>
    )
}
