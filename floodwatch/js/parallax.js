let city = document.getElementById('a1-city');
let flood = document.getElementById('a1-flood');
let floodText = document.getElementById('a1-flood-text');

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    if (value >= 1300) {
        city.style.bottom = -(value / 5) + 550 + 'px';
    } else {
        city.style.bottom = 300 + 'px';
    }
    
    if (value >= 2100) {
        flood.style.opacity = 1;
        floodText.style.opacity = 1;
    } else {
        flood.style.opacity = 0;
        floodText.style.opacity = 0;
    }
})