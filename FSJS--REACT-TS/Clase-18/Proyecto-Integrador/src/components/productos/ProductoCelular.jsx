import React from "react";
import { Card, CardContent, CardActionArea, CardMedia, Typography, CardActions, Button } from "@mui/material";

export default function ProductoCelular() {
    const productos = [
        {
            id: 1,
            img: "https://assets.stickpng.com/thumbs/61d2f93392b57c0004c64747.png",
            title: "iPhone 11 Pro",
            description: "La mejor tablet del mercado.",
            price: "USD$999,99",
        },
        {
            id: 2,
            img: "https://assets.stickpng.com/thumbs/61d2f93392b57c0004c64747.png",
            title: "iPhone 11 Pro",
            description: "La mejor tablet del mercado.",
            price: "USD$1999,99",
        },
        {
            id: 3,
            img: "https://assets.stickpng.com/thumbs/61d2f93392b57c0004c64747.png",
            title: "iPhone 11 Pro",
            description: "La mejor tablet del mercado.",
            price: "USD$1499,99",
        },
        {
            id: 4,
            img: "https://assets.stickpng.com/thumbs/61d2f93392b57c0004c64747.png",
            title: "iPhone 11 Pro",
            description: "La mejor tablet del mercado.",
            price: "USD$1499,99",
        },
    ];

    return (
        <>
            <div style={{ display: "flex", gap: 30, justifyContent: "center" }}>
                {productos.map((element) => (
                    <Card key={element.id} sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia component="img" height="230" image={element.img} alt="MacBook" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {element.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {element.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography mr="auto" ml={1} variant="body1" color="text.secondary">
                                {element.price}
                            </Typography>
                            <Button size="small" color="primary">
                                Comprar
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    );
}
