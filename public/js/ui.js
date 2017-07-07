
$(function(){

	$( document ).ready(function() {
 	
	$('.bxslider_1').bxSlider({
	  pagerCustom: '.bx-pager_1'
	});	

  $(".hamburg").click(function(){
     $('.aside').delay(200).toggleClass("hamburg-open");
     $(this).delay(200).toggleClass("active");
    });


});

	// $('.advanced_search_btn').click(function(){
	// 	$('.advanced_search').toggleClass( "h300" )
	// 	return false
	// });

	
	// $('.toggle_btn').click(function(){
	// 	$('.fat_footer').toggleClass( "fat-footer_show" )
	// 	return false
	// });




	//   $(".login_info_btn").click(function(){
	//      $(this).delay(200).toggleClass("login_active");
	//       $('.login_info_content').toggleClass("login_info_content_go");

	//     });

	//   $(".hamburg").click(function(){
	//       $('.m-second_bg').removeClass("second-open");

	//   	});

	//   $(".second-goback").click(function(){
	//       $('.m-second_bg').removeClass("second-open");
	      
	//     });
	


	//   $(".show-1").click(function(){
	//       $('.active-1').addClass("second-open");
	//     });
	//   $(".show-2").click(function(){
	//       $('.active-2').addClass("second-open");
	//     });
	//   $(".show-3").click(function(){
	//       $('.active-3').addClass("second-open");
	//     });
	//   $(".show-4").click(function(){
	//       $('.active-4').addClass("second-open");
	//     });	  
	//   $(".show-5").click(function(){
	//       $('.active-5').addClass("second-open");
	//     });



});






