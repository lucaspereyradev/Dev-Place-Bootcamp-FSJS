import { Button } from "@mui/material";
import React, { useState } from "react";
import Productos from "./Productos";

export default function FiltrarProductos() {
    const [categoria, setCategoria] = useState("Todos");

    let renderizar;

    // eslint-disable-next-line default-case
    switch (categoria) {
        case "Todos":
            renderizar = <Productos categoria="Todos" />;
            break;
        case "Celulares":
            renderizar = <Productos categoria={categoria} />;
            break;
        case "Computadoras":
            renderizar = <Productos categoria={categoria} />;
            break;
        case "Tablets":
            renderizar = <Productos categoria={categoria} />;
            break;
    }

    function OnclickBoton(e) {
        setCategoria(e.target.textContent);
    }

    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "2rem",
                    gap: 10,
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                <Button onClick={OnclickBoton} variant="contained">
                    Todos
                </Button>
                <Button onClick={OnclickBoton} variant="contained">
                    Celulares
                </Button>
                <Button onClick={OnclickBoton} variant="contained">
                    Computadoras
                </Button>
                <Button onClick={OnclickBoton} variant="contained">
                    Tablets
                </Button>
            </div>
            <div style={{ width: "80rem", margin: "auto" }}>{renderizar}</div>
        </>
    );
}
