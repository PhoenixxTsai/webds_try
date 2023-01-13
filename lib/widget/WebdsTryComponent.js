import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { ThemeProvider } from "@mui/material/styles";
import Landing from "./Landing";
import { webdsService } from "./local_exports";
export const WebdsTryComponent = (props) => {
    const [initialized, setInitialized] = useState(false);
    const [alert, setAlert] = useState(undefined);
    useEffect(() => {
        const initialize = async () => {
            setInitialized(true);
        };
        initialize();
    }, []);
    const webdsTheme = webdsService.ui.getWebDSTheme();
    return (React.createElement(ThemeProvider, { theme: webdsTheme },
        React.createElement("div", { className: "jp-webds-widget-body" },
            alert !== undefined && (React.createElement(Alert, { severity: "error", onClose: () => setAlert(undefined), sx: { whiteSpace: "pre-wrap" } }, alert)),
            initialized && React.createElement(Landing, { setAlert: setAlert })),
        !initialized && (React.createElement("div", { style: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            } },
            React.createElement(CircularProgress, { color: "primary" })))));
};
export default WebdsTryComponent;
