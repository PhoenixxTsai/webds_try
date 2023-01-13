/// <reference types="react" />
import { PaperProps } from "@mui/material/Paper";
interface CanvasProps extends PaperProps {
    title: string;
    width?: number | null;
    minWidth?: number | null;
    stretch?: boolean;
    showHelp?: boolean;
    annotation?: string | null;
}
export declare const Canvas: ({ title, width, minWidth, stretch, showHelp, annotation, sx, ...canvasProps }: CanvasProps) => JSX.Element;
export {};
