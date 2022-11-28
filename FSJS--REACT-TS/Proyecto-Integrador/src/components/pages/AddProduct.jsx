import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

export default function LoginComponente() {
    const [category, setCategory] = React.useState('');
    const prevent = (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className="contenedor-form">
            <div className="contenido-contenedor">
                <form action="">
                    <div className="contenido-form caja">
                        <h3>Vende tu Producto!</h3>
                        <input
                            className="input-login"
                            type="text"
                            placeholder="Nombre del producto"
                        />
                        <input className="input-login" type="number" placeholder="$ Precio" />
                        <textarea
                            className="input-login textarea"
                            type="text"
                            placeholder="Descripcion del producto"
                        />

                        <input className="input-login" type="file" placeholder="Añadir imagen" />
                        <div>
                            <FormControl sx={{ width: '26vw' }}>
                                <InputLabel id="demo-simple-select-helper-label">
                                    Categoria
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={category}
                                    label="Categoria"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">Ninguna</MenuItem>
                                    <MenuItem value="Celulares">Celular</MenuItem>
                                    <MenuItem value="Tablets">Tablet</MenuItem>
                                    <MenuItem value="Computadoras">Computadora</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <button onClick={prevent}>Publicar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
