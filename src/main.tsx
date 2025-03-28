import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import "./index.css";
import Auth_Layout from "./Layout/Auth_Layout";
import Error from "./Error/Error";
import Starting from "./Authentication/Auth_component/Starting";
import Email from "./Authentication/Auth_component/Email";
import Verification from "./Authentication/Auth_component/Verification";
import Dashboard_Layout from "./Layout/Dashboard_Layout";
import Dashboard from "./Dashboard/Dashboard_components/Dashboard";

// Define the routes with TypeScript
const router: RouteObject[] = [
  {
    path: "/",
    element: <Auth_Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Starting />,
      },
      {
        path: "/emailsignup",
        element: <Email />,
      },
      {
        path: "/varify",
        element: <Verification />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard_Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

const browserRouter = createBrowserRouter(router);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
);
