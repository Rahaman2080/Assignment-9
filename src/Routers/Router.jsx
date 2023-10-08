
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ServiceDetails from "../Pages/EventCards/ServiceDetails/ServiceDetails";

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
                element: <ServiceDetails></ServiceDetails>,
                loader: ()=> fetch('data.json')
            }
        ]
        
    }
])

export default router;