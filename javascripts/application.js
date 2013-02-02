$(function() {

  $(".enter_button").hover(function(){
    $(this).toggleClass("enter_button_hover");
  });
  $(".fb_button").hover(function(){
    $(this).toggleClass("fb_button_hover");
  });
  $(".send_button").hover(function(){
    $(this).toggleClass("send_button_hover");
  });
  $(".twitter_button").hover(function(){
    $(this).toggleClass("twitter_button_hover");
  });
  $(".arrow_right").hover(function(){
    $(this).toggleClass("arrow_right_hover");
  });
  $(".arrow_left").hover(function(){
    $(this).toggleClass("arrow_left_hover");
  });
  $(".page_scroll").scrollable({
    prev: ".page_prev",
    next: ".page_next",
	onBeforeSeek: function(e,r) {
		// alert(e.target.className)
		var api = $(".page_scroll").data("scrollable")
		if (r > api.getSize() - 1) {
			document.location.href = "send.html";
		}
	}
  });


});
