import { JupyterFrontEndPlugin } from "@jupyterlab/application";
import { WebDSService } from "@webds/service";
export declare let webdsService: WebDSService;
/**
 * Initialization data for the webds_try extension.
 */
declare const plugin: JupyterFrontEndPlugin<void>;
export default plugin;
