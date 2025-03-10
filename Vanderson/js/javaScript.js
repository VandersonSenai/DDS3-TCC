const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');

  // Array.from(sidebar.getElementsByClassName('show')).forEach(ul =>{
  //   ul.classList.remove('show');
  //   ul.prevElementSibling.classList.remove('rotate');
  // });
  closeAllSubMenus() // substituindo Array.form acima por uma funcão.
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }
  
  button.nextElementSibling.classList.toggle('show');
  button.classList.toggle('rotate');

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
  }  
}


function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul =>{
    ul.classList.remove('show');
    ul.prevElementSibling.classList.remove('rotate');
  });
}