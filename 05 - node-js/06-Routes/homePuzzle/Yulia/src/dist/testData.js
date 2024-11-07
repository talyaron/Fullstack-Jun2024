"use strict";
exports.__esModule = true;
exports.testPosts = exports.testUsers = void 0;
exports.testUsers = [
    { username: "testUser1", password: "password123", isUserLogin: false },
    { username: "testUser2", password: "securePass456", isUserLogin: false },
];
exports.testPosts = [
    {
        id: "1",
        title: "Test Post 1",
        text: "This is a sample post for testing.",
        imageURL: "https://via.placeholder.com/150",
        username: "testUser1"
    },
    {
        id: "2",
        title: "Test Post 2",
        text: "Another sample post.",
        imageURL: "https://via.placeholder.com/150",
        username: "testUser2"
    },
];
