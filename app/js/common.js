$(function() {
  $(".slider-main").slick({
    dots: true,
    adaptiveHeight: true
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


	
});
