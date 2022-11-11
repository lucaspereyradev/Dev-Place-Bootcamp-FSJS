import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import { AppBar, Button, IconButton, InputBase, Paper, Toolbar, Typography } from '@mui/material'
import { Stack } from '@mui/system'

export default function Header() {
    return (
        <AppBar position="static" color="default">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 0, ml: 5 }}>
                    TuTIENDA
                </Typography>
                <div>
                    <Paper
                        component="form"
                        sx={{
                            ml: 35,
                            p: '0px 2px',
                            display: 'flex',
                            alignItems: 'center',
                            width: 350,
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Buscar en la tienda"
                            inputProps={{ 'aria-label': 'buscar en la tienda' }}
                        />
                        <IconButton type="button" sx={{ p: 1 }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
                <div style={{ display: 'flex' }}>
                    <Stack direction="row" spacing={1}>
                        <Button color="inherit">Productos</Button>
                        <Button color="inherit">Iniciar Sesión</Button>
                        <Button color="inherit">Registrarse</Button>
                    </Stack>
                    <IconButton
                        sx={{ ml: 2, p: 1 }}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="logo"
                    >
                        <ShoppingCartIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}
