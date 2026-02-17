import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Program from "./pages/Program";
import Partnership from "./pages/Partnership";
import Services from "./pages/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "profile", Component: Profile },
      { path: "program", Component: Program },
      { path: "partnership", Component: Partnership },
      { path: "services", Component: Services },
    ],
  },
]);
