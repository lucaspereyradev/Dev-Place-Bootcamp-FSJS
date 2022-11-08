import React from "react";
import ComponenteHijo from "./componenteHijo/ComponenteHijo";
import ComponenteNieto from "./componenteHijo/componenteNieto/ComponenteNieto";

export default function ComponentePadre() {
    return (
        <>
            <h1 align="center">Soy un componente Padre</h1>
            <ComponenteHijo />
            <ComponenteNieto />
        </>
    );
}
