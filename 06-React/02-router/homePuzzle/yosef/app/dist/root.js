"use strict";
exports.__esModule = true;
exports.ErrorBoundary = exports.Layout = exports.links = void 0;
var react_router_1 = require("react-router");
var app_css_url_1 = require("./app.css?url");
exports.links = function () { return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
    },
    { rel: "stylesheet", href: app_css_url_1["default"] },
]; };
function Layout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("head", null,
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
            React.createElement(react_router_1.Meta, null),
            React.createElement(react_router_1.Links, null)),
        React.createElement("body", null,
            children,
            React.createElement(react_router_1.ScrollRestoration, null),
            React.createElement(react_router_1.Scripts, null))));
}
exports.Layout = Layout;
function App() {
    return React.createElement(react_router_1.Outlet, null);
}
exports["default"] = App;
function ErrorBoundary(_a) {
    var error = _a.error;
    var message = "Oops!";
    var details = "An unexpected error occurred.";
    var stack;
    if (react_router_1.isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    }
    else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }
    return (React.createElement("main", { className: "pt-16 p-4 container mx-auto" },
        React.createElement("h1", null, message),
        React.createElement("p", null, details),
        stack && (React.createElement("pre", { className: "w-full p-4 overflow-x-auto" },
            React.createElement("code", null, stack)))));
}
exports.ErrorBoundary = ErrorBoundary;
