/* eslint-disable default-case */
/* eslint-disable array-callback-return */
import { Button, Grid, IconButton, InputBase, Paper } from '@mui/material';
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
        <>
            <Grid container className="filter-container">
                <Grid item md={8}>
                    <Button
                        onClick={OnclickBoton}
                        sx={{ marginRight: 2, marginBottom: 1 }}
                        variant="contained"
                        color="inherit"
                    >
                        Todos los productos
                    </Button>
                    <Button
                        onClick={OnclickBoton}
                        sx={{ marginRight: 2, marginBottom: 1 }}
                        variant="contained"
                        color="inherit"
                    >
                        Celulares
                    </Button>
                    <Button
                        onClick={OnclickBoton}
                        sx={{ marginRight: 2, marginBottom: 1 }}
                        variant="contained"
                        color="inherit"
                    >
                        Computadoras
                    </Button>
                    <Button
                        onClick={OnclickBoton}
                        sx={{ marginRight: 2, marginBottom: 1 }}
                        variant="contained"
                        color="inherit"
                    >
                        Tablets
                    </Button>
                </Grid>
                <Grid
                    item
                    md={4}
                    sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 1 }}
                >
                    <Paper
                        component="form"
                        onSubmit={form}
                        sx={{
                            p: '0px 2px',
                            display: 'flex',
                            alignItems: 'center',
                            width: '300px',
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Buscar en la tienda"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={buscar}
                        />
                        <IconButton type="button" sx={{ p: 1 }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={{ xs: 2, md: 3 }} className="render-container">
                {busqueda
                    ? productosFiltrados.map((elemento) => {
                          return (
                              <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                                  <ProductosCard
                                      id={elemento.id}
                                      item={elemento}
                                      key={elemento.id}
                                      img={elemento.img}
                                      title={elemento.title}
                                      description={elemento.description}
                                      price={elemento.price}
                                  />
                              </Grid>
                          );
                      })
                    : renderizar}
            </Grid>
            {/* </div> */}
        </>
    );
}
