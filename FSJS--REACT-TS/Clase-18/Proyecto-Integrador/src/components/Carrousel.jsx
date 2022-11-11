import Carousel from 'react-material-ui-carousel'
import Item from './ItemsCarrousel'
import sliderDatos from '../datos/SliderDatos'

export default function Carrousel() {
    return (
        <Carousel>
            {sliderDatos.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </Carousel>
    )
}
