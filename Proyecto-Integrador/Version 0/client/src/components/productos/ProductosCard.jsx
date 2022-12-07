import React from 'react';
import { Card, CardContent, CardActionArea, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';

export default function ProductosCard(props) {
    let containerImage = {
        height: '250px',
        padding: '10px',
    };
    let cardImage = {
        height: '100%',
        backgroundImage: 'url(' + props.img + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });
    function showAlert() {
        Toast.fire({
            icon: 'success',
            title: 'Producto añadido al carrito',
        });
    }

    const { addItem } = useCart();

    return (
        <>
            <Card key={props.id} sx={{ maxWidth: '18rem' }}>
                <Link to={`/productos/${props.id}`}>
                    <CardActionArea>
                        <div style={containerImage}>
                            <div style={cardImage}></div>
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions>
                    <Typography mr="auto" ml={1} variant="body1" color="text.secondary">
                        <b>USD$</b>
                        {props.price}
                    </Typography>

                    <Button
                        size="small"
                        color="primary"
                        onClick={() => {
                            addItem(props.item);
                            showAlert();
                        }}
                    >
                        Comprar
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}
