import React, { useState } from 'react';

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
            <div className='container'>
              <ComponenteTeste/>
            </div>

          </main>
      </div>
    </>
  )
}

export default App
