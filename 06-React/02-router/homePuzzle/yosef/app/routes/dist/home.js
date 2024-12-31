"use strict";
exports.__esModule = true;
exports.meta = void 0;
var welcome_1 = require("../welcome/welcome");
function meta(_a) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}
exports.meta = meta;
function Home() {
    return React.createElement(welcome_1.Welcome, null);
}
exports["default"] = Home;
