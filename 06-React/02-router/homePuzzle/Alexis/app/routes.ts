import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("about", "routes/about/About.tsx",[
        route("profile", "routes/about/profile/Profile.tsx"),
        route("apps", "routes/about/apps/Apps.tsx"),
        route("settings", "routes/about/settings/Settings.tsx")

    ]),
] satisfies RouteConfig;
