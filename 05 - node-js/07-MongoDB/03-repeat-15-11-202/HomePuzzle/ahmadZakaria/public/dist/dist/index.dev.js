"use strict";

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var _this = void 0;

var forms = document.getElementById("clientForm");
var clientsDiv = document.getElementById("clients");

if (forms && clientsDiv) {
  forms.addEventListener("submit", function (e) {
    return __awaiter(_this, void 0, void 0, function () {
      var name, email, phone, response, data, errorData, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            e.preventDefault();
            name = document.getElementById("name").value;
            email = document.getElementById("email").value;
            phone = document.getElementById("phone").value;
            _a.label = 1;

          case 1:
            _a.trys.push([1, 8,, 9]);

            return [4
            /*yield*/
            , fetch("/api/clients/createClient", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                name: name,
                email: email,
                phone: phone
              })
            })];

          case 2:
            response = _a.sent();
            if (!response.ok) return [3
            /*break*/
            , 5];
            return [4
            /*yield*/
            , response.json()];

          case 3:
            data = _a.sent();
            console.log(data);
            alert("Client added successfully!");
            forms.reset(); // Update the clients list after successful addition

            return [4
            /*yield*/
            , fetchClients_1()];

          case 4:
            // Update the clients list after successful addition
            _a.sent();

            return [3
            /*break*/
            , 7];

          case 5:
            return [4
            /*yield*/
            , response.json()];

          case 6:
            errorData = _a.sent();
            alert(errorData.error || "An error occurred");
            _a.label = 7;

          case 7:
            return [3
            /*break*/
            , 9];

          case 8:
            error_1 = _a.sent();
            console.error("Error adding client:", error_1);
            return [3
            /*break*/
            , 9];

          case 9:
            return [2
            /*return*/
            ];
        }
      });
    });
  }); // Fetch and render the clients

  var fetchClients_1 = function fetchClients_1() {
    return __awaiter(_this, void 0, void 0, function () {
      var response, clients, error_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 5,, 6]);

            return [4
            /*yield*/
            , fetch("/api/clients")];

          case 1:
            response = _a.sent();
            if (!response.ok) return [3
            /*break*/
            , 3];
            return [4
            /*yield*/
            , response.json()];

          case 2:
            clients = _a.sent();
            clientsDiv.innerHTML = clients.map(function (client) {
              return "\n                    <div>\n                        <h3>" + client.name + "</h3>\n                        <p>Email: " + client.email + "</p>\n                        <p>Phone: " + client.phone + "</p>\n                    </div>\n                ";
            }).join("");
            return [3
            /*break*/
            , 4];

          case 3:
            console.error("Failed to fetch clients");
            _a.label = 4;

          case 4:
            return [3
            /*break*/
            , 6];

          case 5:
            error_2 = _a.sent();
            console.error("Error fetching clients:", error_2);
            return [3
            /*break*/
            , 6];

          case 6:
            return [2
            /*return*/
            ];
        }
      });
    });
  }; // Initial fetch to load clients


  fetchClients_1();
} else {
  console.error("Required elements not found in the DOM.");
}