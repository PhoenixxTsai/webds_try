/// <reference types="react" />
import { StepperProps } from "@mui/material/Stepper";
declare type Steps = {
    label: string;
    content?: JSX.Element;
}[];
interface VerticalStepperProps extends StepperProps {
    steps: Steps;
    strict?: boolean;
    iconSize?: number;
    connectorMinHeight?: number;
    onStepClick?: (clickedStep: number) => void;
}
export declare const VerticalStepper: ({ steps, activeStep, strict, iconSize, connectorMinHeight, onStepClick, sx, ...verticalStepperProps }: VerticalStepperProps) => JSX.Element;
export {};
