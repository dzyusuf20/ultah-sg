window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    let parallaxElement = document.getElementById('hero');
    parallaxElement.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});
