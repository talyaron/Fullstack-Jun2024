import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("about", "routes/about/About.tsx",[
        route("profile", "routes/about/profile/Profile.tsx", [
            route("settings", "route/about/profile/settings/Settings.tsx")
        ]),
        route("apps", "route/about/apps/Apps.tsx"),
    ]),
] satisfies RouteConfig;
