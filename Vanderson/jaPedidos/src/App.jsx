// import './App.css'
import { Outlet } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import SideBarBootStrap from "./components/SideBarBootStrap";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
    <div className="testeClass">
    {/* <SideBarBootStrap />  */}
    <SideBar />


          <Outlet />
  

      </div>
    {/* <div className="App "> */}
      {/* <header className="App-header">
        <h1>Bem-vindo ao JaPedidos</h1>
        <p>Aplicação de pedidos online</p>
      </header> */}

    </>
  )
}

export default App
