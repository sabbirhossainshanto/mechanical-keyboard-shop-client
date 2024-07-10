import App from "@/App";
import Cart from "@/pages/Cart/Cart";
import Home from "@/pages/Home/Home";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import Products from "@/pages/Products/Products";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product-management-dashboard",
        element: <ProductManagement />,
      },
    ],
  },
]);
