import React, { useEffect, useState, useRef } from "react";

export const SegundoEjercicio = () => {
    let [total, setTotal] = useState(0);
    let resultado = useRef();

    useEffect(() => {
        resultado.current.textContent = total;
    }, [total]);

    let sumar = () => {
        let numero1 = document.getElementById("inputNumber1").value;
        let numero2 = document.getElementById("inputNumber2").value;
        setTotal(parseInt(numero1) + parseInt(numero2));
    };

    return (
        <div>
            <h2>Sumar 2 números</h2>
            <input id="inputNumber1" placeholder="First Number" type="number" />
            <input id="inputNumber2" placeholder="Second Number" type="number" />

            <button onClick={sumar}>Sumar</button>
            <p ref={resultado}>Total: {total}</p>
        </div>
    );
};
