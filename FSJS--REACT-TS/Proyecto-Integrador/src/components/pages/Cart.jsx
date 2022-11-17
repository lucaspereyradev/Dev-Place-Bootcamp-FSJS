import { Button, IconButton } from '@mui/material';
import React from 'react';
import { useCart } from 'react-use-cart';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

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
            <div className="carrito-vacio">
                <h1> EL CARRITO ESTA VACIO </h1>
            </div>
        );
    return (
        <>
            <section className="section-carrito">
                <section className="carrito">
                    <div className="container-title-carrito">
                        <h5 className="carrito-title">
                            {!totalUniqueItems} ITEMS TOTALES: ({totalItems})
                        </h5>
                    </div>

                    {items.map((Element, index) => {
                        return (
                            <>
                                <div className="carrito-cards">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="container-img-carrito">
                                                        <img src={Element.img} alt="" />
                                                    </div>
                                                </td>
                                                <td className="carrito-card-title text-center">
                                                    {Element.title}
                                                </td>

                                                <td className="carrito-card-price text-center">
                                                    {' '}
                                                    PRECIO: {Element.price}
                                                </td>

                                                <td className="carrito-cantidad text-center">
                                                    CANTIDAD: {Element.quantity}
                                                </td>
                                                <td>
                                                    <div className="td-buttons">
                                                        <IconButton
                                                            sx={{ mr: 2, p: 1 }}
                                                            size="medium"
                                                            edge="start"
                                                            color="inherit"
                                                            aria-label="logo"
                                                            onClick={() =>
                                                                updateItemQuantity(
                                                                    Element.id,
                                                                    Element.quantity - 1
                                                                )
                                                            }
                                                        >
                                                            <HorizontalRuleIcon />
                                                        </IconButton>

                                                        <IconButton
                                                            sx={{ ml: 2, p: 1 }}
                                                            size="medium"
                                                            edge="start"
                                                            color="inherit"
                                                            aria-label="logo"
                                                            onClick={() =>
                                                                updateItemQuantity(
                                                                    Element.id,
                                                                    Element.quantity + 1
                                                                )
                                                            }
                                                        >
                                                            <AddIcon />
                                                        </IconButton>

                                                        <Button
                                                            onClick={() => removeItem(Element.id)}
                                                        >
                                                            Eliminar
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        );
                    })}
                </section>
            </section>
        </>
    );
}
