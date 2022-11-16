import React from 'react';
import {
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Typography,
    CardActions,
    Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function ProductosCard(props) {
    return (
        <>
            <Card key={props.id} sx={{ width: '17rem', height: 'auto' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="230"
                        image={props.img}
                        alt={props.title}
                        sx={{ marginTop: '0.5rem' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography mr="auto" ml={1} variant="body1" color="text.secondary">
                        <b>USD$</b>
                        {props.price}
                    </Typography>
                    <Link to={`/detailProduct/${props.id}`}>
                        <Button size="small" color="primary">
                            Comprar
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </>
    );
}
