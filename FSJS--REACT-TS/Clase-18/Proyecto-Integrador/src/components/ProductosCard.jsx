import React from "react";
import { Card, CardContent, CardActionArea, CardMedia, Typography, CardActions, Button } from "@mui/material";

export default function ProductosCard(props) {
    return (
        <>
            <Card key={props.id} sx={{ width: "18rem" }}>
                <CardActionArea>
                    <CardMedia component="img" height="230" image={props.img} alt={props.title} />
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
                        {props.price}
                    </Typography>
                    <Button size="small" color="primary">
                        Comprar
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}
