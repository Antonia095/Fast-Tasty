document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);

     
  });

  //Inicia menu mobile
  const elemsSidenav = document.querySelectorAll(".sidenav");
  const instancesSidenav = M.Sidenav.init(elemsSidenav);
 
  //Modal de finalizar compra
  $(document).ready(function(){
    $('.modal').modal();
  });

  