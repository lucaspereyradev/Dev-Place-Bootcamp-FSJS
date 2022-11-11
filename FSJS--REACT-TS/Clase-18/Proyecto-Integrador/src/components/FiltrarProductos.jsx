import { Button } from '@mui/material'
import React, { useState } from 'react'
import Productos from './Productos'

export default function FiltrarProductos() {
    const [categoria, setCategoria] = useState('Todos')

    let renderizar

    // eslint-disable-next-line default-case
    switch (categoria) {
        case 'Todos los productos':
            renderizar = <Productos categoria="Todos los productos" />
            break
        case 'Celulares':
            renderizar = <Productos categoria={categoria} />
            break
        case 'Computadoras':
            renderizar = <Productos categoria={categoria} />
            break
        case 'Tablets':
            renderizar = <Productos categoria={categoria} />
            break
    }

    function OnclickBoton(e) {
        setCategoria(e.target.textContent)
    }

    return (
        <>
            <div
                style={{
                    width: '100%',
                    height: '2rem',
                    gap: 10,
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                <Button onClick={OnclickBoton} variant="contained" color="inherit">
                    Todos los productos
                </Button>
                <Button onClick={OnclickBoton} variant="contained" color="inherit">
                    Celulares
                </Button>
                <Button onClick={OnclickBoton} variant="contained" color="inherit">
                    Computadoras
                </Button>
                <Button onClick={OnclickBoton} variant="contained" color="inherit">
                    Tablets
                </Button>
            </div>
            <div style={{ width: '80rem', margin: 'auto', marginBottom: '5rem' }}>{renderizar}</div>
        </>
    )
}
