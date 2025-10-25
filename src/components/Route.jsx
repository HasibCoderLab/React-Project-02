import { createBrowserRouter } from "react-router";
import Root from "./Root"
import Home from "./Home/Home"
import About from "./About/About"
import Blogs from "./Blogs/Blogs"
import Products from "./Products/Products"
import Contact from "./Contact/Contact"


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "About",
                Component:  About
            },
            {
                path: "Blogs",
                Component: Blogs
            },
            {
                path: "Products",
                Component: Products
            },
            {
                index: "Contact",
                Component: Contact
            }
        ]
    }
]);

export default router
