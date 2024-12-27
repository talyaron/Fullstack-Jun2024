import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [
    index("routes/home.tsx"), 
    route("contact", "routes/Contact.tsx", [
        index( "routes/dashboard/profile/profile.tsx"),
        route("userdetails", "routes/dashboard/userDetails/UserDetails.tsx")
    ]),
] satisfies RouteConfig;
