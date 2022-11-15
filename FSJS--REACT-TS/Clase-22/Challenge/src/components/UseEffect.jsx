/* eslint-disable default-case */
import React, { useEffect, useState } from 'react';

export default function UseEffect() {
    const [cantidadProducto, setCantidadProducto] = useState(0);

    useEffect(() => {}, [cantidadProducto]);

    function addProducto() {
        setCantidadProducto(() => {
            let resultado = cantidadProducto + 1;
            return resultado;
        });
    }

    function deleteProducto() {
        setCantidadProducto(() => {
            let resultado = cantidadProducto - 1;
            return resultado;
        });
    }

    return (
        <div>
            <button id="incrementarProducto" onClick={deleteProducto}>
                -
            </button>
            <span> {cantidadProducto} </span>
            <button id="decrementarProducto" onClick={addProducto}>
                +
            </button>
            <br />
            <h3>El monto total sera de: {cantidadProducto * 10}</h3>
        </div>
    );
}
