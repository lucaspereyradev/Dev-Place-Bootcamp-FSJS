/* eslint-disable eqeqeq */
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import PreguntasFrecuentes from '../PreguntasFrecuentes';
import Swal from 'sweetalert2';
import axios from 'axios';

function DetailsProducts() {
    const [product, setProduct] = useState([]);
    let params = useParams();
    let elemento = params.id;
    const { addItem } = useCart();

    useEffect(() => {
        async function productosDB() {
            const res = await axios.get(`http://localhost:5050/v0/product/${elemento}`);
            setProduct(res.data.data[0]);
        }
        productosDB();
    }, [elemento]);

    let image = {
        height: '100%',
    };
    let verticalLane = {
        borderRight: '1px solid rgba(20, 20, 20, 0.2)',
        margin: '0',
        padding: '0',
    };

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });
    function showAlert() {
        Toast.fire({
            icon: 'success',
            title: 'Producto añadido al carrito',
        });
    }

    return (
        <>
            <div className="contenedor-detalles">
                <div className="contenido-detalles">
                    <div className="productImage">
                        <img style={image} src={product.image} alt={product.name} />
                    </div>
                    <div style={verticalLane}></div>
                    <div className="detalles-productos">
                        <div className="">
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <h4>USD${product.price}</h4>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                color="inherit"
                                onClick={() => {
                                    addItem(product);
                                    showAlert();
                                }}
                            >
                                Agregar al carrito
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hr" />
            <PreguntasFrecuentes />
        </>
    );
}

export default DetailsProducts;
