/* eslint-disable default-case */
/* eslint-disable array-callback-return */
import { Button, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import Productos from './Productos';
import arrayProductos from '../../datos/Datos';
import ProductosCard from './ProductosCard';

export default function FiltrarProductos() {
    const productos = arrayProductos;
    const [categoria, setCategoria] = useState('Todos los productos');
    const [busqueda, setBusqueda] = useState('');

    let renderizar;

    // eslint-disable-next-line default-case

    function OnclickBoton(e) {
        setCategoria(e.target.textContent);
    }

    const form = (e) => {
        e.preventDefault();
    };

    const buscar = (e) => {
        setBusqueda(e.target.value.toLowerCase());
    };
    if (!busqueda) {
        switch (categoria) {
            case 'Todos los productos':
                renderizar = <Productos categoria="Todos los productos" />;
                break;
            case 'Celulares':
                renderizar = <Productos categoria={categoria} />;
                break;
            case 'Computadoras':
                renderizar = <Productos categoria={categoria} />;
                break;
            case 'Tablets':
                renderizar = <Productos categoria={categoria} />;
                break;
        }
    } else {
        var algo = productos.filter((elemento) => {
            elemento.title.toLowerCase().includes(busqueda);
        });
        console.log(algo);
    }

    // algo.map((e, index) => {
    //     return (
    //         <ProductosCard
    //             key={index}
    //             img={e.img}
    //             title={e.title}
    //             description={e.description}
    //             price={e.price}
    //         />
    //     )
    // })

    // renderizar += (
    //     <ProductosCard
    //         key={index}
    //         img={elemento.img}
    //         title={elemento.title}
    //         description={elemento.description}
    //         price={elemento.price}
    //     />
    // )
    //}
    console.log(busqueda);

    return (
        <div className="contenedor-filtrar">
            <div className="contenido-filtrar">
                <div className="filtrar">
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

                <div className="contenedor-busqueda">
                    <Paper
                        component="form"
                        onSubmit={form}
                        sx={{
                            p: '0px 2px',
                            display: 'flex',
                            alignItems: 'center',
                            width: '20vw',
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Buscar en la tienda"
                            inputProps={{ 'aria-label': 'buscar en la tienda' }}
                            value={busqueda}
                            onChange={buscar}
                        />
                        <IconButton type="button" sx={{ p: 1 }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
            </div>
            <div style={{ width: '80rem', margin: 'auto', marginBottom: '5rem' }}>{renderizar}</div>
        </div>
    );
}
