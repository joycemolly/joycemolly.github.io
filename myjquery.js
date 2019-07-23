$(document).ready(function(){
      $('#slider').css('display', 'none');
      $('#slider').fadeIn(2000);

      $('#header').css('display', 'none');
      $('#header').fadeIn(1000);

    

      $('.two_quarter').css('display', 'none');
      $('.two_quarter').fadeIn(2000);



       $(window).scroll( function(){
    
        /* Check the location of each desired element */

        $('#infoContent').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object){
                
                $(this).animate({'opacity':'1'},1800);
                    
            }
            
        }); 


                $('#secondRow').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object/2){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
            
        });




    });


       var sliderWidth = 960;
	   var slider = $('#inSlider');
       var sliderCount = $('div', slider).length;

       slider.width(sliderCount * sliderWidth);

       $('.sliderPrev').click(function () { 
       $('#inSlider').animate({left: '+='+sliderWidth}, 500);});

       $('.sliderNext').click(function () {
       $('#inSlider').animate({left: '-='+sliderWidth}, 500);
});




});

