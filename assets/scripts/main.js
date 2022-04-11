
/**  toggle menu  */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/**  hidden menu when click in any menu item  */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/** function to add shadow to header*/
function headerChangeScroll(){
    const header = document.querySelector('#header');
    const navHeight = header.offsetHeight;

    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}

/** function to Back to top when click arrow button at bottom of page  */
function backToTop(){
    const topButton = document.querySelector('.back-to-top');
    if(window.scrollY > 400){
        topButton.classList.add('show')
    }else {
        topButton.classList.remove('show')
    }
}

/** When scrolling page call the functions to add shadow to header and back to top */
window.addEventListener('scroll', function() {
    headerChangeScroll()
    backToTop()
})

/** testimonials slider | carousel  */
/** https://swiperjs.com/ */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,

});

/** Scroll Reveal  */
/** Show elements when srolling page */
/** https://scrollrevealjs.org/ */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
#hero .image, #hero .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`, { interval: 100 })