import React from "react";

import { ReactWidget } from "@jupyterlab/apputils";

import WebdsTryComponent from "./WebdsTryComponent";

export class WebdsTryWidget extends ReactWidget {
  id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }

  render(): JSX.Element {
    return (
      <div id={this.id + "_component"}>
        <WebdsTryComponent />
      </div>
    );
  }
}

export default WebdsTryWidget;
