import { Button, Grid, IconButton } from '@mui/material';
import React, { Fragment } from 'react';
import { useCart } from 'react-use-cart';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function Cart() {
    const {
        items,
        isEmpty,
        totalItems,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty)
        return (
            <div
                style={{
                    height: '60vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1 style={{ color: '#A3A3A3' }}> EL CARRITO ESTA VACIO </h1>
            </div>
        );

    const MySwal = withReactContent(Swal);
    function showAlert() {
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'Compra realizada',
            showConfirmButton: false,
            timer: 1500,
        });
    }
    return (
        <>
            <div
                style={{
                    width: '80vw',
                    margin: 'auto',
                }}
            >
                <h3 className="cart-title">
                    {!totalUniqueItems} PRODUCTOS TOTALES: {totalItems}
                </h3>
                <Grid container spacing={1}>
                    <Grid container item>
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>
                                        <Button
                                            variant="outlined"
                                            color="inherit"
                                            onClick={emptyCart}
                                        >
                                            Limpiar carrito
                                        </Button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((elemento, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <tr className="tr">
                                                <td>
                                                    <img
                                                        src={elemento.image}
                                                        alt={elemento.name}
                                                        style={{ height: '10rem' }}
                                                    />
                                                </td>
                                                <td>{elemento.name}</td>
                                                <td>
                                                    USD$<b>{elemento.price}</b>
                                                </td>
                                                <td>
                                                    <IconButton
                                                        sx={{ mr: 2, p: 1 }}
                                                        size="medium"
                                                        edge="start"
                                                        color="inherit"
                                                        onClick={() =>
                                                            updateItemQuantity(
                                                                elemento.id,
                                                                elemento.quantity - 1
                                                            )
                                                        }
                                                    >
                                                        <HorizontalRuleIcon />
                                                    </IconButton>
                                                    {elemento.quantity}
                                                    <IconButton
                                                        sx={{ ml: 2, p: 1 }}
                                                        size="medium"
                                                        edge="start"
                                                        color="inherit"
                                                        onClick={() =>
                                                            updateItemQuantity(
                                                                elemento.id,
                                                                elemento.quantity + 1
                                                            )
                                                        }
                                                    >
                                                        <AddIcon />
                                                    </IconButton>
                                                </td>
                                                <td>
                                                    <Button
                                                        variant="text"
                                                        color="error"
                                                        size="medium"
                                                        onClick={() => removeItem(elemento.id)}
                                                    >
                                                        Eliminar
                                                    </Button>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div className="details-cart">
                            <div style={{ margin: '1.5rem', textAlign: 'center', width: '250px' }}>
                                <span style={{ fontSize: '22px' }}>
                                    USD$<b>{cartTotal}</b>
                                </span>
                                <hr />
                                <div>
                                    <Button size="large" variant="outlined" onClick={showAlert}>
                                        Comprar
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
