// new Glider(document.querySelector('.glider'),{
//     slidesToShow: 3,
//     slidesToScroll:2,
//     draggable: true,
//     dots: '#dots',
//     arrows:{
//         prev: '.glider-prev',
//         next: '.glider-next'
//     },
//     responsive: [
//         {
//             breakpoint: 300,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             },
//         },
//         {
//             breakpoint: 900,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//             },
//         },
//     ],
// })

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


let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});