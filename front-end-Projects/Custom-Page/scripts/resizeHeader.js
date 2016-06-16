window.onscroll = function () {
  var navSelected = document.getElementsByTagName('nav')[0];
  
  if(window.scrollY >= 115) {
    navSelected.className += ' shrink';
    
    return false;
  }	
  else {
    navSelected.classList.remove('shrink');
  }
}
