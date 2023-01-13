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
import React, { useEffect, useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import { STEPPER_ATTRS } from "./constants";
const HOVERED_COLOR_LIGHT = "rgba(0, 0, 0, 0.53)";
const HOVERED_COLOR_DARK = "rgba(255, 255, 255, 0.65)";
let verticalStepperIconSize;
const VerticalStepIconRoot = styled("div")(({ theme, ownerState }) => (Object.assign({ backgroundColor: theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.5)"
        : "rgba(0, 0, 0, 0.38)", width: verticalStepperIconSize, height: verticalStepperIconSize, zIndex: 1, color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", "&:hover": !ownerState.strict &&
        !ownerState.active && {
        cursor: "pointer",
        backgroundColor: theme.palette.mode === "dark" ? HOVERED_COLOR_DARK : HOVERED_COLOR_LIGHT
    } }, (ownerState.active && { backgroundColor: "#007dc3" }))));
const VerticalStepIcon = (props) => {
    const { strict, active, completed, className } = props;
    return (React.createElement(VerticalStepIconRoot, { ownerState: { strict, active, completed }, className: className, onClick: () => {
            if (props.stepClick) {
                props.stepClick(props.icon);
            }
        }, onMouseOver: () => {
            if (props.stepHover) {
                props.stepHover(props.icon);
            }
        }, onMouseOut: () => {
            if (props.stepUnhover) {
                props.stepUnhover();
            }
        } }, String(props.icon)));
};
export const VerticalStepper = (_a) => {
    var { steps, activeStep, strict = false, iconSize = STEPPER_ATTRS.ICON_SIZE, connectorMinHeight = STEPPER_ATTRS.CONNECTOR_MIN_HEIGHT, onStepClick = undefined, sx } = _a, verticalStepperProps = __rest(_a, ["steps", "activeStep", "strict", "iconSize", "connectorMinHeight", "onStepClick", "sx"]);
    const [activeVerticalStep, setActiveVerticalStep] = useState(1);
    const [hoveredVerticalStep, setHoveredVerticalStep] = useState(0);
    const theme = useTheme();
    verticalStepperIconSize = iconSize;
    useEffect(() => {
        setActiveVerticalStep(activeStep);
    }, [activeStep]);
    return (React.createElement(Stepper, Object.assign({ activeStep: activeVerticalStep - 1, orientation: "vertical", connector: null, sx: Object.assign({ whiteSpace: "normal", "& .MuiStepContent-root": {
                minHeight: connectorMinHeight + "px",
                marginLeft: iconSize / 2 + "px"
            } }, sx) }, verticalStepperProps), steps.map((step, index) => (React.createElement(Step, { key: step.label },
        React.createElement(StepLabel, { StepIconComponent: VerticalStepIcon, StepIconProps: {
                strict: strict,
                stepClick: (clickedStep) => {
                    if (strict) {
                        return;
                    }
                    setActiveVerticalStep(clickedStep);
                    if (onStepClick !== undefined) {
                        onStepClick(clickedStep);
                    }
                },
                stepHover: (hoveredStep) => {
                    if (strict) {
                        return;
                    }
                    setHoveredVerticalStep(hoveredStep);
                },
                stepUnhover: () => {
                    if (strict) {
                        return;
                    }
                    setHoveredVerticalStep(0);
                }
            } },
            React.createElement(Typography, { sx: {
                    color: index !== activeVerticalStep - 1
                        ? index === hoveredVerticalStep - 1
                            ? theme.palette.mode === "dark"
                                ? HOVERED_COLOR_DARK
                                : HOVERED_COLOR_LIGHT
                            : theme.palette.text.disabled
                        : theme.palette.text.primary,
                    fontWeight: index === activeVerticalStep - 1 ? "bold" : "normal"
                } }, step.label)),
        React.createElement(StepContent, null, step.content))))));
};
