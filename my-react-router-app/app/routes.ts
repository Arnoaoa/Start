import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("nombres", "routes/nombres.tsx"),
] satisfies RouteConfig;
