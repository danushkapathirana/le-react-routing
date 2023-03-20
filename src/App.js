import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";

//defines routes
const routes = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/products', element: <Products />}
])

const App = () => {
  return(
    <RouterProvider router={routes} />
  )
}

export default App

// Libraries

// react-router-dom
