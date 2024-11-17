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

var clients = [];

function welecome_show() {
  try {
    var welcomeElement = document.getElementById("welcome");
    if (!welcomeElement) throw new Error("Welcome element not found");
    var userLoggedIn = localStorage.getItem('username_login_in');

    if (userLoggedIn) {
      // move all the string with all the information to new location
      var jsonString = userLoggedIn; // convert from string to normal object

      var user = JSON.parse(jsonString);
      console.log(user.name);
      welcomeElement.innerHTML = "Hello " + user.name + ", Wellcome To Instegram";
      clients.push({
        id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        password: user.password
      });
    } else console.error("User not logged in");
  } catch (error) {
    console.error('Error in welcome_show:', error);
  }
}

function handleSendPost(event) {
  return __awaiter(this, void 0, void 0, function () {
    var form, title, text, imageURL, response, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          event.preventDefault();
          form = event.target;
          title = form.elements.namedItem('title').value;
          text = form.elements.namedItem('text').value;
          imageURL = form.elements.namedItem('imageURL').value;
          _a.label = 1;

        case 1:
          _a.trys.push([1, 4,, 5]);

          console.log('Sending post:', {
            title: title,
            text: text,
            imageURL: imageURL
          }); // Debug log

          return [4
          /*yield*/
          , fetch('http://localhost:3000/api/posts/add-post', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              title: title,
              text: text,
              imageURL: imageURL
            })
          })];

        case 2:
          response = _a.sent();
          if (!response.ok) throw new Error('Failed to add post');
          console.log('Post added successfully!');
          form.reset(); // מוחק כל השדות שהכנסו בטופס

          return [4
          /*yield*/
          , fetchPosts()];

        case 3:
          _a.sent();

          return [3
          /*break*/
          , 5];

        case 4:
          error_1 = _a.sent();
          console.error('Error sending post:', error_1);
          return [3
          /*break*/
          , 5];

        case 5:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function fetchPosts() {
  return __awaiter(this, void 0, void 0, function () {
    var response, data, feedElement, error_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 4]);

          return [4
          /*yield*/
          , fetch('http://localhost:3000/api/posts/get-post')];

        case 1:
          response = _a.sent();
          if (!response.ok) throw new Error('Failed to get');
          return [4
          /*yield*/
          , response.json()];

        case 2:
          data = _a.sent();
          feedElement = document.getElementById("feed");
          if (!feedElement) throw new Error("Feed element not found");
          renderPosts(data.posts);
          return [3
          /*break*/
          , 4];

        case 3:
          error_2 = _a.sent();
          console.error("Error fetching posts:", error_2);
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

fetchPosts();
welecome_show();

function savePostsToLocalStorage(posts) {
  localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPostsFromLocalStorage() {
  var posts = localStorage.getItem('posts');
  return posts ? JSON.parse(posts) : [];
}

function renderPosts(posts) {
  var feedElement = document.getElementById('feed');
  if (!feedElement) throw new Error('Feed element not found');
  var htmlPosts = posts.map(function (post) {
    return renderPost(post);
  }).filter(function (post) {
    return post !== null;
  }).join('');
  feedElement.innerHTML = htmlPosts;
}

function renderPost(post) {
  try {
    var html = "\n        <div class=\"post\">\n            <h3 id=\"title-" + post.id + "\">" + post.title + "</h3>\n            <img src=\"" + post.imageURL + "\" id=\"img-" + post.id + "\" alt=\"Image\" />\n            <p id=\"text-" + post.id + "\">" + post.text + "</p>\n            <button onclick=\"handleEditTitle('" + post.id + "')\">Edit Title</button>\n            <button onclick=\"handleEditImage('" + post.id + "')\">Edit Image</button>\n            <button onclick=\"handleEditText('" + post.id + "')\">Edit Text</button>\n            <button onclick=\"handleDeletePost('" + post.id + "')\">Delete Post</button>\n        </div>\n        ";
    return html;
  } catch (error) {
    console.error('Error:', error);
  }
}

function handleEditTitle(id) {
  return __awaiter(this, void 0, void 0, function () {
    var titleElement_1;
    return __generator(this, function (_a) {
      try {
        console.log("Edit title:", id);
        titleElement_1 = document.getElementById("title-" + id);
        if (!titleElement_1) throw new Error('Title element not found');
        titleElement_1.contentEditable = 'true';
        titleElement_1.focus();
        titleElement_1.addEventListener("blur", function (event) {
          var title = titleElement_1.innerText;
          console.log("New title:", title);
          titleElement_1.contentEditable = 'false'; //update the title in the server

          var response = fetch('http://localhost:3000/api/posts/editTitle-post', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: id,
              title: title
            })
          });
          if (!response) throw new Error('Failed to update title');
        });
      } catch (error) {
        console.error('Error:', error);
      }

      return [2
      /*return*/
      ];
    });
  });
}

