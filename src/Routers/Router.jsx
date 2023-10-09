
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ServiceDetails from "../Pages/EventCards/ServiceDetails/ServiceDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path: "/services/:id",
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
        
    }
])

export default router;