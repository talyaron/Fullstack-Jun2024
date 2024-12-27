import { createBrowserRouter } from "react-router-dom";
import Home from "./view/pages/home/home";
import Main  from "./view/pages/main/main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/main",
        element: <Main/>
    }
])