import Carousel from 'react-material-ui-carousel'
import { tablets, celulares, computadoras } from '../../datos/productosCarrousel'
import ProductosCard from './ProductosCard'

export default function CarrouselProductos() {
    return (
        <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <Carousel>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 30 }}>
                    {celulares.map((element, index) => (
                        <ProductosCard
                            key={index}
                            img={element.img}
                            title={element.title}
                            description={element.description}
                            price={element.price}
                        />
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 30 }}>
                    {computadoras.map((element, index) => (
                        <ProductosCard
                            key={index}
                            img={element.img}
                            title={element.title}
                            description={element.description}
                            price={element.price}
                        />
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 30 }}>
                    {tablets.map((element, index) => (
                        <ProductosCard
                            key={index}
                            img={element.img}
                            title={element.title}
                            description={element.description}
                            price={element.price}
                        />
                    ))}
                </div>
            </Carousel>
        </div>
    )
}
