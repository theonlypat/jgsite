$(document).ready(function() {
	$(".portfolioMenu").click(function() {
		$(".portfolio").slideDown("slow");
		$(".photography").slideUp("fast");
		$(".main").slideUp("fast");
	});
	$(".photographyMenu").click(function() {
		$(".photography").slideDown("slow");
		$(".portfolio").slideUp("fast");
		$(".main").slideUp("fast");
	});
	$(".homeMenu").click(function() {
		$(".main").slideDown("slow");
		$(".portfolio").slideUp("fast");
		$(".photography").slideUp("fast");
	});
});