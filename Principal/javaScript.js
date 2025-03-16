const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){

  // (add ou remove) a classe "close" no elemento com a id 'sidebar'.
  sidebar.classList.toggle('close')

  // (add ou remove) a classe "close" no elemento com a id 'toggle-btn' onde havera um css para girar o svg.
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
  
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  // (add ou remove) a classe "show" apenas no proximo elemento do botão do mesmo nivel da arvore, neste caso é a DIV com o sub-menu que possui um css pra a alternancia da classe 'show'.
  button.nextElementSibling.classList.toggle ('show')
  
  // (add ou remove) a classe "rotate" apenas no botao que chamou a funcao toggleSubMenu(this) "dropdown-btn e dropdown-btn rotate" no css tem a definicao do que acontece.
  button.classList.toggle('rotate')

  // Se 
  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  // Cria uma array com todos elementos dentro de sidebar
  // corre por todos elementos, removendo as classes 'show' e 'rotate' retornando os elementos ao padrão.
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  });
}