$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.main__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.what__slider').slick({


		responsive: [{
			breakpoint: 780,
			settings: {
				dots: true,
				adaptiveHeight: true,
				arrows: false
			}
		}]
	});
	$('.some__q').slick({


		responsive: [{
			breakpoint: 780,
			settings: {
				dots: true,
				adaptiveHeight: true,
				arrows: false
			}
		}]
	});
});