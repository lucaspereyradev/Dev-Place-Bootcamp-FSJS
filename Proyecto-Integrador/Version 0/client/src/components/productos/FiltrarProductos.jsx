/* eslint-disable default-case */
/* eslint-disable array-callback-return */
import { Button, Grid, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import Productos from './Productos';
import ProductosCard from './ProductosCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function FiltrarProductos() {
    const [categoria, setCategoria] = useState('0');
    const [busqueda, setBusqueda] = useState('');
    const [products, setProducts] = useState([]);

    let renderizar;
    let productosFiltrados = [];

    useEffect(() => {
        async function productosDB() {
            const res = await axios.get('http://localhost:5050/v0/product/');
            setProducts(res.data.data);
        }
        productosDB();
    }, []);
    // eslint-disable-next-line default-case

    function OnclickBoton(e) {
        setCategoria(e.target.value);
    }
    const form = (e) => {
        e.preventDefault();
    };

    const buscar = (e) => {
        setBusqueda(e.target.value.toLowerCase());
    };

    switch (categoria) {
        case '0':
            renderizar = <Productos categoria="0" />;
            break;
        case '1':
            renderizar = <Productos categoria={categoria} />;
            break;
        case '2':
            renderizar = <Productos categoria={categoria} />;
            break;
        case '3':
            renderizar = <Productos categoria={categoria} />;
            break;
    }
    if (busqueda) {
        productosFiltrados = products.filter((e) => e.name.toLowerCase().includes(busqueda));
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
                        value="0"
                    >
                        Todos los productos
                    </Button>
                    <Button
                        onClick={OnclickBoton}
                        sx={{ marginRight: 2, marginBottom: 1 }}
                        variant="contained"
                        color="inherit"
                        value="1"
                    >
                        Celulares
                    </Button>
                    <Button
                        onClick={OnclickBoton}
                        sx={{ marginRight: 2, marginBottom: 1 }}
                        variant="contained"
                        color="inherit"
                        value="3"
                    >
                        Computadoras
                    </Button>
                    <Button
                        onClick={OnclickBoton}
                        sx={{ marginRight: 2, marginBottom: 1 }}
                        variant="contained"
                        color="inherit"
                        value="2"
                    >
                        Tablets
                    </Button>
                </Grid>
                <Grid
                    item
                    md={4}
                    sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 1 }}
                >
                    <Link to="/vender">
                        <Button
                            sx={{ marginRight: 2, marginBottom: 1 }}
                            variant="contained"
                            color="primary"
                        >
                            ¡Vende!
                        </Button>
                    </Link>
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
                              <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={elemento.id}>
                                  <ProductosCard
                                      id={elemento.id}
                                      item={elemento}
                                      img={elemento.image}
                                      title={elemento.name}
                                      description={elemento.description}
                                      price={elemento.price}
                                  />
                              </Grid>
                          );
                      })
                    : renderizar}
            </Grid>
        </>
    );
}
