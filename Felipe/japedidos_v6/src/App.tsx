import React, { useState } from 'react';
import Sidebar from "./components/Sidebar.jsx";
import ContainerContent from './components/ContainerContent';
import Teste from './components/ContainerContent';
import './style/style.css';

function App() {
    const [section, setSection] = useState('Início');
  return (
    <>
    <div className="app-body">
      <nav>
      <Sidebar onNavigate={setSection} />
      </nav>
      <main>
        <ContainerContent section={section} />
        <Teste/>
      </main>
    </div>
    </>
  )
}

export default App
