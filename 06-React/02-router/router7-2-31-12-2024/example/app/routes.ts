import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about/About.tsx"),
    route("dashboard",'routes/dashboard/Dashboard.tsx', [
        index( "routes/dashboard/profile/Profile.tsx"),
        route("settings", "routes/dashboard/settings/Settings.tsx")
    ])
] satisfies RouteConfig;
