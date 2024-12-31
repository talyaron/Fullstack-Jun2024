import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("chat","routes/chat.tsx",[
        index("routes/chatBox.tsx"),
        route(":chatName","routes/PersonalMessages.tsx"),
    ]),
   
] satisfies RouteConfig;
