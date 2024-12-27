import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about/About.tsx", [
    route("profile", "routes/about/profile/Profile.tsx"),
    route("settings", "routes/about/settings/Settings.tsx", [
      route("editprofile", "routes/about/settings/editprofile/EditProfile.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
