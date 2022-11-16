/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React from 'react';
import ProductosCard from './ProductosCard';
import arrayProductos from '../../datos/Datos';

function Productos(props) {
    const productos = arrayProductos;

    return (
        <>
            {productos.map((elemento) => {
                if (props.categoria != 'Todos los productos') {
                    if (elemento.category == props.categoria) {
                        return (
                            <ProductosCard
                                id={elemento.id}
                                key={elemento.id}
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
                            id={elemento.id}
                            key={elemento.id}
                            img={elemento.img}
                            title={elemento.title}
                            description={elemento.description}
                            price={elemento.price}
                        />
                    );
                }
            })}
        </>
    );
}

export default Productos;
