import { createBrowserRouter } from "react-router-dom"

// Páginas existentes:
import App from "./App.jsx"
import AdicionarCliente from "./pages/AdicionarCliente.jsx"
import AdicionarProduto from "./pages/AdicionarProduto.jsx" 
import EditarCliente from "./pages/EditarCliente.jsx"
import EditarProduto from "./pages/EditarProduto.jsx"

import Inicio from "./pages/Inicio.jsx"
import Login from "./pages/Login.jsx"
import PaginaError from "./pages/PaginaError.jsx"

import PedidosEmAberto from "./pages/PedidosEmAberto.jsx"
import PedidosNovo from "./pages/PedidosNovo.jsx"
import PedidosProcurar from "./pages/PedidosProcurar.jsx"
import Relatorios from "./pages/Relatorios.jsx"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement: <PaginaError />,
        children:[
            {
                path:"/",
                element:<Login />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/inicio",
                element:<Inicio />
            },
            {
                path:"/adicionarcliente",
                element:<AdicionarCliente/>
            },
            {
                path:"/editarcliente/:id",
                element:<EditarCliente/>
            },
            {
                path:"/adicionarproduto",
                element:<AdicionarProduto />
            },
            {
                path:"/editarproduto/:id",
                element:<EditarProduto />
            },
            {
                path:"/pedidosemaberto",
                element:<PedidosEmAberto />
            },
            {
                path:"/pedidosnovo",
                element:<PedidosNovo />
            },
            {
                path:"/pedidosprocurar",
                element:<PedidosProcurar />
            },
            {
                path:"/pedidosprocurar/:id",
                element:<PedidosProcurar />
            },
            {
                path:"/pedidosprocurar/:status",
                element:<PedidosProcurar />
            },
        ]
    }
])

export default router;