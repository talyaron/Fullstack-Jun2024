import { createBrowserRouter } from "react-router-dom";
import Home from "./view/home/home";
import Contact  from "./view/contact/contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/contact",
        element: <Contact/>
    }
])