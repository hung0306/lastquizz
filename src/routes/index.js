import PrivateRouter from "../Components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";
import Answers from "../pages/Answers";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Quizz from "../pages/Quizz";
import Register from "../pages/Register";
import Result from "../pages/Result";
import Topic from "../pages/Topic";



export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children:[
            {
                path:"/",
                element: <Home />


            },

           

            {
                path:"login",
                element: <Login />


            },


            {
                path:"register",
                element: <Register />


            },
            {
                path:"logout",
                element: <Logout />


            },
            

            {
               
                element: <PrivateRouter />,
                children:[
                    {
                        path:"answers",
                        element:<Answers />
                    },
                    {
                        path:"quizz/:id",
                        element:<Quizz />
                    },
                    {
                        path:"result/:id",
                        element:<Result />
                    },
                    {
                        path:"topic",
                        element:<Topic />
                    },

                ]


            }


          
        ]
    }


];

