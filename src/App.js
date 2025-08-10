import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router";
import About from "./component/About";
import Contact from "./component/Contact";
import Header from "./component/Header";
import Body from "./component/Body"; 
import ResturantMenu from "./component/ResturantMenu"
import Error from "./component/Error";
import "./style.css";

function App() {
    console.log("loaded");   
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    );
}

const reactRouter = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <Body />,
                },
                {
                    path: "/about",
                    element: <About/>,
                    errorElement: <h1>About page not found</h1>
                },
                {
                    path: "/contact",
                    element:<Contact/>,
                    errorElement: <h1>Contact page not found</h1>
                },
                {
                    path: "/ResturantMenu/:restId",
                    element:<ResturantMenu/>
                },
            ],
            errorElement: <Error />
        },
        
    ]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={reactRouter} />);