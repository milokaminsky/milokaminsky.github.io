$(function(){

  
    // $('nav a').click(function(){
    //       console.log('link was clicked');

    //         // remove active class from all links
    // $('nav a').removeClass("active");
           
    //         // add active class to the link that was selected
    // $(this).addClass("active");

    // $('nav a').each(function(){
    // 	if ($(this).hasClass('disabled'))
    // 		$(this).removeAttr('href')

    // });

    // $("nav a").each(function(){
    //     if($(this).hasClass("disabled")){
    //         $(this).removeAttr("href");
    //     });
// });

    $('nav a').hover(function(){
    	// console.log('link was hovered');
    	//if 'nav a' has a class of disabled, no not toggle
    	//class, else toggle class

    	
			$(this).toggleClass('hover');
    	

    });





});