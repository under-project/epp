(function ($) {
	"use strict";
	// TOP Menu Sticky
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 400) {
			$("#sticky-header").removeClass("sticky");
		} else {
			$("#sticky-header").addClass("sticky");
		}
	});

	
	// mobile_menu
	var menu = $('ul#navigation');
	if(menu.length){
		menu.slicknav({
			prependTo: ".mobile_menu",
			closedSymbol: '+',
			openedSymbol:'-'
		});
	};
	
	
	/*------------------
		Hero Slider
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});
	$('.hero-slider').owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay: true,
		items: 1,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
	});
	

	//project-active
	$('.project-active').owlCarousel({
		loop:true,
		margin:30,
		items:1,
		navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			767:{
				items:1,
				nav:false
			},
			992:{
				items:2,
				nav:false
			},
			1200:{
				items:1,
			},
			1501:{
				items:2,
			}
		}
	});
	
	
	//about-pro-active
	$('.about-pro-active').owlCarousel({
		loop:true,
		margin:30,
		items:1,
		//autoplay:true,
		navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		nav:true,
		dots:false,
		// autoplayHoverPause: true,
		// autoplaySpeed: 800,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			767:{
				items:1,
				nav:false
			},
			992:{
				items:1,
				nav:false
			},
			1200:{
				items:1,
			}
		}
	});



	$(window).on('load', function() {
		if (document.getElementById('portfolio')) {
			var $workGrid = $('.portfolio-grid').isotope({
				itemSelector: '.all',
			});
		}

		$('.portfolio-filter ul li').on('click', function() {
			$('.portfolio-filter ul li').removeClass('active');
			$(this).addClass('active');

				var data = $(this).attr('data-filter');
				$workGrid.isotope({
					filter: data
				});
		});
	});

})(jQuery);