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
});