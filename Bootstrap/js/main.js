//
// This is The Scripts used for Simply Theme
//
function main() {
(function () {
   'use strict'
	
	$(document).ready(function() {
		$('.item-lable').click(function() {
			$('.item-lable').removeClass('active');
			$(this).addClass('active');
		});
	});
	
}());
}
main();