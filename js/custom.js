$(document).ready(function(){
  $(".media-slider").slick({
      prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
      nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
      dots: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

  });
});

// Testi monial Slider
$(document).ready(function(){
  $(".testi-slider").slick({
      prevArrow: '<span class="prev-arrow"><i class="fas fa-arrow-left"></i></span>',
      nextArrow: '<span class="next-arrow"><i class="fas fa-arrow-right"></i></span>',
      dots: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
      ]

  });
});
// Workspace Slider
$(document).ready(function(){
  $(".workspace-slider").slick({
      prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
      nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
      dots: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            arrows: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: true,
          }
        },
      ]

  });
});

// Meeting Slider
$(document).ready(function(){
  $(".meeting-slider").slick({
      prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
      nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
      dots: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: true,
          }
        },
      ]

  });
});


//light box
$(document).ready(function(){
  $('.venobox').venobox(); 
});

$("#firstlink").venobox().trigger('click');


$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
});