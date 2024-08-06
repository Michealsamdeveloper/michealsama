const imgs = document.querySelectorAll('.header-sliders img');
const prev_btn = document.querySelector('.prev');
const next_btn = document.querySelector('.next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

changeSlide();

prev_btn.addEventListener('click', () => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener('click', () => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
});

const scrollContainers = document.querySelectorAll('.products-slider .products');

for (const container of scrollContainers) {
    container.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        container.scrollLeft += evt.deltaY;
    });
}
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slides');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.style.transform = `translateX(${-slideIndex * 100}%)`;
    });
}

function nextSlide() {
    slideIndex++;
    
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

showSlides(); // Show initial slide
function scrollRight() {
    const slider = document.querySelector('.products-slider-with-price');
    slider.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}
function navigateToProduct(productPage) {
    window.location.href = productPage;
}



