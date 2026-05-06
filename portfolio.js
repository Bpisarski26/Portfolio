const heroBtn = document.querySelector('.hero-btn');

heroBtn.addEventListener('mouseenter', function() {
    let flickers = 0;
    const crackle = setInterval(function() {
        if (Math.random() < 0.5) {
            heroBtn.style.backgroundColor = 'red';
        } else {
            heroBtn.style.backgroundColor = 'rgb(0, 248, 120)';
        }
        flickers++;
        if (flickers > 8) {
            clearInterval(crackle);
            heroBtn.style.backgroundColor = 'rgb(0, 248, 120)';
        }
    }, 60);
});