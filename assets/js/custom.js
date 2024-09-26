jQuery(function($) {
	const $btnOpen = $(".menu-open")
	const $btnClose = $(".menu-close");
	var $menuBar = $(".menu")
	$btnOpen.click(function(e) {
		e.preventDefault();
		$menuBar.addClass("show");
	});

	$btnClose.click(function(e) {
		e.preventDefault();
		$menuBar.removeClass("show");
	});

	$(document).click(function(e) {
		if (!$(e.target).closest('.menu, .menu-open').length) {
			$menuBar.removeClass("show");
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
