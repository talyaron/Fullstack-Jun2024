"use strict";

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

exports.__esModule = true;

var react_1 = require("react");

var Post_module_scss_1 = require("./Post.module.scss");

var profile_pic_png_1 = require("../../../../../pics/profile_pic.png");

var addPic_png_1 = require("../../../../../pics/addPic.png");

var addLocation_png_1 = require("../../../../../pics/addLocation.png");

var addDate_png_1 = require("../../../../../pics/addDate.png");

var addEmoje_png_1 = require("../../../../../pics/addEmoje.png");

var addProgram_png_1 = require("../../../../../pics/addProgram.png");

var addPen_png_1 = require("../../../../../pics/addPen.png");

var addGifPic_png_1 = require("../../../../../pics/addGifPic.png");

var Post = function Post(_a) {
  var content = _a.content,
      like = _a.like;

  var _b = react_1.useState([content]),
      posts = _b[0],
      setPosts = _b[1]; // שמירת הפוסטים כמערך


  var _c = react_1.useState(like),
      likeCount = _c[0],
      setLikeCount = _c[1];

  var inputRef = react_1.useRef(null);

  var handleLike = function handleLike() {
    setLikeCount(likeCount + 1);
  };

  var addNewPost = function addNewPost(text) {
    if (text.trim()) {
      var datetime_1 = new Date().toLocaleString('he-IL');
      setPosts(function (prevPosts) {
        return __spreadArrays(prevPosts, [text.trim() + " \u05E4\u05D5\u05E8\u05E1\u05DD \u05D1\u05EA\u05D0\u05E8\u05D9\u05DA (" + datetime_1 + ")"]);
      });
    }
  };

  var handleKeyPress = function handleKeyPress(event) {
    if (event.key === 'Enter' && inputRef.current) {
      event.preventDefault();
      addNewPost(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  var handlePostClick = function handlePostClick() {
    if (inputRef.current) {
      addNewPost(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: Post_module_scss_1["default"].feed
  }, React.createElement("input", {
    className: Post_module_scss_1["default"].input,
    type: "text",
    ref: inputRef,
    onKeyDown: handleKeyPress,
    placeholder: "\u05DB\u05EA\u05D5\u05D1 \u05D0\u05EA \u05D4\u05E4\u05D5\u05E1\u05D8 \u05E9\u05DC\u05DA \u05DB\u05D0\u05DF..."
  }), React.createElement("img", {
    src: profile_pic_png_1["default"],
    alt: "profile picture"
  }), React.createElement("h2", {
    style: {
      color: 'white'
    }
  }, "Press enter to send your post"), React.createElement("button", {
    onClick: handlePostClick
  }, "Post"), React.createElement("button", {
    className: Post_module_scss_1["default"].icons
  }, React.createElement("img", {
    src: addPic_png_1["default"],
    alt: "\u05D4\u05D5\u05E1\u05E3 \u05EA\u05DE\u05D5\u05E0\u05D4"
  })), React.createElement("button", {
    className: Post_module_scss_1["default"].icons
  }, React.createElement("img", {
    src: addDate_png_1["default"],
    alt: "\u05D4\u05D5\u05E1\u05E3 \u05EA\u05D0\u05E8\u05D9\u05DA"
  })), React.createElement("button", {
    className: Post_module_scss_1["default"].icons
  }, React.createElement("img", {
    src: addEmoje_png_1["default"],
    alt: "\u05D4\u05D5\u05E1\u05E3 \u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9"
  })), React.createElement("span", {
    className: Post_module_scss_1["default"].like,
    onClick: handleLike
  }, "\uD83D\uDC4D", likeCount), React.createElement("button", {
    className: Post_module_scss_1["default"].icons
  }, React.createElement("img", {
    src: addGifPic_png_1["default"],
    alt: "\u05D4\u05D5\u05E1\u05E3 GIF"
  })), React.createElement("button", {
    className: Post_module_scss_1["default"].icons
  }, React.createElement("img", {
    src: addLocation_png_1["default"],
    alt: "\u05D4\u05D5\u05E1\u05E3 \u05DE\u05D9\u05E7\u05D5\u05DD"
  })), React.createElement("button", {
    className: Post_module_scss_1["default"].icons
  }, React.createElement("img", {
    src: addPen_png_1["default"],
    alt: "\u05E2\u05E8\u05D5\u05DA"
  })), React.createElement("button", {
    className: Post_module_scss_1["default"].icons
  }, React.createElement("img", {
    src: addProgram_png_1["default"],
    alt: "\u05D4\u05D5\u05E1\u05E3 \u05EA\u05D5\u05DB\u05E0\u05D9\u05EA"
  })), React.createElement("br", null), React.createElement("br", null)), React.createElement("div", {
    className: "posts"
  }, posts.map(function (post, index) {
    return React.createElement("pre", {
      key: index,
      style: {
        fontSize: '2rem'
      },
      className: "post"
    }, post);
  })));
};

exports["default"] = Post;