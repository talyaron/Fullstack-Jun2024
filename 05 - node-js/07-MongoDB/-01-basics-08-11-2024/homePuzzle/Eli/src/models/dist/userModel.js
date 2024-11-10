"use strict";
exports.__esModule = true;
exports.UserModel = exports.UserSchema = exports.loggedUsers = void 0;
var mongoose_1 = require("mongoose");
var mongoose = require('mongoose');
//export const users: User[] = [];
exports.loggedUsers = [];
//users.push(admin, admin2);
exports.UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: false
    }, remember: {
        type: Boolean,
        required: false
    }
});
exports.UserModel = mongoose_1.model('User', exports.UserSchema); // collection name is 'users' by default
//   const admin = new UserModel({name:"admin", email:"admin", password:"admin"});
// const admin2 = new UserModel({name:"admin2", email:"admin2",password: "admin2"});
//  admin2.save();
//  admin.save();
