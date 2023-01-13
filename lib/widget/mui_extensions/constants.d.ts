export declare const CANVAS_ATTRS: {
    WIDTH: number;
    HEIGHT_TITLE: number;
    MIN_HEIGHT_CONTENT: number;
    MIN_HEIGHT_CONTROLS: number;
    PADDING: number;
};
export interface ContentAttrs {
    PANEL_WIDTH: number;
    PANEL_SPACING: number;
}
export declare const getContentAttrs: (canvasWidth?: number) => ContentAttrs;
export declare const STEPPER_ATTRS: {
    ICON_SIZE: number;
    CONNECTOR_MIN_HEIGHT: number;
};
