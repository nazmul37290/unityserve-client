import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import NeedVolunteer from "../Pages/NeedVolunteer";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import AddVolunteerPost from "../Pages/AddVolunteerPost";
import PostDetail from "../Pages/Post Details/PostDetail";
import ErrorPage from "../Pages/ErrorPage";
import ManageMyPost from "../Pages/ManageMyPost";
import Update from "../Pages/Update";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
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
      {
        path: "/addVolunteerNeedPost",
        element: <AddVolunteerPost></AddVolunteerPost>,
      },
      {
        path: "/postDetails",
        element: <PostDetail></PostDetail>,
      },
      {
        path: "/manageMyPost",
        element: <ManageMyPost></ManageMyPost>,
      },
      {
        path: "/updatePost",
        element: <Update></Update>,
      },
    ],
  },
]);
export default Routes;
