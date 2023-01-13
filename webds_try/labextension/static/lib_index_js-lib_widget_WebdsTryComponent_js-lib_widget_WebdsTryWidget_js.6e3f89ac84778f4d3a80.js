"use strict";
(self["webpackChunkwebds_try"] = self["webpackChunkwebds_try"] || []).push([["lib_index_js-lib_widget_WebdsTryComponent_js-lib_widget_WebdsTryWidget_js"],{

/***/ "./style/icons/landscape-image-svgrepo-com.svg":
/*!*****************************************************!*\
  !*** ./style/icons/landscape-image-svgrepo-com.svg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 487.482 487.482\" style=\"enable-background:new 0 0 487.482 487.482;\" xml:space=\"preserve\">\n<g>\n\t<path class=\"jp-icon2\" fill=\"#424242\" d=\"M477.482,63.277H10c-5.523,0-10,4.478-10,10v340.928c0,5.522,4.477,10,10,10h467.482c5.522,0,10-4.478,10-10V73.277\n\t\tC487.482,67.755,483.005,63.277,477.482,63.277z M467.482,83.277v235.236l-104.018-80.07c-3.364-2.591-7.996-2.773-11.555-0.457\n\t\tl-68.298,44.456l-134.745-92.417c-3.192-2.189-7.362-2.34-10.706-0.384L20,258.777v-175.5H467.482z M20,404.205V281.948\n\t\tl122.786-71.841l135.024,92.608c3.337,2.286,7.723,2.34,11.111,0.134l67.959-44.235l110.602,85.138v60.453H20z\"/>\n\t<path class=\"jp-icon2\" fill=\"#424242\" d=\"M280.707,218.281c26.063,0,47.266-21.202,47.266-47.264c0-26.058-21.203-47.258-47.266-47.258\n\t\tc-26.062,0-47.264,21.2-47.264,47.258C233.443,197.079,254.645,218.281,280.707,218.281z M280.707,143.76\n\t\tc15.034,0,27.266,12.228,27.266,27.258c0,15.033-12.231,27.264-27.266,27.264c-15.033,0-27.264-12.23-27.264-27.264\n\t\tC253.443,155.987,265.674,143.76,280.707,143.76z\"/>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n");

/***/ }),

/***/ "./lib/icons.js":
/*!**********************!*\
  !*** ./lib/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultIcon": () => (/* binding */ defaultIcon)
/* harmony export */ });
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_icons_landscape_image_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/icons/landscape-image-svgrepo-com.svg */ "./style/icons/landscape-image-svgrepo-com.svg");


const defaultIcon = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
    name: "webds_try_icon",
    svgstr: _style_icons_landscape_image_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
});


/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "webdsService": () => (/* binding */ webdsService)
/* harmony export */ });
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/application */ "webpack/sharing/consume/default/@jupyterlab/application");
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/launcher */ "webpack/sharing/consume/default/@jupyterlab/launcher");
/* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _webds_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @webds/service */ "webpack/sharing/consume/default/@webds/service");
/* harmony import */ var _webds_service__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webds_service__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./lib/icons.js");
/* harmony import */ var _widget_WebdsTryWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widget/WebdsTryWidget */ "./lib/widget/WebdsTryWidget.js");






var Attributes;
(function (Attributes) {
    Attributes.command = "webds_try:open";
    Attributes.id = "webds_try_widget";
    Attributes.label = "Webds Try";
    Attributes.caption = "Webds Try";
    Attributes.category = "DSDK - Applications";
    Attributes.rank = 999;
})(Attributes || (Attributes = {}));
let webdsService;
/**
 * Initialization data for the webds_try extension.
 */
