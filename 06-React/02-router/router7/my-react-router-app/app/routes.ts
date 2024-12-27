import { type RouteConfig, index, route } from "@react-router/dev/routes";



export default [
    index("routes/home.tsx"),
    route("about", "routes/about/About.tsx")
] satisfies RouteConfig;
