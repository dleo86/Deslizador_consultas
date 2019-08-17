//Accordian
var action="click";
var speed="500";

$(document).ready(function(){
      $('li.q').on(action,function(){
      	//Obtener siguiente elemento
      	   $(this).next()
      	           .slideToggle(speed)
      	            //Seleccionar todas las respuestas
      	              .siblings('li.a')
      	                 .slideUp();
      	   var img = $(this).children('img');
               //Eliminar la rotación de las clases para todas las imagenes excepto la activa
      	   $('img').not(img).removeClass('rotate');
      	   //Alternar rotación de clases
      	   img.toggleClass('rotate');

      });
});