/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React from 'react';
import ProductosCard from './ProductosCard';
import arrayProductos from '../../datos/Datos';
import { Grid } from '@mui/material';

function Productos(props) {
    const productos = arrayProductos;

    return (
        <>
            {productos.map((elemento) => {
                if (props.categoria != 'Todos los productos') {
                    if (elemento.category == props.categoria) {
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
                    }
                } else {
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
                }
            })}
        </>
    );
}

export default Productos;