const plugin = {
    id: "webds_try:plugin",
    autoStart: true,
    requires: [_jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_2__.ILauncher, _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__.ILayoutRestorer, _webds_service__WEBPACK_IMPORTED_MODULE_3__.WebDSService],
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
                return args["isLauncher"] ? _icons__WEBPACK_IMPORTED_MODULE_4__.defaultIcon : undefined;
            },
            execute: () => {
                if (!widget || widget.isDisposed) {
                    const content = new _widget_WebdsTryWidget__WEBPACK_IMPORTED_MODULE_5__["default"](Attributes.id);
                    widget = new _webds_service__WEBPACK_IMPORTED_MODULE_3__.WebDSWidget({ content });
                    widget.id = Attributes.id;
                    widget.title.label = Attributes.label;
                    widget.title.icon = _icons__WEBPACK_IMPORTED_MODULE_4__.defaultIcon;
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
        let tracker = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.WidgetTracker({
            namespace: Attributes.id
        });
        restorer.restore(tracker, {
            command,
            name: () => Attributes.id
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ }),

/***/ "./lib/widget/Landing.js":
/*!*******************************!*\
  !*** ./lib/widget/Landing.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Landing": () => (/* binding */ Landing),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ "../node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_extensions_Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mui_extensions/Canvas */ "./lib/widget/mui_extensions/Canvas.js");
/* harmony import */ var _mui_extensions_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mui_extensions/Content */ "./lib/widget/mui_extensions/Content.js");
/* harmony import */ var _mui_extensions_Controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mui_extensions/Controls */ "./lib/widget/mui_extensions/Controls.js");





const Landing = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_extensions_Canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas, { title: "Webds Try" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_extensions_Content__WEBPACK_IMPORTED_MODULE_2__.Content, { sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "h1" }, "Content")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_extensions_Controls__WEBPACK_IMPORTED_MODULE_4__.Controls, { sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "h3" }, "Controls"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);


/***/ }),

/***/ "./lib/widget/WebdsTryComponent.js":
/*!*****************************************!*\
  !*** ./lib/widget/WebdsTryComponent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebdsTryComponent": () => (/* binding */ WebdsTryComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Alert */ "../node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CircularProgress */ "../node_modules/@mui/material/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "../node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _Landing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Landing */ "./lib/widget/Landing.js");
/* harmony import */ var _local_exports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local_exports */ "./lib/index.js");






const WebdsTryComponent = (props) => {
    const [initialized, setInitialized] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [alert, setAlert] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const initialize = async () => {
            setInitialized(true);
        };
        initialize();
    }, []);
    const webdsTheme = _local_exports__WEBPACK_IMPORTED_MODULE_1__.webdsService.ui.getWebDSTheme();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"], { theme: webdsTheme },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "jp-webds-widget-body" },
            alert !== undefined && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__["default"], { severity: "error", onClose: () => setAlert(undefined), sx: { whiteSpace: "pre-wrap" } }, alert)),
            initialized && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Landing__WEBPACK_IMPORTED_MODULE_4__["default"], { setAlert: setAlert })),
        !initialized && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_5__["default"], { color: "primary" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebdsTryComponent);


/***/ }),

/***/ "./lib/widget/WebdsTryWidget.js":
/*!**************************************!*\
  !*** ./lib/widget/WebdsTryWidget.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebdsTryWidget": () => (/* binding */ WebdsTryWidget),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WebdsTryComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebdsTryComponent */ "./lib/widget/WebdsTryComponent.js");



class WebdsTryWidget extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.ReactWidget {
    constructor(id) {
        super();
        this.id = id;
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: this.id + "_component" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_WebdsTryComponent__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebdsTryWidget);


/***/ }),

/***/ "./lib/widget/mui_extensions/Canvas.js":
/*!*********************************************!*\
  !*** ./lib/widget/mui_extensions/Canvas.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Canvas": () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Paper */ "../node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ "../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Stack */ "../node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ "../node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Divider */ "../node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "../node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "../node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./lib/widget/mui_extensions/constants.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};









