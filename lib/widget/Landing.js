import React from "react";
import Typography from "@mui/material/Typography";
import { Canvas } from "./mui_extensions/Canvas";
import { Content } from "./mui_extensions/Content";
import { Controls } from "./mui_extensions/Controls";
export const Landing = (props) => {
    return (React.createElement(Canvas, { title: "Webds Try" },
        React.createElement(Content, { sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            } },
            React.createElement(Typography, { variant: "h1" }, "Content")),
        React.createElement(Controls, { sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            } },
            React.createElement(Typography, { variant: "h3" }, "Controls"))));
};
export default Landing;
