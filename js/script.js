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
});