const Logos = document.querySelector('.logo').children
const Products = document.querySelector('.products').children

for(let i = 0; i < Logos.length; i++) {

    Logos[i].addEventListener('click', function() {
        window.scrollTo({
            top: Products[i].offsetTop,
            behavior: 'smooth'
        });
    });

}