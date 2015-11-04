$(document).ready(function(){
	 $('nav > #menu-movil').click(function(e){
			console.log("click");
			$('nav > div').stop().slideToggle(500);
			e.preventDefault();
	});



$('nav > div > a').click(function(e){
	
	if($(window).width() <= 978){
			$('nav > div').slideUp(500);
			
	}
	return true; 
	e.preventDefault();
});


$(window).scroll(function (e) {
    var scrollTop = $(window).scrollTop();
    var height = ($(window).height())-600;
    $('.title').css({'opacity': ((height - scrollTop) / height)});
	e.preventDefault();
});


});