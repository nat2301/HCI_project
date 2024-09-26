const main_kids = document.querySelector('.main').children

let Y = [0]
for(let j = 1; j < main_kids.length; j++) {
    Y.push(main_kids[j].offsetTop)
}

const attributes_kids = document.querySelector('.main').querySelector('.attributes').children


for(let j = 1; j < attributes_kids.length; j++) {
    Y.push(attributes_kids[j].offsetTop)
}

Y.sort((a, b) => b - a).reverse();

// console.log(Y)

let j = 0;

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key === 'a' || key === 's') {
        j++
        window.scrollTo({
        top: Y[((j % Y.length) + Y.length) % Y.length],
        behavior: 'smooth'
        });
    }

    if (key === 'd' || key === 'w') {
        j--;
        window.scrollTo({
        top: Y[((j % Y.length) + Y.length) % Y.length],
        behavior: 'smooth'
        });
    }

    // console.log(j)
});






const TotalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const scroll = document.querySelector('.scroll')

console.log(TotalHeight)

window.addEventListener('scroll', function() {
    scale = Math.round(window.scrollY / TotalHeight * 100)
    scroll.style.width = scale + 'vw'
})