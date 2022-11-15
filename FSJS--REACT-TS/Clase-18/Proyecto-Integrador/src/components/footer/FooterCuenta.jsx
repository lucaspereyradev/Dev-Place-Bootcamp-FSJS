import { Grid, Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function FooterCuenta() {
    return (
        <Grid item xs={12} sm={4}>
            <Box borderBottom={1} mb={2} color="#363636">
                Cuenta
            </Box>
            <Box>
                <Link href="/" color="#363636" underline="none">
                    Iniciar sesión
                </Link>
            </Box>
            <Box>
                <Link href="/" color="#363636" underline="none">
                    Registrarse
                </Link>
            </Box>
            <Box>
                <Link href="/" color="#363636" underline="none">
                    Ver estado del envio
                </Link>
            </Box>
        </Grid>
    )
}

export default FooterCuenta
