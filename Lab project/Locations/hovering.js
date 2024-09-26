const Places = document.querySelector('.place').children

for(let i = 0; i < Places.length; i++) {

    Places[i].querySelector('.hovered').addEventListener('mouseenter', function() {
        Places[i].querySelector('.info').style.opacity = '1'
        Places[i].style.gap = '0vh'
    });

    Places[i].querySelector('.hovered').addEventListener('mouseleave', function() {
        Places[i].querySelector('.info').style.opacity = '0'
        Places[i].style.gap = '2.5vh'
    });

}