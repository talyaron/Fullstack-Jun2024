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

var height = 40;
var all_post_inputs = [];

function enter_clicked() {
  return __awaiter(this, void 0, void 0, function () {
    var input_1;
    return __generator(this, function (_a) {
      try {
        input_1 = document.getElementById("post_input");
        if (!input_1) return [2
        /*return*/
        , console.log("error")];
        input_1.addEventListener('keydown', function (event) {
          return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!(event.key == 'Enter')) return [3
                  /*break*/
                  , 2];
                  all_post_inputs.push(input_1.value);
                  console.log(all_post_inputs);
                  input_1.value = "";
                  i;
                  return [4
                  /*yield*/
                  , fetch('http://localhost:3000/api/send-words', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      all_post_inputs: all_post_inputs
                    })
                  })];

                case 1:
                  response = _a.sent();
                  _a.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        });
      } catch (error) {
        console.error(error);
      }

      return [2
      /*return*/
      ];
    });
  });
}

enter_clicked();

function all_post() {
  return __awaiter(this, void 0, void 0, function () {
    var response, data, show, message, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 4]);

          return [4
          /*yield*/
          , fetch('http://localhost:3000/api/get-words')];

        case 1:
          response = _a.sent();
          return [4
          /*yield*/
          , response.json()];

        case 2:
          data = _a.sent();
          show = document.getElementById("show_all_post");
          if (!show) throw new Error('No show_all_post element found');
          message = data.message;
          show.innerHTML = message;
          return [3
          /*break*/
          , 4];

        case 3:
          error_1 = _a.sent();
          console.error(error_1);
          return [3
          /*break*/
          , 4];

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
}