import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about/About.tsx", [
    index( "routes/about/profile/Profile.tsx"),
    route("settings", "routes/about/settings/Settings.tsx")


  ]),
] satisfies RouteConfig;
