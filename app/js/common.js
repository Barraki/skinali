$(function () {
	$(function () {
		$("#draggable1").draggable({
			cursor: "pointer, scroll: true"
		});
		$("#draggable2").draggable({
			cursor: "pointer, scroll: true"
		});
		$("#draggable3").draggable({
			cursor: "pointe, scroll: truer"
		});
		$("#draggable4").draggable({
			cursor: "pointe, scroll: truer"
		});
		$("#draggable5").draggable({
			cursor: "pointe, scroll: truer"
		});
		$("#draggable6").draggable({
			cursor: "pointe, scroll: truer"
		});
	});
	$(".slider-main").slick({
		dots: true,
		adaptiveHeight: true,
		arrows: false,
		responsive: [{
			breakpoint: 1200,
			settings: {
				centerMode: true,
				slidesToShow: 1,
				variableWidth: true
			}
		}]
	});

	$(function () {
		$("#tabs").tabs();
	});

	$(".catalog-item").hover(function () {
		$(this).toggleClass("active");
	});

	$(function () {
		$("#accordion").accordion({
			heightStyle: "content"
		});
	});

	$(".tab-1").click(function () {
		$(".tab-2").removeClass("active");
		$(".tab-1").addClass("active");
		$(".tabs-2").removeClass("active");
		$(".tabs-1").addClass("active");
	});

	$(".tab-2").click(function () {
		$(".tab-1").removeClass("active");
		$(".tab-2").addClass("active");
		$(".tabs-1").removeClass("active");
		$(".tabs-2").addClass("active");

	});

	$(".menu_nav_button").click(function () {

		$(".active.menu i").toggleClass("fa-times")
		$("#mobile-menu").toggleClass("slide")
		$("body").toggleClass("no-scroll")

	})

	$(".bg-menu").click(function () {
		$("#mobile-menu").removeClass("slide")
		$("body").removeClass("no-scroll")
	})



	$(function () {
		$("#menu").accordion({

		});
	});



});


$("#containment-wrapper div").on("click", function () {
	$(".tooltip-flip").fadeOut()
});





