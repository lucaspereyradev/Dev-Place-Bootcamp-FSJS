/* eslint-disable eqeqeq */
import { Button, IconButton } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import arrayProductos from '../../datos/Datos';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

function DetailsProducts(props) {
    let productos = arrayProductos;
    let params = useParams();
    let elemento = productos.find((e) => e.id == params.id);
    const { addItem } = useCart();

    return (
        <>
            <div className="contenedor-detalles">
                <div className="contenido-detalles">
                    <div className="imagen-producto">
                        <img src={elemento.img} alt={elemento.title} />
                    </div>
                    <div className="detalles-productos">
                        <div className="">
                            <h1>{elemento.title}</h1>
                            <p>{elemento.description}</p>
                            <h4>USD${elemento.price}</h4>
                        </div>
                        <div>
                            <IconButton
                                sx={{ mr: 2, p: 1 }}
                                size="medium"
                                edge="start"
                                color="inherit"
                                aria-label="logo"
                            >
                                <HorizontalRuleIcon />
                            </IconButton>
                            <span>0</span>
                            <IconButton
                                sx={{ ml: 2, p: 1 }}
                                size="medium"
                                edge="start"
                                color="inherit"
                                aria-label="logo"
                            >
                                <AddIcon />
                            </IconButton>
                            <Button
                                variant="contained"
                                color="inherit"
                                onClick={() => addItem(elemento)}
                            >
                                Agregar al carrito
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsProducts;
