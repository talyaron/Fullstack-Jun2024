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
//view
function renderProduct(product) {
    return "\n    <div class=\"product-card\">\n        <img src=\"/api/placeholder/400/320\" alt=\"" + product.name + "\" class=\"product-card__image\">\n        <div class=\"product-card__info\">\n            <span class=\"product-card__category\">" + product.category + "</span>\n            <h2 class=\"product-card__title\">" + product.name + "</h2>\n            <p class=\"product-card__description\">" + product.description + "</p>\n            <div class=\"product-card__footer\">\n                <span class=\"product-card__price\">$" + product.price.toFixed(2) + "</span>\n                <div class=\"product-card__stock\">\n                    <span class=\"product-card__stock-dot\"></span>\n                    " + (product.inStock ? 'In Stock' : 'Out of Stock') + "\n                </div>\n            </div>\n            <button class=\"product-card__button\" onclick=\"handleAddToCart('" + product._id + "')\">Add to Cart</button>\n        </div>\n    </div>\n    ";
}
function handleGetProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, products, productsContainer, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/products/get-all-products')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    products = (_a.sent()).products;
                    console.log(products);
                    productsContainer = document.querySelector('#products');
                    if (!productsContainer)
                        throw new Error('Products element not found');
                    if (products.length === 0) {
                        productsContainer.innerHTML = '<p>No products found</p>';
                    }
                    if (!Array.isArray(products))
                        throw new Error('Products is not an array');
                    productsContainer.innerHTML = products.map(function (product) { return renderProduct(product); }).join('');
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('An error occurred during getting products:', error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
handleGetProducts();
function handleGetMyProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, products, productsContainer, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    console.log("first");
                    return [4 /*yield*/, fetch('http://localhost:3000/api/products/my-products')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    products = _a.sent();
                    productsContainer = document.querySelector('#my-products');
                    if (!productsContainer)
                        throw new Error('Products element not found');
                    productsContainer.innerHTML = products.map(function (product) { return renderProduct(product); }).join('');
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.error('An error occurred during getting my product:', error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
handleGetMyProducts();
function handleAddToCart(id) {
    try {
        console.log('Add to cart', id);
        var response = fetch('http://localhost:3000/api/purchase/add-to-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId: id })
        });
    }
    catch (error) {
        console.error('An error occurred during adding to cart:', error);
    }
}
