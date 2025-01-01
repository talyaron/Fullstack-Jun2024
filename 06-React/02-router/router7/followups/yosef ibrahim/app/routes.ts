import { type RouteConfig, index,  route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("connectUs", "routes/connectUs/ConnectUs.tsx"),
    route("dashbord",'routes/dashbord/Dashbord.tsx', [
        index( "routes/dashbord/cart/Cart.tsx"),
        route("chatBot", "routes/dashbord/chatBot/ChatBot.tsx")
    ])
] satisfies RouteConfig;
