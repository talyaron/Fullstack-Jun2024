"use strict";
exports.__esModule = true;
require("./view/style.scss");
var typescript_svg_1 = require("./typescript.svg");
var vite_svg_1 = require("/vite.svg");
var counter_ts_1 = require("./counter.ts");
document.querySelector('#app').innerHTML = "\n  <div>\n    <a href=\"https://vitejs.dev\" target=\"_blank\">\n      <img src=\"" + vite_svg_1["default"] + "\" class=\"logo\" alt=\"Vite logo\" />\n    </a>\n    <a href=\"https://www.typescriptlang.org/\" target=\"_blank\">\n      <img src=\"" + typescript_svg_1["default"] + "\" class=\"logo vanilla\" alt=\"TypeScript logo\" />\n    </a>\n    <h1>Vite + TypeScript</h1>\n    <div class=\"card\">\n      <button id=\"counter\" type=\"button\"></button>\n    </div>\n    <p class=\"read-the-docs\">\n      Click on the Vite and TypeScript logos to learn more\n    </p>\n  </div>\n";
counter_ts_1.setupCounter(document.querySelector('#counter'));
