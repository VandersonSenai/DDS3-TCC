import { createBrowserRouter }  from "react-router-dom";
import App from "./App.jsx";

import Cliente from  "./pages/Cliente.jsx"
import Configuracao from  "./pages/Produto.jsx"
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from  "./pages/Home.jsx"
import Login from "./pages/Login.jsx";
import Pedido from  "./pages/Pedido.jsx"
import Produto from  "./pages/Produto.jsx"
import Relatorio from  "./pages/Relatorio.jsx"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,  // componente que sera usando ao entrar nessa rota
        errorElement: <ErrorPage />,
        children:[
            {
                path:"/",
                element:<Login />
            },
            {
                path:"/home",
                element:<Home />
            },            
            {
                path:"/login",
                element:<Login />
            },                {
                path:"/cliente",
                element:<Cliente />
            },                 {
                path:"/configuracao",
                element:<Configuracao />
            },            
            {
                path:"/pedido",
                element:<Pedido />
            },
            {
                path:"/produto",
                element:<Produto />
            },
            {
                path:"/relatorio",
                element:<Relatorio />
            }
        ]
    },
])

export default router