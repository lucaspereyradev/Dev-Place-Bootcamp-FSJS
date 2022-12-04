import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';

export default function PreguntasFrecuentes() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Grid container spacing={1} sx={{ margin: 'auto', width: '50vw' }}>
            <Grid item md={12}>
                <Typography variant="h5" color="inherit" textAlign="center" margin="auto" mb={3}>
                    Preguntas Frecuentes
                </Typography>
            </Grid>
            <Grid item md={12}>
                <Accordion
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                    sx={{ width: '100%' }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Envios</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Todo sobre el valor, cuanto tarda y como consultarlo.
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle2">¿Cual es el valor del envio?</Typography>
                        <Typography variant="body2">
                            El valor del envio dependera de tu ubicación, puede ser gratuita o
                            debera ser abonada una ves compres tu producto.
                        </Typography>
                        <Typography variant="subtitle2" sx={{ mt: 2 }}>
                            ¿Cuanto tarda en llegarme mi pedido?
                        </Typography>
                        <Typography variant="body2">
                            Tu pedido te llegara 1 semana despues de haberse realizado el pago.
                        </Typography>
                        <Typography variant="subtitle2" sx={{ mt: 2 }}>
                            ¿Como puedo ver el estado de mi envio?
                        </Typography>
                        <Typography variant="body2">
                            Podras ver el estado y seguir de tu pedido desde la página.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item md={12}>
                <Accordion
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                    sx={{ width: '100%' }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Incidencias</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Atención al cliente, devoluciones y contacto.
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle2">
                            ¿Tienen una atención al cliente?
                        </Typography>
                        <Typography variant="body2">
                            Si! y está disponible los dias habiles de 09:00hs a 20:00hs.
                        </Typography>
                        <Typography variant="subtitle2" sx={{ mt: 2 }}>
                            ¿Se permiten devoluciones?
                        </Typography>
                        <Typography variant="body2">
                            Obvio! Podes realizar la devolución antes de cumplir 10 dias una ves
                            hayas recibido tu pedido.
                        </Typography>
                        <Typography variant="subtitle2" sx={{ mt: 2 }}>
                            ¿Cómo puedo contartarme con ustedes?
                        </Typography>
                        <Typography variant="body2">
                            Podras contactarte con nosotros al 0800 333-333 los dias habiles de
                            09:00hs a 20:00hs.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item md={12}>
                <Accordion
                    expanded={expanded === 'panel3'}
                    onChange={handleChange('panel3')}
                    sx={{ width: '100%' }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Sobre los productos
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Autenticidad.</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle2">¿Los productos son originales?</Typography>
                        <Typography variant="body2">
                            Si! todos nuestros productos son originales y vienen con certificado de
                            autenticidad.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    );
}
