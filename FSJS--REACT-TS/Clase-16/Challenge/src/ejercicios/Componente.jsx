import React from "react";

export class Car extends React.Component {
    render() {
        return <h2>Soy un Auto en un Clase</h2>;
    }
}

export const FunctionCar = (props) => {
    return <h2>Soy un Auto {props.color}</h2>;
};

export const Garage = () => {
    return (
        <>
            <h1>¿Quien sos vos?</h1>
            <FunctionCar />
        </>
    );
};
