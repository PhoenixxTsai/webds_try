/// <reference types="react" />
import { ButtonProps } from "@mui/material/Button";
import { IconButtonProps } from "@mui/material/IconButton";
interface FlipToggleProps extends IconButtonProps {
    horizontal: boolean;
    flip: boolean;
}
export declare const FlipToggle: ({ horizontal, flip, sx, ...hFlipToggleProps }: FlipToggleProps) => JSX.Element;
interface TouchViewToggleProps extends IconButtonProps {
    traceView: boolean;
}
export declare const TouchViewToggle: ({ traceView, sx, ...touchViewToggleProps }: TouchViewToggleProps) => JSX.Element;
interface RecordToggleProps extends IconButtonProps {
    recording: boolean;
}
export declare const RecordToggle: ({ recording, sx, ...recordToggleProps }: RecordToggleProps) => JSX.Element;
interface PauseRunToggleProps extends IconButtonProps {
    running: boolean;
}
export declare const PauseRunToggle: ({ running, sx, ...pauseRunToggleProps }: PauseRunToggleProps) => JSX.Element;
interface StopButtonProps extends IconButtonProps {
}
export declare const StopButton: ({ sx, ...stopButtonProps }: StopButtonProps) => JSX.Element;
interface ResetButtonProps extends IconButtonProps {
    tooltip?: string;
}
export declare const ResetButton: ({ tooltip, sx, ...resetButtonProps }: ResetButtonProps) => JSX.Element;
interface UploadButtonProps {
    input: JSX.Element;
    tooltip?: string;
    disabled?: boolean;
    cloud?: boolean;
    sx?: any;
}
export declare const UploadButton: ({ input, tooltip, disabled, cloud, sx }: UploadButtonProps) => JSX.Element;
export declare const BackButton: ({ sx, ...backButtonProps }: ButtonProps) => JSX.Element;
export declare const NextButton: ({ sx, ...nextButtonProps }: ButtonProps) => JSX.Element;
interface ProgressButtonProps extends ButtonProps {
    progress: number | undefined;
    onDoneClick: () => void;
    onCancelClick?: () => void;
    onResetClick?: () => void;
    progressMessage?: string | null;
}
export declare const ProgressButton: ({ progress, onClick, onDoneClick, onCancelClick, onResetClick, progressMessage, sx, ...progressButtonProps }: ProgressButtonProps) => JSX.Element;
export {};
