import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../customComponents/Layout";
import { Toaster } from "sonner";

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
        path: "city/:cityName",
        index: true,
        lazy: () => import("../../Pages/CityPage"),
      },
    ],
  },
]);
export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors />
    </>
  );
};
