import React, { useState } from 'react';

import SideBar from "./components/SideBar";
import ComponenteTeste from './components/ComponenteTeste';
// import './App.css'

function App() {
  const [section, setSection] = useState('Início');
  return (
    <>
      <div className="app-body">
          <nav>
            <SideBar onNavigate={setSection} />
          </nav>
          <main>
            <ComponenteTeste/>
          </main>
      </div>
    </>
  )
}

export default App
