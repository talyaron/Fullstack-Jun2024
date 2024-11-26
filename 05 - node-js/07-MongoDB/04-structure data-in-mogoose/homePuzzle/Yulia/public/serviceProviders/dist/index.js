var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var form = document.getElementById("service-provider-form");
var serviceProvidersContainer = document.getElementById("service-providers");
// Handle form submission
form.addEventListener("submit", function (e) { return __awaiter(_this, void 0, void 0, function () {
    var formData, serviceProvider, response, newServiceProvider, _a, _b, _c, error_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                e.preventDefault();
                formData = new FormData(form);
                serviceProvider = {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone")
                };
                _d.label = 1;
            case 1:
                _d.trys.push([1, 7, , 8]);
                return [4 /*yield*/, fetch("/api/service-providers", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(serviceProvider)
                    })];
            case 2:
                response = _d.sent();
                if (!response.ok) return [3 /*break*/, 4];
                return [4 /*yield*/, response.json()];
            case 3:
                newServiceProvider = _d.sent();
                renderServiceProvider(newServiceProvider);
                return [3 /*break*/, 6];
            case 4:
                _b = (_a = console).error;
                _c = ["Failed to create service provider:"];
                return [4 /*yield*/, response.text()];
            case 5:
                _b.apply(_a, _c.concat([_d.sent()]));
                _d.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                error_1 = _d.sent();
                console.error("Error:", error_1);
                return [3 /*break*/, 8];
            case 8:
                form.reset();
                return [2 /*return*/];
        }
    });
}); });
// Render service provider
function renderServiceProvider(serviceProvider) {
    var serviceProviderCard = document.createElement("div");
    serviceProviderCard.className = "service-providers__card";
    serviceProviderCard.innerHTML = "\n    <p><strong>Name:</strong> " + serviceProvider.name + "</p>\n    <p><strong>Email:</strong> " + serviceProvider.email + "</p>\n    <p><strong>Phone:</strong> " + serviceProvider.phone + "</p>\n  ";
    serviceProvidersContainer.appendChild(serviceProviderCard);
}
// Navigation buttons
document.addEventListener("DOMContentLoaded", function () {
    var header = document.createElement("div");
    header.className = "navigation";
    var buttons = [
        { text: "Go to Clients", link: "/clients" },
        { text: "Go to Appointments", link: "/appointments" },
        { text: "Go to Services", link: "/services" },
    ];
    buttons.forEach(function (buttonData) {
        var button = document.createElement("button");
        button.className = "navigation__button";
        button.textContent = buttonData.text;
        button.addEventListener("click", function () {
            window.location.href = buttonData.link;
        });
        header.appendChild(button);
    });
    // Add the navigation header to the page
    var root = document.body;
    root.insertBefore(header, root.firstChild);
});
