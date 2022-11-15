import Carousel from 'react-material-ui-carousel'
import ItemsCarrousel from './ItemsCarrousel'
import sliderDatos from '../../datos/SliderDatos'

export default function Carrousel() {
    return (
        <Carousel>
            {sliderDatos.map((item) => (
                <ItemsCarrousel key={item.id} item={item} />
            ))}
        </Carousel>
    )
}
