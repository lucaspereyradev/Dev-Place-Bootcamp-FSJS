import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProductoComputadora from "../productos/ProductoComputadora";
import ProductoCelular from "../productos/ProductoCelular";
import ProductoTablet from "../productos/ProductoTablet";
import VerHora from "./VerHora";

export default function LabTabs() {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex", justifyContent: "center" }}>
                    <TabList onChange={handleChange}>
                        <Tab label="Computadoras" value="1" />
                        <Tab label="Celulares" value="2" />
                        <Tab label="Tablets" value="3" />
                        <Tab label="Todos los productos" value="4" />
                        <Tab label="Ver hora" value="5" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <ProductoComputadora />
                </TabPanel>
                <TabPanel value="2">
                    <ProductoCelular />
                </TabPanel>
                <TabPanel value="3">
                    <ProductoTablet />
                </TabPanel>
                <TabPanel value="4">
                    <ProductoComputadora />
                    <ProductoCelular />
                    <ProductoTablet />
                </TabPanel>
                <TabPanel value="5">
                    <VerHora />
                </TabPanel>
            </TabContext>
        </Box>
    );
}
