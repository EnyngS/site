$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.main__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});