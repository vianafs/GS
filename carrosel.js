document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        alert('Não se esqueça de dar sua Opinião no final!');
    }, 20000);

    let currentSlide = 0;
    const slides = document.querySelectorAll('.carrosel img');
    const totalSlides = slides.length;

    document.querySelector('.carrosel-button.next').addEventListener('click', function () {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
    });

    document.querySelector('.carrosel-button.prev').addEventListener('click', function () {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    });
});
