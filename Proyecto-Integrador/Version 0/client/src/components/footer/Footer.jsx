import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import FooterAyuda from './FooterAyuda'
import FooterCuenta from './FooterCuenta'
import FooterRedes from './FooterRedes'

export default function Footer() {
    return (
        <footer style={{ marginTop: '5rem' }}>
            <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor="#f5f5f5" color="white">
                <Container maxWidth="lg">
                    <Grid container spacing={8}>
                        <FooterAyuda />
                        <FooterCuenta />
                        <FooterRedes />
                    </Grid>
                    <Box
                        textAlign="center"
                        pt={{ xs: 5, sm: 10 }}
                        pb={{ xs: 5, sm: 10 }}
                        color="#363636"
                    >
                        Diseñado por Lucas Pereyra &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}
