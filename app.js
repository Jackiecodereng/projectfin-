$(document).ready(function () {
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        //    if we change the true to false we hide the two bottom arrows
        nav: true,
        //  removes the bottom dots
        dots: false,
        items: 1,
        //  controls the speed
        smartSpeed: 1000,
        navText: ['PREV', 'NEXT'],
        responsive: {
            0: {
         nav:false, /* for this to remove the prev and next icon you need to remove the 600 and 1000*/
            },
         768:{
                nav:true,   /* this one returns the buttons in large screens*/
         }
        }
    });

 //project slider

       $('#project-slider').owlCarousel({
        loop: true,
        margin: 0,
        //    if we change the true to false we hide the two bottom arrows
        nav: false,
        //  removes the bottom dots
        dots: true,

        smartSpeed: 1000,
           margin:24, /* this creates space between the carousel*/

        responsive: {
            0: {
                items:1,
            },
         768:{
                items:2,
         },
         1140:{
                items:2, /* in very small screens it will display 2 items*/
                center:true,/*ensures the images are well centered*/
         }
        }
    });
       // reviews
       $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
           dots: true,
           items: 1,
           smartSpeed: 800,

})

});
 //project slider

