import { Button } from "@mui/material";
import React from "react";

export default function VerHora() {
    const [fecha, setFecha] = React.useState();

    function btnFecha() {
        let dia = new Date();
        let ahora = dia.toLocaleString();
        setFecha(ahora);
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="outlined" onClick={btnFecha}>
                    ¿Que hora es?
                </Button>
            </div>
            <p align="center">{fecha}</p>
        </>
    );
}
