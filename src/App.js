import React, { lazy, Suspense, useState ,useEffect,useContext} from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router";
import About from "./component/About";
import Contact from "./component/Contact";
import Header from "./component/Header";
import Body from "./component/Body"; 
import ResturantMenu from "./component/ResturantMenu"
import Error from "./component/Error";
import UserContext from "./utils/UserContext";
//import Grocery from "./component/Grocery";

import "./index.css";
import "./style.css";


function App() {
    const { loggedInUser} = useContext(UserContext);

    const [userName,setUserName] = useState();
    
    useEffect(()=>{
        setUserName(loggedInUser);
    },[]);
    
  
    return(
        <UserContext.Provider value={{loggedInUser:userName ,setUserName}}>
        <>
        <Header/>
        <Outlet/>
        </>
        </UserContext.Provider>
    );
}

const Grocery = lazy(()=>import("./component/Grocery"));

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
                {
                    path: "/grocery",
                    element:
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery/>
                    </Suspense>

                },
            ],
            errorElement: <Error />
        },
        
    ]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={reactRouter} />);