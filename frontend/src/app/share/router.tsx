import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/home.page";
import { MoviesPage } from "../pages/movies.page";
import { SeriesPage } from "../pages/series.page";
import { LoginPage } from "../pages/login.page";

export const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    id: "homePage",
  },
  {
    path: "/movies",
    element: <MoviesPage />,
    id: "moviePage"
  },
  {
    path: "/series",
    element: <SeriesPage />,
    id: "seriePage"
  },
  {
    path: "/login",
    element: <LoginPage />,
    id: "loginPage"
  },
]);

export const RouterApp: React.FC = () => {
    return <RouterProvider router={BrowserRouter} />
}