"use strict";
exports.__esModule = true;
exports.dashboardPage = void 0;
function dashboardPage() {
    try {
        var DivElement = document.getElementById("dashboard");
        console.log("hello idan");
        if (DivElement) {
            var NavElement = document.createElement("nav");
            var UlElement = document.createElement("ul");
            var LiElement = document.createElement("li");
            return DivElement;
        }
        else {
            return null;
        }
    }
    catch (error) {
        console.error("function isn't found.", error);
        return null;
    }
}
exports.dashboardPage = dashboardPage;
