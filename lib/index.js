import { ILayoutRestorer } from "@jupyterlab/application";
import { WidgetTracker } from "@jupyterlab/apputils";
import { ILauncher } from "@jupyterlab/launcher";
import { WebDSService, WebDSWidget } from "@webds/service";
import { defaultIcon } from "./icons";
import WebdsTryWidget from "./widget/WebdsTryWidget";
var Attributes;
(function (Attributes) {
    Attributes.command = "webds_try:open";
    Attributes.id = "webds_try_widget";
    Attributes.label = "Webds Try";
    Attributes.caption = "Webds Try";
    Attributes.category = "DSDK - Applications";
    Attributes.rank = 999;
})(Attributes || (Attributes = {}));
export let webdsService;
/**
 * Initialization data for the webds_try extension.
 */
const plugin = {
    id: "webds_try:plugin",
    autoStart: true,
    requires: [ILauncher, ILayoutRestorer, WebDSService],
    activate: (app, launcher, restorer, service) => {
        console.log("JupyterLab extension webds_try is activated!");
        webdsService = service;
        let widget;
        const { commands, shell } = app;
        const command = Attributes.command;
        commands.addCommand(command, {
            label: Attributes.label,
            caption: Attributes.caption,
            icon: (args) => {
                return args["isLauncher"] ? defaultIcon : undefined;
            },
            execute: () => {
                if (!widget || widget.isDisposed) {
                    const content = new WebdsTryWidget(Attributes.id);
                    widget = new WebDSWidget({ content });
                    widget.id = Attributes.id;
                    widget.title.label = Attributes.label;
                    widget.title.icon = defaultIcon;
                    widget.title.closable = true;
                }
                if (!tracker.has(widget))
                    tracker.add(widget);
                if (!widget.isAttached)
                    shell.add(widget, "main");
                shell.activateById(widget.id);
            }
        });
        launcher.add({
            command,
            args: { isLauncher: true },
            category: Attributes.category,
            rank: Attributes.rank
        });
        let tracker = new WidgetTracker({
            namespace: Attributes.id
        });
        restorer.restore(tracker, {
            command,
            name: () => Attributes.id
        });
    }
};
export default plugin;
