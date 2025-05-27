import { createBrowserRouter }  from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/home",
        element:<Home />
    }
  ]
  },
])

export default router