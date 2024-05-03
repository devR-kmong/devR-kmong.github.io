let car = document.getElementById('car');

if (window.innerWidth > 951) {
    window.addEventListener('scroll', function () {
        let value = window.scrollY;
    
        if (value >= 3300) {
            car.style.right = (value - 3300) * 1.5 - 500 + 'px';
        }
    })
} else if (window.innerWidth > 551) {
    window.addEventListener('scroll', function () {
        let value = window.scrollY;
    
        if (value >= 3800) {
            car.style.right = (value - 3800) * 1.5 - 500 + 'px';
        }
    })
} else {
    window.addEventListener('scroll', function () {
        let value = window.scrollY;
    
        if (value >= 3200) {
            car.style.right = (value - 3200) * 1.2 - 500 + 'px';
        }
    })
}