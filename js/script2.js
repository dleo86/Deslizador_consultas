/*
slideToogle muestra o esconde elementos usando el correspondiente efecto (ej: 'slow') 
slibings()(aparentemente seleccionar)
children() aparentemente el ultimo de un selector, pero es raro. Nueva data: Selecciona todos los elementos hijos del selector.
toggleClass agrega o elimina el nombre de una clase, en nuestro caso 'rotate' es una clase que con css rota la img
*/
$(document).ready(function(){
	speed = 500;
	$('li .q').on('click',function(){
         $(this).next().slideToogle(speed).slibings('li .a').slideUp();
         var img = $(this).children('img');
         $('img').not(img).removeClass('rotate');
         img.toggleClass('rotate');
	});
})