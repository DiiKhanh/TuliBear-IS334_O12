import { Suspense, lazy } from "react";
import { useRoutes, Outlet, Navigate } from "react-router-dom";
// layouts
import Mainlayout from "~/layouts/MainLayout";
//

export const HomePage = lazy(() => import("~/pages/HomePage"));
export const ProductPage = lazy(() => import("~/pages/ProductPage"));
export const ProductDetail = lazy(() => import("~/pages/ProductDetail"));


export const PageNotFound = lazy(() => import("~/pages/PageNotFound"));

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <Mainlayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </Mainlayout>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: "product", element: <ProductPage /> },
        { path: "product/:id", element: <ProductDetail /> }
      ]
    },
    {
      path:"login"
    },
    {
      path: "404",
      element: <PageNotFound />
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />
    }
  ]);

  return routes;
}