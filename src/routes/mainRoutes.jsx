import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];

export default mainRoutes;
