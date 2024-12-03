"use strict";
exports.__esModule = true;
var userModel_1 = require("../../models/userModel");
function checkedLoggedUsers() {
    var timeNow = new Date();
    if (userModel_1.loggedUsers.length === 0)
        return;
    userModel_1.loggedUsers.forEach(function (user) {
        if (user.remember)
            return;
        var userTimeLeft = user.date.getTime() - timeNow.getTime();
        ;
        if (isNaN(userTimeLeft)) {
            console.error("Invalid date calculation");
        }
        else {
            //  console.log(`User time left in milliseconds: ${userTimeLeft}`);
            if (userTimeLeft > 300000) {
                console.log("5 minutes have passed for this user.");
                timeLogOut(user.userID);
            }
            else {
                //   console.log("Less than 5 minutes have passed for this user.");
            }
        }
    });
}
function timeLogOut(userID) {
    var foundUser = userModel_1.users.find(function (user) { return user.id = userID; });
    var foundUserIndex = userModel_1.loggedUsers.findIndex(function (user) { return user.userID = userID; });
    if (!foundUser) {
        console.log("no such user");
        return;
    }
    if (foundUserIndex !== -1) {
        foundUser.key = "";
        userModel_1.loggedUsers.splice(foundUserIndex, 1);
    }
}
