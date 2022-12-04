/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import ProductosCard from './ProductosCard';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

function Productos(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function productosDB() {
            const res = await axios.get('http://localhost:5050/v0/product/');
            setProducts(res.data.data);
        }
        productosDB();
    }, []);

    return (
        <>
            {products.map((elemento) => {
                if (props.categoria != '0') {
                    if (elemento.Category == props.categoria) {
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
                    }
                } else {
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
                }
            })}
        </>
    );
}

export default Productos;
