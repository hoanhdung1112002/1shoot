jQuery(function($) {
	const $btnOpen = $(".menu-open")
	const $btnClose = $(".menu-close");
  const $overlay = $(".overlay");
	var $menuBar = $(".menu")
	$btnOpen.click(function(e) {
		e.preventDefault();
		$menuBar.addClass("show");
    $overlay.addClass("active");
	});

	$btnClose.click(function(e) {
		e.preventDefault();
		$menuBar.removeClass("show");
    $overlay.removeClass("active");
	});

	$(document).click(function(e) {
		if (!$(e.target).closest('.menu, .menu-open').length) {
			$menuBar.removeClass("show");
      $overlay.removeClass("active");
		}
	});
	var windowHeight = $(window).height();
        $(window).scroll(function() {
          var scrollPosition = $(window).scrollTop();
  
          $('.animated').each(function() {
            var elementPosition = $(this).offset().top;
            
            if (scrollPosition > elementPosition - windowHeight / 1.6) {
              $(this).addClass('run-animated');
            }
          });
        });
        function animatedFlash() {
          setInterval(function () {
            $('.animated-flash').addClass('run-animated');
          }, 2000);
          setInterval(function () {
            $('.animated-flash').removeClass('run-animated');
          }, 3000);
        }
        animatedFlash();
});
