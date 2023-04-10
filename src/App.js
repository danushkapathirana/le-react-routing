import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

//defines routes
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {path: '/', element: <Home />},
      {path: '/products', element: <Products />},
      {path: '/products/:id', element: <ProductDetails />}
    ]
  }
])

const App = () => {
  return(
    <RouterProvider router={routes} />
  )
}

export default App

// Libraries

// react-router-dom
