import React, { useState, useRef } from 'react';

export default function UseState() {
    const [enviarInfo1, setEnviarInput1] = useState();
    const [enviarInfo2, setEnviarInput2] = useState();
    const referenciaInput1 = useRef();
    const referenciaInput2 = useRef();

    const enviarDatosInputs = (e) => {
        e.preventDefault();
        setEnviarInput1(referenciaInput1.current.value);
        setEnviarInput2(referenciaInput2.current.value);
    };

    console.log(enviarInfo1, enviarInfo2);
    const mostrar = () => {
        if (enviarInfo1 && enviarInfo2) {
            alert(enviarInfo1 + '\n' + enviarInfo2);
        } else alert('No completaste 1 de los campos');
    };

    return (
        <div>
            <form>
                <input type="text" ref={referenciaInput1} />
                <input type="text" ref={referenciaInput2} />
                <button onClick={enviarDatosInputs}>enviar</button>
                <button onClick={mostrar}>mostrar</button>
            </form>
        </div>
    );
}
