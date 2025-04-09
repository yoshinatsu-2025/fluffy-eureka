'use strict';{

$(function(){
     // header btn
    $('.header__btn').on('click',function(){
        $('.nav').toggleClass('active'); 
    });
    $('.nav__btn,.nav__item a').on('click',function(){
        $('.nav').removeClass('active'); 
    });

    // mainVisual
    const heading = document.querySelector('#heading');
    const keyfreames = {
        opacity : [0,1],
    };
    const options ={
        duration :4000,
        easing:'ease'
     };

    heading.animate(keyfreames,options);
    
    // scrolltop
    $('.topBtn').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },600);
    }); 

    // fadeIn
    $(window).on('load scroll',function(){
        const fadeIn =$('.fadeIn');
        console.log(fadeIn);
        

        fadeIn.each(function(){
            const boxOffset =$(this).offset().top;
                    console.log(boxOffset);
            const scrollPos =$(window).scrollTop();
                  console.log(scrollPos);
            const wh =$(window).height();
                  console.log(wh);

            if(scrollPos > boxOffset - wh + 100){
                $(this).addClass('animated')

            }
        })
    })
});

}
