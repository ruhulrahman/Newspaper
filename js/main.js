$(document).ready(function(){
	$('#nav').slicknav();
	
			
	$(".menu ul li").hover(function(){
		$(this).find(">ul").stop().slideToggle(400);
	});
	
	$(".menu ul li ul li").hover(function(){
		$(this).find(">ul").slideUpToggle(400);
	});


	
});
