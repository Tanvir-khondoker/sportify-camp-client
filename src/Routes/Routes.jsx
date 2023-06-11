import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import OurClasses from "../pages/Classes/OurClasses";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secrect/Secret";
import PrivateRoute from "./PrivateRoute";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/classes',
            element:<OurClasses/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/signup',
            element:<SignUp/>
        },
        {
            path:'/secret',
            element:<PrivateRoute><Secret/></PrivateRoute>
        },
        {
            path:'/instructors',
            element:<Instructors/>
        }
      ]
    },
  ]);