import { createBrowserRouter } from "react-router-dom";
import Home from "./view/Home/Home";
import Main  from "./view/Main/Main";
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