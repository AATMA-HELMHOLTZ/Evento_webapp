// $(document).ready(function(){
//     $('.slick-carousel').slick({
//         infinite: true,
//         slidesToShow: 3, // Shows a three slides at a time
//         slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
//         arrows: true, // Adds arrows to sides of slider
//         dots: true // Adds the dots on the bottom
//     });
// });

new Glider(document.querySelector('.glider'),{
    slidesToShow: 3,
    slidesToScroll:2,
    draggable: true,
    dots: '#dots',
    arrows:{
        prev: '.glider-prev',
        next: '.glider-next'
    },

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