
$(document).ready(function(){

	$('.owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		autoPlay: true,
		mouseDrag: true,
	})

	// Mobile nav
	$('.nav__toggle').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('nav__toggle--active');
		$('.nav__items').toggleClass('nav__items--show');
	});
	if ($('html').hasClass('touchevents')) {
		$('.site-nav__link--dropdown').one( "click", function(event) {
			event.preventDefault();
		});
	}

	// Image toggle
	$('.product-main__image img:first-child').addClass('toggle-element--open');
	$('.toggle-element').click(function(event) {
		event.preventDefault();

		var toggle_id = $(this).attr('data-toggle');

		$(this).toggleClass('toggle-element--active');
		$('.product-main__image img').removeClass('toggle-element--open');
		$("#"+toggle_id).toggleClass('toggle-element--open');
		$('body').toggleClass(toggle_id+'--open');
	});

});
