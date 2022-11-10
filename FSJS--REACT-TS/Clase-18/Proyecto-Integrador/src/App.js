import React from "react";
import CarouselSlider from "./components/CarouselSlider";
import FiltrarProductos from "./components/FiltrarProductos";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <FiltrarProductos />
        </div>
    );
}

export default App;
