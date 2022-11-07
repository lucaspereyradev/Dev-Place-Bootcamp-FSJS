import React from "react";
import { FunctionCar, Car, Garage } from "./ejercicios/Componente";

function App() {
    return (
        <div>
            <Car />
            <hr />
            <FunctionCar />
            <hr />
            <FunctionCar color="Rojo" />
            <hr />
            <Garage />
        </div>
    );
}

export default App;
