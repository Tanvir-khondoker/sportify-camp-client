import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import OurClasses from "../pages/Classes/OurClasses";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secrect/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddCourse from "../pages/Dashboard/AddCourse/AddCourse";
import ManageCourses from "../pages/Dashboard/ManageClasses/ManageCourses";
import Payment from "../pages/Dashboard/Payment/Payment";
import Instructors from "../pages/Instructor/Instructors/Instructors";
import ClassList from "../pages/Dashboard/INstructor_added_classes/ClassList";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/classes",
        element: <OurClasses />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/secret",
        element: <PrivateRoute><Secret /></PrivateRoute>,
      },
      {
        path: "/instructors",
        element: <Instructors/>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "addCourse",
        element: <AddCourse />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "instructorClasses",
        element:<ClassList/>,
      },
      {
        path: "manageClasses",
        element: <ManageCourses/>
          
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
    ],
  },
]);
