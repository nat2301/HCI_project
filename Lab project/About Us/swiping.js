Slides = document.querySelectorAll('.slides')

var IntervalId = setInterval(() => {
    
    Slides.forEach(slide => {
        
        radio = slide.querySelectorAll('input')
        
        let i = 0;
        while(!radio[i].checked) {
            i++
        }

        if(i == 2) {
            i = -1;
        }
        radio[i+1].checked = true

    });

}, 5000);