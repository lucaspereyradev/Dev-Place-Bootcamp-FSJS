/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React from "react";
import ProductosCard from "./ProductosCard";
import arrayProductos from "../datos/Datos";
import Carousel from "react-material-ui-carousel";

function Productos(props) {
    const productos = arrayProductos;

    return (
        <>
            {/* <Carousel height={400} sx={{ marginTop: "2.3rem" }}> */}
            <div style={{ display: "flex", gap: 30, flexWrap: "wrap", justifyContent: "center", marginTop: "2.3rem" }}>
                {productos.map((elemento, key) => {
                    if (props.categoria != "Todos") {
                        if (elemento.category == props.categoria) {
                            return (
                                <ProductosCard
                                    key={key}
                                    img={elemento.img}
                                    title={elemento.title}
                                    description={elemento.description}
                                    price={elemento.price}
                                />
                            );
                        }
                    } else {
                        return (
                            <ProductosCard
                                key={key}
                                img={elemento.img}
                                title={elemento.title}
                                description={elemento.description}
                                price={elemento.price}
                            />
                        );
                    }
                })}
            </div>
            {/* </Carousel> */}
        </>
    );
}

export default Productos;
