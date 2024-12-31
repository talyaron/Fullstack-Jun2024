"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_1 = require("react-router");
function Facebook() {
    return (react_1["default"].createElement("div", { style: { backgroundColor: "gray" } },
        react_1["default"].createElement("h1", null, "Facebook Main"),
        react_1["default"].createElement(react_router_1.Link, { to: "/" }, "back to Home"),
        " | ",
        react_1["default"].createElement(react_router_1.Link, { to: "/yosefSystem/twiter" }, "go to Twiter"),
        react_1["default"].createElement("p", null, "Cooming soon..."),
        react_1["default"].createElement("img", { src: "https://cdn.pixabay.com/photo/2016/11/05/08/42/facebook-1799690_1280.png", alt: "facebook logo" })));
}
exports["default"] = Facebook;
