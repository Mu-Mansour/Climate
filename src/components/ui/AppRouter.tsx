import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: () => import("../../Pages/Dashboard"),
      },
      {
        path: "city/:name",
        index: true,
        lazy: () => import("../../Pages/CityPage"),
      },
      {
        path: "city/:name/aww",
        index: true,
        lazy: () => import("../../Pages/lazyPage"),
      },
    ],
  },
]);
export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
