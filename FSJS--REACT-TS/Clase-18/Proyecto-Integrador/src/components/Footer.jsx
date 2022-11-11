import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box, Container, Grid, IconButton, Link } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <footer style={{ marginTop: '5rem' }}>
            <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor="#f5f5f5" color="white">
                <Container maxWidth="lg">
                    <Grid container spacing={8}>
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
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} mb={2} color="#363636">
                                Redes
                            </Box>
                            <Box>
                                <Link href="/" color="inherit" underline="none">
                                    <IconButton type="button" sx={{ p: 1 }} aria-label="search">
                                        <InstagramIcon fontSize="large" />
                                    </IconButton>
                                </Link>
                                <Link href="/" color="inherit" underline="none">
                                    <IconButton type="button" sx={{ p: 1 }} aria-label="search">
                                        <FacebookIcon fontSize="large" />
                                    </IconButton>
                                </Link>
                                <Link href="/" color="inherit" underline="none">
                                    <IconButton type="button" sx={{ p: 1 }} aria-label="search">
                                        <TwitterIcon fontSize="large" />
                                    </IconButton>
                                </Link>
                            </Box>
                        </Grid>
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
