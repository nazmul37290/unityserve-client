import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import NeedVolunteer from "../Pages/NeedVolunteer";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "/needVolunteer",
        element: <NeedVolunteer></NeedVolunteer>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default Routes;
