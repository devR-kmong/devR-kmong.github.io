let box = document.getElementById('box-p');
let truck1 = document.getElementById('truck-p');
let truck2 = document.getElementById('truck-a1');
let truck3 = document.getElementById('truck-a2');
let truck4 = document.getElementById('truck-a3');

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    box.style.opacity = 1 - value;
    
    truck1.style.left = value * 1.3 + 300 + 'px';

    if (value >= 900) {
        truck2.style.opacity = 1;
        truck2.style.top = value - (value * .65) - 450 + 'px';
        truck2.style.right = value - (value * .35) - 900 + 50 + 'px';
    } else {
        truck2.style.opacity = 0;
    }
    
    if (value >= 2500) {
        truck3.style.left = value - 2500 + 250 + 'px';
    }

    if (value >= 4450) {
        truck4.style.right = value - 4450 + 2 + 'px';
    }
    
    if (value >= 5000) {
        truck4.style.right = 545 + 'px';
    }

    if (window.innerWidth <= 1250) {
        truck1.style.left = value - 150 + 'px';
    }

    if (window.innerWidth <= 1050) {
        truck3.style.left = value - 2500 + 50 + 'px';
    }

    if (window.innerWidth <= 768) {
        truck2.style.top = value - (value * .65) - 250 + 'px';
    }

    if (window.innerWidth <= 550) {
        truck3.style.left = value - 2500 + 750 + 'px';
        truck2.style.top = value - (value * .65) - 150 + 'px';
    }

    if (window.innerWidth <= 450) {
        truck2.style.top = value - (value * .65) - 300 + 'px';
    }
})