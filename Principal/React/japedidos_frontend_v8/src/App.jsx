import React, { useState } from 'react';
import { Outlet } from "react-router-dom";

import SideBar from "./components/SideBar";
import ComponenteTeste from './components/ComponenteTeste';


function App() {
  return (
    <>
      <div className="app-body">
          <nav className="sidebar">
            <SideBar />
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
