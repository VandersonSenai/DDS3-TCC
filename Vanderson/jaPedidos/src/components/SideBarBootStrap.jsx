import React, { useEffect } from "react";
import { Nav, Button } from "react-bootstrap";
// import "./index.css";

export default function SideBarBootStrap() {
  useEffect(() => {
    const toggleButton = document.getElementById("toggle-btno");
    const sidebar = document.getElementById("sidebar");
    
    const toggleSidebar = () => {
      sidebar.classList.toggle("close");
      toggleButton.classList.toggle("rotate");
      // toggleButton.classList.toggle("rotateooooo");
      closeAllSubMenus();
    };

    const toggleSubMenu = (button) => {
      const submenu = button.nextElementSibling;
      if (!submenu.classList.contains("show")) {
        closeAllSubMenus();
      }
      submenu.classList.toggle("show");
      button.classList.toggle("rotate");

      if (sidebar.classList.contains("close")) {
        sidebar.classList.remove("close");
        toggleButton.classList.remove("rotate");
      }
    };

    const closeAllSubMenus = () => {
      sidebar.querySelectorAll(".show").forEach((el) => el.classList.remove("show"));
      sidebar.querySelectorAll(".rotate").forEach((el) => el.classList.remove("rotate"));
    };

    const allLinks = sidebar.querySelectorAll("a");
    allLinks.forEach((link) =>
      link.addEventListener("click", () => {
        sidebar.querySelectorAll("li.active").forEach((el) => el.classList.remove("active"));
        sidebar.querySelectorAll("a.active").forEach((el) => el.classList.remove("active"));
        link.classList.add("active");
        link.parentElement.classList.add("active");
      })
    );

    window.toggleSidebar = toggleSidebar;
    window.toggleSubMenu = toggleSubMenu;
  }, []);

  return (
    <nav id="sidebar" className="sidebar-fixed">
      <ul>
        <li>
          <span className="logo">JaPedidos</span>
          <Button variant="link" id="toggle-btn" onClick={() => window.toggleSidebar()}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--base-clr)">
            <path d="M460-320v-320L300-480l160 160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm440-80h120v-560H640v560Zm-80 0v-560H200v560h360Zm80 0h120-120Z"/></svg>
          </Button>
        </li>

        <li className="menu active">
          <Nav.Link href="#">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--base-clr)"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
            <span>Início</span>
          </Nav.Link>
        </li>

        <li>
          <Button variant="link" className="dropdown-btn" onClick={(e) => window.toggleSubMenu(e.currentTarget)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--base-clr)"><path d="M560-320h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/></svg>
            <span>Adic. / Edit.</span>
           <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--base-clr)"><path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"/></svg>
            
          </Button>
          <ul className="sub-menu">
            <div>
              <li>
                <Nav.Link href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--base-clr)"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>
                  <span>Cliente</span>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--base-clr)"><path d="m678-134 46-46-64-64-46 46q-14 14-14 32t14 32q14 14 32 14t32-14Zm102-102 46-46q14-14 14-32t-14-32q-14-14-32-14t-32 14l-46 46 64 64ZM735-77q-37 37-89 37t-89-37q-37-37-37-89t37-89l148-148q37-37 89-37t89 37q37 37 37 89t-37 89L735-77ZM200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v245q-20-5-40-5t-40 3v-243H200v560h243q-3 20-3 40t5 40H200Zm280-670q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM280-600v-80h400v80H280Zm0 160v-80h400v34q-8 5-15.5 11.5T649-460l-20 20H280Zm0 160v-80h269l-49 49q-8 8-14.5 15.5T474-280H280Z"/></svg>
                  <span>Produtos</span>
                </Nav.Link>
              </li>
            </div>
          </ul>
        </li>

        {/* preparar os demais blocos para os menus Pedidos e Relatórios ... */}
      </ul>
    </nav>
  );
}
