jQuery(function($) {
	const $btnOpen = $(".menu-open")
	const $btnClose = $(".navbar-close");
  const $overlay = $(".overlay");
	var $menuBar = $(".navbar")
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
		if (!$(e.target).closest('.navbar, .menu-open').length) {
			$menuBar.removeClass("show");
      $overlay.removeClass("active");
		}
	});
});
