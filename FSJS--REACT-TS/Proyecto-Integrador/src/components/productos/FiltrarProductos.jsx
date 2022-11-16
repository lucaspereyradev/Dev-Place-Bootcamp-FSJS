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
    // const [productosFiltrados, setproductosFiltrados] = useState([]);

    let renderizar;
    let productosFiltrados = [];

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
    if (busqueda) {
        productosFiltrados = productos.filter((e) => e.title.toLowerCase().includes(busqueda));
    }

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
                            onChange={buscar}
                        />
                        <IconButton type="button" sx={{ p: 1 }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
            </div>
            <div className="contenedor-render">
                <div className="productos-render">
                    {busqueda
                        ? productosFiltrados.map((elemento) => {
                              return (
                                  <ProductosCard
                                      key={elemento.id}
                                      img={elemento.img}
                                      title={elemento.title}
                                      description={elemento.description}
                                      price={elemento.price}
                                  />
                              );
                          })
                        : renderizar}
                </div>
            </div>
        </div>
    );
}
