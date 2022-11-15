/* eslint-disable jsx-a11y/alt-text */
import { Paper } from '@mui/material'
import React from 'react'

export default function ItemsCarrousel({ item }) {
    return (
        <Paper sx={{ width: '100%', height: '80vh' }}>
            <div style={{ backgroundSize: 'cover' }}>
                <img src={item.img} style={{ width: '100%', height: '80vh' }}></img>
            </div>
        </Paper>
    )
}
