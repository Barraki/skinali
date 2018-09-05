$(function() {

	$('.slider-main').slick({
		dots: true,
		adaptiveHeight: true

	});
	$( function() {
    $( "#accordion" ).accordion();
  } );
	$( function() {
    $( "#tabs" ).tabs();
  } );

	$(".catalog-item").hover(function() {
		$(this).toggleClass( "active" )

	})


});
