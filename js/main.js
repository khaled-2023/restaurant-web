$(document).ready(function(){


    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });
    $('nav ul li a').click(function(){
        $('nav').removeClass('nav-toggle');
        $('.fa-bars').removeClass('fa-times');
    });


    $('.dot1').click(function(){
    $(".v1").css("display","block"),
    $(".v2").css("display","none"),
    $(".v3").css("display","none"),
    $(".v4").css("display","none")
    });

    $(".dot2").click(function(){
    $(".v2").css("display","block"),
    $(".v1").css("display","none"),
    $(".v3").css("display","none"),
    $(".v4").css("display","none")
    });


$(".dot4").click(function(){
    $(".v4").css("display","block"),
    $(".v2").css("display","none"),
    $(".v3").css("display","none"),
    $(".v1").css("display","none")
    });

    $(window).on('scroll load',function(){
        if($(window).scrollTop() > 10){
            $('#header').addClass('header-active');
        }else{
            $('#header').removeClass('header-active');
        }
    });



});