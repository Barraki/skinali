$(function() {
  $(".slider-main").slick({
    dots: true,
		adaptiveHeight: true,
		arrows: false
  });

  $(function() {
    $("#tabs").tabs();
  });

  $(".catalog-item").hover(function() {
    $(this).toggleClass("active");
  });

  $(function() {
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
});
