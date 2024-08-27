import { useState } from "react";
import Home from "./Components/Home";
import Earn from "./Components/Earn";
import Booster from "./Components/Booster";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/earn",
      element: <Earn/>,
    },
    {
      path: "/boost",
      element: <Booster/>,
    },
  ]);


  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
