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
import PrivateRoute from "./PrivateRoute";
import axios from "axios";

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
        loader: () => axios(`${import.meta.env.VITE_URL}/posts`),
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
        element: (
          <PrivateRoute>
            <AddVolunteerPost></AddVolunteerPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/postDetails/:id",
        element: (
          <PrivateRoute>
            <PostDetail></PostDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios(`${import.meta.env.VITE_URL}/postDetails/${params.id}`),
      },
      {
        path: "/manageMyPost",
        element: (
          <PrivateRoute>
            <ManageMyPost></ManageMyPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatePost",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default Routes;
