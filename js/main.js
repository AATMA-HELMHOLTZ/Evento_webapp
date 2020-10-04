<<<<<<< HEAD
=======
// $(document).ready(function(){
//     $('.slick-carousel').slick({
//         infinite: true,
//         slidesToShow: 3, // Shows a three slides at a time
//         slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
//         arrows: true, // Adds arrows to sides of slider
//         dots: true // Adds the dots on the bottom
//     });
// });
>>>>>>> a8f7dc92bbbb6356df1a45f7cdf581f2ae0ae5a4

new Glider(document.querySelector('.glider'),{
    slidesToShow: 3,
    slidesToScroll:2,
    draggable: true,
    dots: '#dots',
    arrows:{
        prev: '.glider-prev',
        next: '.glider-next'
    },
<<<<<<< HEAD
    responsive: [
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
    ],
=======

>>>>>>> a8f7dc92bbbb6356df1a45f7cdf581f2ae0ae5a4
})

// window.addEventListener('scroll', function (e) {
//     var nav = document.getElementById('nav');
//     if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
//         nav.classList.add('nav-colored');
//         nav.classList.remove('nav-transparent');
//     } else {
//         nav.classList.add('nav-transparent');
//         nav.classList.remove('nav-colored');
//     }
// });