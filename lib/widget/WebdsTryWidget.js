import React from "react";
import { ReactWidget } from "@jupyterlab/apputils";
import WebdsTryComponent from "./WebdsTryComponent";
export class WebdsTryWidget extends ReactWidget {
    constructor(id) {
        super();
        this.id = id;
    }
    render() {
        return (React.createElement("div", { id: this.id + "_component" },
            React.createElement(WebdsTryComponent, null)));
    }
}
export default WebdsTryWidget;
