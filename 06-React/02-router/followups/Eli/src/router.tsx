import { createBrowserRouter } from "react-router-dom";
import Home from "./view/pages/home";
import Main from "./view/pages/Main";


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