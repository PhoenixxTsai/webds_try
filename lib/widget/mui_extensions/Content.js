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
import Box from "@mui/material/Box";
import { CANVAS_ATTRS } from "./constants";
export const Content = (_a) => {
    var { sx } = _a, contentProps = __rest(_a, ["sx"]);
    return (React.createElement(Box, Object.assign({ sx: Object.assign({ width: "100%", minHeight: CANVAS_ATTRS.MIN_HEIGHT_CONTENT + "px", padding: CANVAS_ATTRS.PADDING + "px", boxSizing: "border-box", position: "relative" }, sx) }, contentProps), contentProps.children));
};
