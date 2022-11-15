import { Box, Grid, IconButton, Link } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'

function FooterRedes() {
    return (
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
    )
}

export default FooterRedes
