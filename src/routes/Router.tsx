import App from "@/App";
import AboutUs from "@/pages/AboutUs/AboutUs";
import Cart from "@/pages/Cart/Cart";
import CheckOut from "@/pages/CheckOut/CheckOut";
import ContactUs from "@/pages/ContactUs/ContactUs";
import Home from "@/pages/Home/Home";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import Products from "@/pages/Products/Products";
import Success from "@/pages/Success/Success";
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
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);
