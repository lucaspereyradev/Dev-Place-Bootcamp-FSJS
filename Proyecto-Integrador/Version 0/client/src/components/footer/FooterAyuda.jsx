import { Box, Grid, Link } from '@mui/material'
import React from 'react'

function FooterAyuda() {
    return (
        <Grid item xs={12} sm={4}>
            <Box borderBottom={1} mb={2} color="#363636">
                Ayuda
            </Box>
            <Box>
                <Link href="/" color="#363636" underline="none">
                    Envios
                </Link>
            </Box>
            <Box>
                <Link href="/" color="#363636" underline="none">
                    Devoluciones
                </Link>
            </Box>
            <Box>
                <Link href="/" color="#363636" underline="none">
                    Contacto
                </Link>
            </Box>
            <Box>
                <Link href="/" color="#363636" underline="none">
                    Soporte
                </Link>
            </Box>
            <Box>
                <Link href="/" color="#363636" underline="none">
                    Privacidad
                </Link>
            </Box>
        </Grid>
    )
}

export default FooterAyuda
