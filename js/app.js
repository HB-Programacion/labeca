jQuery(document).ready(function(){

	jQuery(".hamb").click(function(e){
	 	e.preventDefault();
	 	jQuery(".menu-mobile nav").toggleClass("abrir");
	 	jQuery(".hamb i").toggleClass("fa-times");
	});

});