function handleEditText(id) {
  return __awaiter(this, void 0, void 0, function () {
    var textElement_1;

    var _this = this;

    return __generator(this, function (_a) {
      try {
        console.log("Edit text:", id);
        textElement_1 = document.getElementById("text-" + id);
        if (!textElement_1) throw new Error('Text element not found');
        textElement_1.contentEditable = 'true';
        textElement_1.focus();
        textElement_1.addEventListener("blur", function (event) {
          return __awaiter(_this, void 0, void 0, function () {
            var text, response, error_3;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  text = textElement_1.innerText;
                  console.log("New text:", text);
                  textElement_1.contentEditable = 'false';
                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 3,, 4]);

                  return [4
                  /*yield*/
                  , fetch('http://localhost:3000/api/posts/editText-post', {
                    method: 'PATCH',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      id: id,
                      text: text
                    })
                  })];

                case 2:
                  response = _a.sent();
                  if (!response) throw new Error('Failed to update text');
                  return [3
                  /*break*/
                  , 4];

                case 3:
                  error_3 = _a.sent();
                  console.error('Error:', error_3);
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
        });
      } catch (error) {
        console.error('Error:', error);
      }

      return [2
      /*return*/
      ];
    });
  });
}

function handleDeletePost(id) {
  return __awaiter(this, void 0, void 0, function () {
    var response, error_4;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          console.log("Delete post:", id);
          return [4
          /*yield*/
          , fetch('http://localhost:3000/api/posts/delete-post', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: id
            })
          })];

        case 1:
          response = _a.sent();
          fetchPosts();
          return [3
          /*break*/
          , 3];

        case 2:
          error_4 = _a.sent();
          console.error('Error:', error_4);
          return [3
          /*break*/
          , 3];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function handleEditImage(id) {
  return __awaiter(this, void 0, void 0, function () {
    var imageElement_1, fileInput_1;

    var _this = this;

    return __generator(this, function (_a) {
      try {
        console.log("Edit image:", id);
        imageElement_1 = document.getElementById("img-" + id);
        if (!imageElement_1) throw new Error('Image element not found');
        fileInput_1 = document.createElement('input');
        fileInput_1.type = 'file';
        fileInput_1.accept = 'image/*'; // טיפול בשינוי הקובץ שנבחר

        fileInput_1.onchange = function (event) {
          return __awaiter(_this, void 0, void 0, function () {
            var file, formData, response, data, error_5;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  file = fileInput_1.files ? fileInput_1.files[0] : null;

                  if (!file) {
                    console.error('No file selected');
                    return [2
                    /*return*/
                    ];
                  }

                  formData = new FormData();
                  formData.append('image', file);
                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 4,, 5]);

                  return [4
                  /*yield*/
                  , fetch('/upload-image-endpoint', {
                    method: 'POST',
                    body: formData
                  })];

                case 2:
                  response = _a.sent();

                  if (!response.ok) {
                    throw new Error('Failed to upload image');
                  }

                  return [4
                  /*yield*/
                  , response.json()];

                case 3:
                  data = _a.sent();
                  console.log('Image uploaded successfully:', data); // כאן אתה יכול לעדכן את התמונה החדשה ב-UI

                  imageElement_1.src = data.imageUrl; // נניח ששרת מחזיר URL חדש לתמונה

                  return [3
                  /*break*/
                  , 5];

                case 4:
                  error_5 = _a.sent();
                  console.error('Error uploading image:', error_5);
                  return [3
                  /*break*/
                  , 5];

                case 5:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }; // הצגת דיאלוג בחירת קובץ


        fileInput_1.click();
      } catch (error) {
        console.error('Error:', error);
      }

      return [2
      /*return*/
      ];
    });
  });
}

function logoff() {
  try {
    window.location.href = "http://localhost:3000/";
  } catch (error) {
    console.error(error);
  }
}