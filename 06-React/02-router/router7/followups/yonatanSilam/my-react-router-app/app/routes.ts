import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/About.tsx"),
  route("yonatan","routes/yonatan/Yonatan.tsx",[
    index("routes/yonatan/silam/Silam.tsx"),
    route("noy","routes/yonatan/noy/Noy.tsx")
  ])


] satisfies RouteConfig;
