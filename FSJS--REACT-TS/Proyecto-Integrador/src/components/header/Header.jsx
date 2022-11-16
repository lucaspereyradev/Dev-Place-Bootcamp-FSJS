import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import NavDerecha from './NavDerecha';
import { Outlet, Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <AppBar position="static" color="default">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Link to="/">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0, ml: 5 }}>
                            <h5 className="logo">
                                <i>TuTienda</i>
                            </h5>
                        </Typography>
                    </Link>

                    <NavDerecha />
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    );
}
