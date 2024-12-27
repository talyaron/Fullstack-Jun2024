import { createBrowserRouter } from "react-router-dom"
import Home from "./view/pages/home/Home";
import Main from "./view/pages/main/Main";

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