/* eslint-disable eqeqeq */
import { Button } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import arrayProductos from '../../datos/Datos';
import PreguntasFrecuentes from '../PreguntasFrecuentes';
import BotonSubir from '../BotonSubir';
import Swal from 'sweetalert2';

function DetailsProducts() {
    let productos = arrayProductos;
    let params = useParams();
    let elemento = productos.find((e) => e.id == params.id);
    const { addItem } = useCart();

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
                        <img style={image} src={elemento.img} alt={elemento.title} />
                    </div>
                    <div style={verticalLane}></div>
                    <div className="detalles-productos">
                        <div className="">
                            <h1>{elemento.title}</h1>
                            <p>{elemento.description}</p>
                            <h4>USD${elemento.price}</h4>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                color="inherit"
                                onClick={() => {
                                    addItem(elemento);
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
            <BotonSubir />
        </>
    );
}

export default DetailsProducts;
