import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ProductDetails from "../../components/ProductCard/ProductDetails";
import Carts from "../../components/Carts/Carts";
import Home from "../Main/Home";
import Products from "../../components/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: "/details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/cart",
        element: <Carts/>
      }
    ],
  },
]);

export default router;
