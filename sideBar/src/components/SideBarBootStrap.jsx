import React, { useEffect } from "react";
import { Nav, Button } from "react-bootstrap";
// import "./index.css";

export default function SideBarBootStrap() {
  useEffect(() => {
    const toggleButton = document.getElementById("toggle-btn");
    const sidebar = document.getElementById("sidebar");

    const toggleSidebar = () => {
      sidebar.classList.toggle("close");
      toggleButton.classList.toggle("rotate");
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
    <nav id="sidebar">
      <ul>
        <li>
          <span className="logo">JaPedidos</span>
          <Button variant="link" id="toggle-btn" onClick={() => window.toggleSidebar()}>
            <svg height="24" viewBox="0 -960 960 960" width="24" fill="#e3e3e3">
              <path d="M460-320v-320L300-480l160 160Z..." />
            </svg>
          </Button>
        </li>

        <li className="menu active">
          <Nav.Link href="#">
            <svg height="24" viewBox="0 -960 960 960" width="24" fill="#e3e3e3">
              <path d="..." />
            </svg>
            <span>Início</span>
          </Nav.Link>
        </li>

        <li>
          <Button variant="link" className="dropdown-btn" onClick={(e) => window.toggleSubMenu(e.currentTarget)}>
            <svg height="24" viewBox="0 -960 960 960" width="24" fill="#e3e3e3">
              <path d="..." />
            </svg>
            <span>Adic. / Edit.</span>
            <svg height="24" viewBox="0 -960 960 960" width="24" fill="#e3e3e3">
              <path d="..." />
            </svg>
          </Button>
          <ul className="sub-menu">
            <div>
              <li>
                <Nav.Link href="#">
                  <svg height="24" width="24" viewBox="..."><path d="..." /></svg>
                  <span>Cliente</span>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="#">
                  <svg height="24" width="24" viewBox="..."><path d="..." /></svg>
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