const Canvas = (_a) => {
    var { title, width = null, minWidth = null, stretch = false, showHelp = false, annotation = null, sx } = _a, canvasProps = __rest(_a, ["title", "width", "minWidth", "stretch", "showHelp", "annotation", "sx"]);
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({ elevation: 7, sx: Object.assign({ width: stretch
                ? "100%"
                : minWidth !== null
                    ? null
                    : (width ? width : _constants__WEBPACK_IMPORTED_MODULE_3__.CANVAS_ATTRS.WIDTH) + "px", minWidth: minWidth ? minWidth + "px" : "auto", borderStyle: "solid", borderWidth: theme.palette.mode === "light" ? "0px" : "1px", borderColor: "canvas.border", borderRadius: "10px" }, sx) }, canvasProps),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__["default"], { spacing: 0, divider: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__["default"], { orientation: "horizontal" }) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], { sx: {
                    width: stretch ? (minWidth ? minWidth + "px" : "100%") : "100%",
                    height: _constants__WEBPACK_IMPORTED_MODULE_3__.CANVAS_ATTRS.HEIGHT_TITLE + "px",
                    padding: _constants__WEBPACK_IMPORTED_MODULE_3__.CANVAS_ATTRS.PADDING + "px",
                    boxSizing: "border-box",
                    position: "relative"
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "h5", sx: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontWeight: "bold"
                    } }, title),
                showHelp && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "text", sx: {
                        position: "absolute",
                        top: "50%",
                        left: "16px",
                        transform: "translate(0%, -50%)"
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "underline" }, "Help"))),
                annotation && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                        position: "absolute",
                        top: "50%",
                        right: "16px",
                        transform: "translate(0%, -50%)"
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "body2" }, annotation)))),
            canvasProps.children)));
};


/***/ }),

/***/ "./lib/widget/mui_extensions/Content.js":
/*!**********************************************!*\
  !*** ./lib/widget/mui_extensions/Content.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ "../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./lib/widget/mui_extensions/constants.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



const Content = (_a) => {
    var { sx } = _a, contentProps = __rest(_a, ["sx"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({ sx: Object.assign({ width: "100%", minHeight: _constants__WEBPACK_IMPORTED_MODULE_2__.CANVAS_ATTRS.MIN_HEIGHT_CONTENT + "px", padding: _constants__WEBPACK_IMPORTED_MODULE_2__.CANVAS_ATTRS.PADDING + "px", boxSizing: "border-box", position: "relative" }, sx) }, contentProps), contentProps.children));
};


/***/ }),

/***/ "./lib/widget/mui_extensions/Controls.js":
/*!***********************************************!*\
  !*** ./lib/widget/mui_extensions/Controls.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controls": () => (/* binding */ Controls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ "../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./lib/widget/mui_extensions/constants.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



const Controls = (_a) => {
    var { sx } = _a, controlsProps = __rest(_a, ["sx"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({ sx: Object.assign({ width: "100%", minHeight: _constants__WEBPACK_IMPORTED_MODULE_2__.CANVAS_ATTRS.MIN_HEIGHT_CONTROLS + "px", padding: _constants__WEBPACK_IMPORTED_MODULE_2__.CANVAS_ATTRS.PADDING + "px", boxSizing: "border-box", position: "relative" }, sx) }, controlsProps), controlsProps.children));
};


/***/ }),

/***/ "./lib/widget/mui_extensions/constants.js":
/*!************************************************!*\
  !*** ./lib/widget/mui_extensions/constants.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CANVAS_ATTRS": () => (/* binding */ CANVAS_ATTRS),
/* harmony export */   "STEPPER_ATTRS": () => (/* binding */ STEPPER_ATTRS),
/* harmony export */   "getContentAttrs": () => (/* binding */ getContentAttrs)
/* harmony export */ });
const CANVAS_ATTRS = {
    WIDTH: 800,
    HEIGHT_TITLE: 70,
    MIN_HEIGHT_CONTENT: 450,
    MIN_HEIGHT_CONTROLS: 120,
    PADDING: 24
};
const getContentAttrs = (canvasWidth = CANVAS_ATTRS.WIDTH) => {
    const panelSpacing = 2;
    const panelWidth = (canvasWidth - CANVAS_ATTRS.PADDING * 2 - panelSpacing * 8 * 2) / 2;
    return {
        PANEL_WIDTH: panelWidth,
        PANEL_SPACING: panelSpacing
    };
};
const STEPPER_ATTRS = {
    ICON_SIZE: 32,
    CONNECTOR_MIN_HEIGHT: 20
};


/***/ })

}]);
//# sourceMappingURL=lib_index_js-lib_widget_WebdsTryComponent_js-lib_widget_WebdsTryWidget_js.6e3f89ac84778f4d3a80.js.map