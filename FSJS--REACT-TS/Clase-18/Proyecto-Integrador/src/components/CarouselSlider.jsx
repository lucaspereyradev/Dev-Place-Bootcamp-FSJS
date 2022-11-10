import React from "react";
import Carousel from "react-material-ui-carousel";
import ProductoCelular from "./productos/ProductoCelular";
import ProductoTablet from "./productos/ProductoTablet";
import ProductoComputadora from "./productos/ProductoComputadora";

export default function CarouselSlider() {
    return (
        <Carousel height={400} sx={{ marginTop: "2.3rem" }}>
            <ProductoCelular />
            <ProductoComputadora />
            <ProductoTablet />
        </Carousel>
    );
}
