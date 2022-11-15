/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React from 'react'
import ProductosCard from './ProductosCard'
import arrayProductos from '../../datos/Datos'

function Productos(props) {
    const productos = arrayProductos

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    gap: 30,
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: '2.3rem',
                }}
            >
                {productos.map((elemento, index) => {
                    if (props.categoria != 'Todos los productos') {
                        if (elemento.category == props.categoria) {
                            return (
                                <ProductosCard
                                    key={index}
                                    img={elemento.img}
                                    title={elemento.title}
                                    description={elemento.description}
                                    price={elemento.price}
                                />
                            )
                        }
                    } else {
                        return (
                            <ProductosCard
                                key={index}
                                img={elemento.img}
                                title={elemento.title}
                                description={elemento.description}
                                price={elemento.price}
                            />
                        )
                    }
                })}
            </div>
        </>
    )
}

export default Productos
