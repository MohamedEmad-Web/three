/*global $, jQuery, alert, window, console*/
$(window).ready(function () {
    
    "use strict";
    
    // adjust slider height
    
    var winH = $(window).height(),
        
        upperH = $(".upper-bar").innerHeight(),
        
        navH = $(".navbar").innerHeight();
    $(".slider, .carousel-item").height(winH - ( upperH + navH ));
    
    // Featured-work shuffle
    
    $(".featured-work ul li").on("click", function() {
        
        $(this).addClass("active").siblings().removeClass("active");
        
        if( $(this).data("class") == "all" ) {
            
            $(".mido .col-sm-3").css("opacity", "1");
        }
        else {
            
            $(".mido .col-sm-3").css("opacity", ".08");
            $($(this).data('class')).parent().css("opacity","1");
        }
    })
    
    // Math Random
    
    var x = Math.random();
    
    console.log(Math.floor( x * 100));
    
    
});