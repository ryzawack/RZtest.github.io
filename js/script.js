

/************* Carousel **********/
$('.carousel ul li').click(function () {
	var dataTabValue = $(this).data('tab');
	$(this).addClass('active').siblings().removeClass('active');

	$('.slides .active').fadeOut(function () {
		$('.content-' + dataTabValue).fadeIn('fast');
		$('.slides li').removeClass('active');
		$('.content-' + dataTabValue).addClass('active');
	});
});


/******************* NAVIGATION *****************************/

var navHeight = $("nav .carousel").outerHeight();

$('.container ul li').click(function()	{
	//$(this).addClass('active').siblings().removeClass('active'); SO doesn't conflict with the nav scroll
	var targetContentArea = $(this).data('content');
	var $targetContentArea = $('.' + targetContentArea);

	$('body').animate({
		scrollTop:$targetContentArea.offset().top - navHeight - $("header").outerHeight()
	});
});


/************* Highlight Correct Nav on scroll up **********/
function navScroll() {


var currentPosition = $(this).scrollTop();
var hero = $('.hero').offset().top-80;
var projects = $('.projects').offset().top-80;
var showcase = $('.showcase_cta').offset().top-80;
var connect = $('.connect').offset().top-80;

if(currentPosition <= projects) {
		$('header nav ul li').removeClass('active');
		$('header nav ul').find('li').eq(0).addClass('active');
	}
else if(currentPosition > projects && currentPosition < showcase) {
		$('header nav ul li').removeClass('active');
		$('header nav ul').find('li').eq(1).addClass('active');
	}
else if(currentPosition > showcase && currentPosition < connect) {
		$('header nav ul li').removeClass('active');
		$('header nav ul').find('li').eq(2).addClass('active');
	}

}

$( window ).scroll(navScroll);

/***DRY***/
/*

ex: 
$('li[data-content]=hero').addClass('active').siblings().removeClass('active')


AKA you can combine the remove and add at the same time

*/
/************* Scroll to top ****************/

$(document).scroll(function () {
	var bodyScrollTop = $('body').scrollTop();
	if (bodyScrollTop > 0) {
		$('.scroll-to-top').fadeIn('fast');
	} else {
		$('.scroll-to-top').fadeOut('fast');
	}
});

$('.scroll-to-top').click(function () {
	$('body').animate({ scrollTop: 0 });
});


