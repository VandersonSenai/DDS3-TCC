import React, { useState } from 'react';
import Sidebar from "./components/Sidebar.jsx";
import ContainerContent from './components/ContainerContent';
import Teste from './components/Teste';
import Cadastro from './components/Cadastro';


import './style/style.css';

function App() {
    const [section, setSection] = useState('Início');
  return (
    <>
    <div className="app-body">
      <nav>
      <Sidebar onNavigate={setSection} />
      {/* <Sidebar  /> */}
      </nav>
      <main>
        <ContainerContent section={section} />
        {/* <Teste section={section}/> */}
        {/* <div>
            <h1>
              sdsdsds
              </h1>
              </div> */}
              {/* <Teste /> */}
              {/* <Cadastro /> */}
              
      </main>
    </div>
    </>
  )
}

export default App
