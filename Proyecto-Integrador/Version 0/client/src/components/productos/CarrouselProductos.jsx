/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-comment-textnodes */
import axios from 'axios';
import { useEffect, useState } from 'react';

import ProductosCard from './ProductosCard';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper';

export default function CarrouselProductos() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function productosDB() {
            const res = await axios.get('http://localhost:5050/v0/product/');
            setProducts(res.data.data);
        }
        productosDB();
    }, []);

    return (
        <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <h1 style={{ textAlign: 'center' }}>Productos</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper container-swiper"
            >
                {products.map((elemento) => {
                    return (
                        <SwiperSlide>
                            <ProductosCard
                                id={elemento.id}
                                item={elemento}
                                img={elemento.image}
                                title={elemento.name}
                                description={elemento.description}
                                price={elemento.price}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
