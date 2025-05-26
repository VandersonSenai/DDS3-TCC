// import './App.css'
import SideBar from './components/SideBar';
// import SideBarBootStrap from './components/SideBarBootStrap'

import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
// import { AuthProvider } from "./contexts/UserContext";

function App() {
  

  return (
    <>
      <div className="App">
        {/*  Sidebar com  bootStrap (in Progress) */}
        {/* <SideBarBootStrap/> */}

        {/* Sidebar com REACT */}
        <SideBar />
        <Outlet />


      </div>
    </>
  )
}

export default App
