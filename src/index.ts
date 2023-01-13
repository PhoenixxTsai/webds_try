import {
  ILayoutRestorer,
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from "@jupyterlab/application";

import { WidgetTracker } from "@jupyterlab/apputils";

import { ILauncher } from "@jupyterlab/launcher";

import { WebDSService, WebDSWidget } from "@webds/service";

import { defaultIcon } from "./icons";

import WebdsTryWidget from "./widget/WebdsTryWidget";

namespace Attributes {
  export const command = "webds_try:open";
  export const id = "webds_try_widget";
  export const label = "Webds Try";
  export const caption = "Webds Try";
  export const category = "DSDK - Applications";
  export const rank = 999;
}

export let webdsService: WebDSService;

/**
 * Initialization data for the webds_try extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: "webds_try:plugin",
  autoStart: true,
  requires: [ILauncher, ILayoutRestorer, WebDSService],
  activate: (
    app: JupyterFrontEnd,
    launcher: ILauncher,
    restorer: ILayoutRestorer,
    service: WebDSService
  ) => {
    console.log("JupyterLab extension webds_try is activated!");

    webdsService = service;

    let widget: WebDSWidget;
    const { commands, shell } = app;
    const command = Attributes.command;
    commands.addCommand(command, {
      label: Attributes.label,
      caption: Attributes.caption,
      icon: (args: { [x: string]: any }) => {
        return args["isLauncher"] ? defaultIcon : undefined;
      },
      execute: () => {
        if (!widget || widget.isDisposed) {
          const content = new WebdsTryWidget(Attributes.id);
          widget = new WebDSWidget<WebdsTryWidget>({ content });
          widget.id = Attributes.id;
          widget.title.label = Attributes.label;
          widget.title.icon = defaultIcon;
          widget.title.closable = true;
        }

        if (!tracker.has(widget)) tracker.add(widget);

        if (!widget.isAttached) shell.add(widget, "main");

        shell.activateById(widget.id);
      }
    });

    launcher.add({
      command,
      args: { isLauncher: true },
      category: Attributes.category,
      rank: Attributes.rank
    });

    let tracker = new WidgetTracker<WebDSWidget>({
      namespace: Attributes.id
    });
    restorer.restore(tracker, {
      command,
      name: () => Attributes.id
    });
  }
};

export default plugin;