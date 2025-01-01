"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_1 = require("react-router");
function YosefSystem() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", { style: { backgroundColor: "red" } }, "hey from yosef dashbord system"),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement(react_router_1.Link, { to: "", style: { backgroundColor: "yellow" } }, "Join FaceBook"),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement(react_router_1.Link, { to: "twiter", style: { backgroundColor: "green" } }, "Join My Twiter"),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement(react_router_1.Link, { to: "instegram", style: { backgroundColor: "blue" } }, "Join My Instagram"),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement(react_router_1.Outlet, null)));
}
exports["default"] = YosefSystem;
