const Rolex = document.querySelector('.rolex').querySelector('img')
const Omega = document.querySelector('.omega').querySelector('img')
const Patek = document.querySelector('.patek').querySelector('img')

var i = 0
IntervalId = setInterval(function() {

    Rolex.src = `/images/products/rolex/rolex${i%5}.png`;
    Omega.src = `/images/products/omega/omega${i%5}.png`;
    Patek.src = `/images/products/patek/patek${i%5}.png`;

    i++

}, 5000);