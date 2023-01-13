var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { CANVAS_ATTRS } from "./constants";
export const Canvas = (_a) => {
    var { title, width = null, minWidth = null, stretch = false, showHelp = false, annotation = null, sx } = _a, canvasProps = __rest(_a, ["title", "width", "minWidth", "stretch", "showHelp", "annotation", "sx"]);
    const theme = useTheme();
    return (React.createElement(Paper, Object.assign({ elevation: 7, sx: Object.assign({ width: stretch
                ? "100%"
                : minWidth !== null
                    ? null
                    : (width ? width : CANVAS_ATTRS.WIDTH) + "px", minWidth: minWidth ? minWidth + "px" : "auto", borderStyle: "solid", borderWidth: theme.palette.mode === "light" ? "0px" : "1px", borderColor: "canvas.border", borderRadius: "10px" }, sx) }, canvasProps),
        React.createElement(Stack, { spacing: 0, divider: React.createElement(Divider, { orientation: "horizontal" }) },
            React.createElement(Box, { sx: {
                    width: stretch ? (minWidth ? minWidth + "px" : "100%") : "100%",
                    height: CANVAS_ATTRS.HEIGHT_TITLE + "px",
                    padding: CANVAS_ATTRS.PADDING + "px",
                    boxSizing: "border-box",
                    position: "relative"
                } },
                React.createElement(Typography, { variant: "h5", sx: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontWeight: "bold"
                    } }, title),
                showHelp && (React.createElement(Button, { variant: "text", sx: {
                        position: "absolute",
                        top: "50%",
                        left: "16px",
                        transform: "translate(0%, -50%)"
                    } },
                    React.createElement(Typography, { variant: "underline" }, "Help"))),
                annotation && (React.createElement("div", { style: {
                        position: "absolute",
                        top: "50%",
                        right: "16px",
                        transform: "translate(0%, -50%)"
                    } },
                    React.createElement(Typography, { variant: "body2" }, annotation)))),
            canvasProps.children)));
};
