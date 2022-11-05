import React from "react";

export const PrimerEjercicio = () => {
    const users = [
        { name: "Lucas", id: 1 },
        { name: "Juan", id: 2 },
        { name: "Pepe", id: 3 },
    ];

    return (
        <>
            <h3>Usuarios</h3>
            <ul>
                {users.map((element, indice) => {
                    return (
                        <li key={indice}>
                            ID: {element.id} | Nombre: {element.name}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
