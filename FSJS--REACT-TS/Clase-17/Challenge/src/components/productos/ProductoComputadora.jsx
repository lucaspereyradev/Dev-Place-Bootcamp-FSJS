import React from "react";
import { Card, CardContent, CardActionArea, CardMedia, Typography, CardActions, Button, Fade, Box, Modal, Backdrop } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 200,
    textAlign: "center",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function ProductoComputadora() {
    const productos = [
        {
            id: 1,
            img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray.png",
            title: "Macbook Pro",
            description: "La mejor computadora del mercado.",
            price: "USD$999,99",
        },
        {
            id: 2,
            img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray.png",
            title: "Macbook Pro",
            description: "La mejor computadora del mercado.",
            price: "USD$1999,99",
        },
        {
            id: 3,
            img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray.png",
            title: "Macbook Pro",
            description: "La mejor computadora del mercado.",
            price: "USD$1499,99",
        },
    ];

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div style={{ display: "flex", gap: 30, justifyContent: "center" }}>
                {productos.map((element) => (
                    <Card key={element.id} sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia component="img" height="170" image={element.img} alt="MacBook" />
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
            <div style={{ display: "flex", gap: 30, justifyContent: "center", marginTop: 40 }}>
                <Button onClick={handleOpen}>Resumen de productos</Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Productos
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                {productos.map((element) => (
                                    <p key={element.id}>{element.title}</p>
                                ))}
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </>
    );
}
