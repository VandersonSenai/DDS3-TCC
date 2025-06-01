const toggleButton = document.getElementById('toggle-btn')
const menu = document.getElementById('menu')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')
  closeAllSubMenus()
}

function toggleSubMenu(button){
    if(!button.nextElementSibling.classList.contains('show')){
      closeAllSubMenus()
    }
    button.nextElementSibling.classList.toggle ('show')
    button.classList.toggle('rotate')
    if(sidebar.classList.contains('close')){
      sidebar.classList.toggle('close')
      toggleButton.classList.toggle('rotate')
    }
}
function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  });
}

// ------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const allLinks = sidebar.querySelectorAll("a");

  allLinks.forEach(link => {
    link.addEventListener("click", () => {
      removeActiveFromAll();
      link.classList.add("active");
    });
  });

  function removeActiveFromAll() {
    sidebar.querySelectorAll("li.active").forEach(activeLink => {
      activeLink.classList.remove("active");
      
      
    });
    
    sidebar.querySelectorAll("a.active").forEach(activeLink => {
      activeLink.classList.remove("active");
    });

  }
});
