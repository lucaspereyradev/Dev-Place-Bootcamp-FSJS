import * as React from "react";
import { Box, TextField, Grid, Container } from "@mui/material/";

export default function FormularioCompra() {
    return (
        <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "60ch" },
                    flexGrow: 1,
                }}
                noValidate
                autoComplete="off"
            >
                <Grid spacing={2} container direction="row" justifyContent="center" alignItems="center">
                    <Grid item lg={6}>
                        a
                    </Grid>
                    <Grid item lg={6}>
                        a
                    </Grid>
                    <Grid item lg={6}>
                        a
                    </Grid>
                    <Grid item lg={6}>
                        a
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
