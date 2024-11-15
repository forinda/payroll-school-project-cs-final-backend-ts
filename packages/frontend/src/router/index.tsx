/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const LoginPage = lazy(() => import("@/pages/login-page"));
const Homepage = lazy(() => import("@/pages/homepage"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
    path:'/login',
    element: <LoginPage/>
}])