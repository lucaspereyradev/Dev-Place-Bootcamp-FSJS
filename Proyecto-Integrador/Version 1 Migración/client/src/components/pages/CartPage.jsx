import React from 'react';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function CartPage() {
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
            <div className="h-[60vh] flex justify-center items-center">
                <h1 className="text-[#A3A3A3]"> EL CARRITO ESTA VACIO </h1>
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
            <div className="w-[70%] m-auto">
                <h3>
                    {!totalUniqueItems} PRODUCTOS TOTALES: {totalItems}
                </h3>
                <div className="container">
                    <div>
                        <table className="w-full text-center">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>
                                        <button className="btn-primary" onClick={emptyCart}>
                                            Limpiar carrito
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((elemento, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <tr className="shadow-lg">
                                                <td>
                                                    <img
                                                        className="h-40"
                                                        src={elemento.image}
                                                        alt={elemento.name}
                                                    />
                                                </td>
                                                <td>{elemento.name}</td>
                                                <td>
                                                    USD$<b>{elemento.price}</b>
                                                </td>
                                                <td>
                                                    <button
                                                        className="ml-2, p-1 rounded-[50%]"
                                                        onClick={() =>
                                                            updateItemQuantity(
                                                                elemento.id,
                                                                elemento.quantity - 1
                                                            )
                                                        }
                                                    >
                                                        <i className="fa-solid fa-minus"></i>
                                                    </button>
                                                    {elemento.quantity}
                                                    <button
                                                        className="ml-2, p-1 rounded-[50%]"
                                                        onClick={() =>
                                                            updateItemQuantity(
                                                                elemento.id,
                                                                elemento.quantity + 1
                                                            )
                                                        }
                                                    >
                                                        <i className="fa-solid fa-plus"></i>
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn-primary bg-red-500"
                                                        onClick={() => removeItem(elemento.id)}
                                                    >
                                                        <i className="fa-solid fa-xmark"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div container>
                        <div className="flex justify-end">
                            <div className="m-6 text-center w-64">
                                <span className="text-2xl">
                                    USD$<b>{cartTotal}</b>
                                </span>
                                <hr />
                                <div>
                                    <button className="btn-primary" onClick={showAlert}>
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
