"use strict";

exports.__esModule = true;

var routes_1 = require("@react-router/dev/routes");

exports["default"] = [routes_1.index("routes/home.tsx"), routes_1.route("yosefSystem", "routes/yosefSystem/YosefSystem.tsx", [routes_1.index("routes/yosefSystem/facebook/Facebook.tsx"), routes_1.route("instegram", "routes/yosefSystem/instegram/instegram.tsx"), routes_1.route("twiter", "routes/yosefSystem/twiter/Twiter.tsx", [routes_1.index("routes/yosefSystem/twiter/post/Post.tsx")])])];
satisfies;
routes_1.RouteConfig; // import { type RouteConfig, index,  route} from "@react-router/dev/routes";
// export default [
//     index("routes/home.tsx"),
//     route("connectUs", "routes/connectUs/ConnectUs.tsx"),
//     route("dashbord",'routes/dashbord/Dashbord.tsx', [
//         index( "routes/dashbord/cart/Cart.tsx"),
//         route("chatBot", "routes/dashbord/chatBot/ChatBot.tsx")
//     ])
// ] satisfies RouteConfig;