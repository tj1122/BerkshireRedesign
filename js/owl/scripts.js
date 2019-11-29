$(document).ready(function() {
    // $(".owl-carousel").owlCarousel();

    // owl
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1400: {
                items: 3
            }
        }
    });

});
