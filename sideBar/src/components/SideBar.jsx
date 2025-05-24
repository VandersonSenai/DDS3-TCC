// Sidebar.jsx
import React, { useEffect } from "react";
import styles from "./Sidebar.module.css"; // convertendo style.css para CSS module (ou importe como global se preferir)
import { useLocation } from "react-router-dom";

export default function Sidebar() {
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
    <nav id="sidebar" className={styles.sidebar}>
      <ul>
        <li>
          <span className="logo">JaPedidos</span>
          <button onClick={() => window.toggleSidebar()} id="toggle-btn">
            <svg height="24" viewBox="0 -960 960 960" width="24" fill="#e3e3e3">
              <path d="M460-320v-320L300-480l160 160ZM200-120q..." />
            </svg>
          </button>
        </li>

        <li className="menu active">
          <a href="/"><svg width="24" height="24"><path d="..." /></svg><span>Início</span></a>
        </li>

        <li>
          <button className="dropdown-btn" onClick={(e) => window.toggleSubMenu(e.currentTarget)}>
            <svg width="24" height="24"><path d="..." /></svg>
            <span>Adicionar</span>
            <svg width="24" height="24"><path d="..." /></svg>
          </button>
          <ul className="sub-menu">
            <div>
              <li><a href="#">Cliente</a></li>
              <li><a href="#">Produto</a></li>
            </div>
          </ul>
        </li>

        {/* Continue com os outros itens conforme o seu HTML original */}
      </ul>
    </nav>
  );
}
