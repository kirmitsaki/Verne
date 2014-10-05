/* Credit: http://www.templatemo.com */

var menuDisabled = false;

jQuery(function($) {

    $(window).load(function() { // makes sure the whole site is loaded

    });

    $(document).ready( function() {

        if($(window).width() > 767) {
           var navWidth = $('.navbar .navbar-nav').width();
            $('hgroup').css("maxWidth",navWidth + "px");
            $('.content').css("maxWidth",navWidth + "px");
            $('.footer-wrapper').css("maxWidth",navWidth + "px");
        }
        
        // Lettering on site title
        $(".fancy-title").lettering();
        
        // backstretch for background image
        var defaultImgSrc = $('img.main-img').attr('src');
        $.backstretch(defaultImgSrc, {speed: 400});

        $(".nav a").on('click',function(e){
            if( $(this).hasClass("external") ) {
                return;
            }
            e.preventDefault();
            if (menuDisabled == false) // check the menu is disabled?
            {
                menuDisabled = true; // disable the menu

                var name = $(this).attr('href');
                $('.nav li').removeClass('active');

                var menuClass = $(this).parent('li'); // .attr('class')
                $(menuClass).addClass('active');

                // get image url and assign to backstretch for background
                var imgSrc = $("img"+name+"-img").attr('src');
                $.backstretch(imgSrc, {speed: 400}); //backstretch for background fade in/out

                // content slide in/out
                $("section.active").animate({left:-$("section.active").outerWidth()}, 300,function(){
                    $(this).removeClass("active");
                    $(this).hide();
                    $(name+"-text").removeClass("inactive");
                    $(name+"-text").css({left:'703px', top:'0px'});
                    $(name+"-text").show();
                    $(name+"-text").animate({left:'0px'}, 300,function(){
                        $(this).addClass("active");
                        $.backstretch("resize"); // resize the background image
                        $(window).resize();
                        menuDisabled = false; // enable the menu
                    });
                });
            }
            return;
        });
    }); // document.ready
});