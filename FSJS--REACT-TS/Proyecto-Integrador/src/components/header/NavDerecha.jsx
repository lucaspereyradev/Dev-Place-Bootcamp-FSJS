import { Button, IconButton, Stack } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function NavDerecha() {
    const prevenirNavegador = (e) => {
        e.stopPropagation();
    };

    return (
        <div style={{ display: 'flex' }}>
            <Stack direction="row" spacing={1}>
                <Button href="/productos" color="inherit" onClick={prevenirNavegador}>
                    Productos
                </Button>
                <Button href="/login" color="inherit">
                    Iniciar Sesión
                </Button>
                <Button href="/register" color="inherit">
                    Registrarse
                </Button>
            </Stack>
            <Link to="/carrito">
                <IconButton
                    sx={{ ml: 2, p: 1 }}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="logo"
                >
                    <ShoppingCartIcon />
                </IconButton>
            </Link>
        </div>
    );
}

export default NavDerecha;
