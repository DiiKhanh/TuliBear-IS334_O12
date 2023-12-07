import { Suspense, lazy } from "react";
import { useRoutes, Outlet, Navigate } from "react-router-dom";
import ProtectPage from "~/components/protect-page/ProtectPage";
// layouts
import Mainlayout from "~/layouts/MainLayout";

//

export const HomePage = lazy(() => import("~/pages/HomePage"));
export const ProductPage = lazy(() => import("~/pages/ProductPage"));
export const ProductDetail = lazy(() => import("~/pages/ProductDetail"));
export const CartPage = lazy(() => import("~/pages/CartPage"));
export const CheckoutPage = lazy(() => import("~/pages/CheckoutPage"));
export const SuccessCheckout = lazy(() => import("~/pages/SuccessPage"));
export const BlogPage = lazy(() => import("~/pages/BlogPage"));
export const ContactPage = lazy(() => import("~/pages/ContactPage"));
export const ServicePage = lazy(() => import("~/pages/ServicePage"));

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
        { path: "product/:id", element: <ProductDetail /> },
        { path: "cart", element: <ProtectPage> <CartPage /> </ProtectPage> },
        { path: "checkout", element: <ProtectPage> <CheckoutPage /> </ProtectPage> },
        { path: "checkout/success", element: <SuccessCheckout /> },
        { path: "blog", element: <BlogPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "service", element: <ServicePage /> }
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