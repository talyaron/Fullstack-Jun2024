"use strict";

exports.__esModule = true;

var react_1 = require("react");

function Instegram() {
  return react_1["default"].createElement("div", {
    style: {
      backgroundColor: "teal"
    }
  }, react_1["default"].createElement("h1", null, "wleocme to Instegram"), react_1["default"].createElement("img", {
    src: "https://img.icons8.com/ios/50/000000/instagram-new.png",
    alt: "Instagram logo"
  }), react_1["default"].createElement("p", null, "Cooming soon..."));
}

exports["default"] = Instegram;