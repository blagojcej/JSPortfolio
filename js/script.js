$(window).on("load", function () {
    //fadeout inner element first
   $(".loader .inner").fadeOut(500, function () {
       //fadeout background
       $(".loader").fadeOut(750);
   });

   $(".items").isotope({
    filter: '*',
    animationOptions: {
        duration:1500,
        easing: 'linear',
        queue: false
    }
});

});

$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000, //miliseconds
        pagination: false
    });

    var typed = new Typed('.typed', {
        strings: ["Software Engineer", "Desktop and Web Developer", ],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
      });

      $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        // margin:10,
        // nav:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:5
            }
        }
    });    

    var skillsTopOffset = $('.skillSection').offset().top;
    // console.log(skillsTopOffset);

    $(window).scroll(function () {

        // console.log(window.pageYOffset);

        //If we're viewing skills section
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                //your options goes here
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152, // specified in height and width in html
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

    // $('.counter').countup(200);

    // var countUp = new CountUp('.counter', 200);
    // if (!countUp.error) {
    //     countUp.start();
    //     } else {
    //     console.error(countUp.error);
    //     }

    $("[data-fancybox]").fancybox();
    
    $("#filters a").click(function() {
        //get element with "current" class and remove the class
        $("#filters .current").removeClass("current");

        //add "current" class to current clicked element
        $(this).addClass("current");

        //get "data-filter" value from attribute from current a tag
        var selector=$(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration:1500,
                easing: 'linear',
                queue: false
            }
        });

        //Don't do anything else, stop proceeding click event
        return false;
    });

    $("#navigation li a").click(function (e) {
       //Prevent default behavior on click
       e.preventDefault();
       
       //Get the "href" attribute on clicked element
       var targetElement=$(this).attr("href");

       //Get the top of target element - where click event will lead us
       var targetPosition=$(targetElement).offset().top;

       $("html, body").animate({scrollTop: targetPosition - 50}, "slow");
    });

    const nav= $("#navigation");
    const navTop=nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        const body=$("body");

        if($(window).scrollTop() >= navTop) {
            body.addClass('fixedNav');
            body.css('padding-top', nav.outerHeight()+'px');
        }
        else {
            body.css('padding-top', 0);
            body.removeClass('fixedNav');
        }
    }
});