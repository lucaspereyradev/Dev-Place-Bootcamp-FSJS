import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';

export default function LoginComponente() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');

    const url = 'http://localhost:5050/v0/product';

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('price', price);
            formData.append('stock', stock);
            formData.append('description', description);
            formData.append('image', image[0]);
            formData.append('Category', category);
            const resp = await axios.post(url, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log(resp.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="contenedor-form">
            <div className="contenido-contenedor">
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div className="contenido-form caja">
                        <h3>Vende tu Producto!</h3>
                        <input
                            name="name"
                            className="input-login"
                            type="text"
                            value={name}
                            placeholder="Nombre del producto"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            name="price"
                            className="input-login"
                            type="number"
                            value={price}
                            placeholder="$ Precio"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <input
                            name="stock"
                            className="input-login"
                            type="number"
                            value={stock}
                            placeholder="Stock"
                            onChange={(e) => parseInt(setStock(e.target.value))}
                        />
                        <textarea
                            name="description"
                            className="input-login textarea"
                            type="text"
                            value={description}
                            placeholder="Descripcion del producto"
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <input
                            name="image"
                            className="input-login"
                            type="file"
                            placeholder="Añadir imagen"
                            onChange={(e) => setImage(e.target.files)}
                        />
                        <div>
                            <FormControl sx={{ width: '26vw' }}>
                                <InputLabel id="demo-simple-select-helper-label">
                                    Categoria
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={category}
                                    label="category"
                                    name="category"
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <MenuItem value="">Ninguna</MenuItem>
                                    <MenuItem value="1">Celular</MenuItem>
                                    <MenuItem value="2">Tablet</MenuItem>
                                    <MenuItem value="3">Computadora</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <button type="submit" onSubmit={handleSubmit}>
                            Publicar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
