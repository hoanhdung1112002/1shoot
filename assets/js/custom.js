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
});
