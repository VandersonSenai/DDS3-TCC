import React, { useState } from 'react';
import { Outlet } from "react-router-dom";

import SideBar from "./components/SideBar";
import ComponenteTeste from './components/ComponenteTeste';
// import './App.css'

function App() {
  const [section, setSection] = useState('Início');
  return (
    <>
      <div className="app-body">
          <nav className="sidebar">
            <SideBar onNavigate={setSection} />
          </nav>
          <main>
            <div >
              <Outlet />
              {/* <ComponenteTeste/> */}
            </div>

          </main>
      </div>
    </>
  )
}

export default App
