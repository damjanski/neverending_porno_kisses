$(function() {

	$(".enter_button").hover(function(e){
		$(this).toggleClass("enter_button_hover");
	});
	$(".fb_button").hover(function(e){
		$(this).toggleClass("fb_button_hover");
	});
	$(".twitter_button").hover(function(e){
		$(this).toggleClass("twitter_button_hover");
	});

	$(".page_scroll").scrollable({
		prev: ".page_prev",
		next: ".page_next"
	});
});
