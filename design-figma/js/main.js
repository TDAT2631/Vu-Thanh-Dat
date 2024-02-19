//
// This is The Scripts used for Simply Theme
//
function main() {
(function () {
   'use strict'
	//Script
	//-----------------------------------
    $(document).ready(function() {
		var menuState = false;
	  
		$('.head-menu').click(function() {
		  $('.content-click-menu').slideToggle(400);
		  $("#menu").toggleClass("active");
		  $(".content-click-menu").toggleClass("active");
		  $(this).toggleClass("active");
	  
		  var btnMenu = $(this).find(".btn-menu");
		  if (menuState) {
			btnMenu.text("menu");
		  } else {
			btnMenu.text("close");
		  }
		  menuState = !menuState;
		  return false;
		});
	  });
	
}());
}
main();