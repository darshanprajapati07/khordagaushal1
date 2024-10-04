let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const slideWidth = slides.children[0].clientWidth;
    slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    
    // Image Slider
    function showSlide(index) {
        const slides = document.querySelector('.slides');
        const totalSlides = slides.children.length;
    
        if (index >= totalSlides) currentSlide = 0;
        else if (index < 0) currentSlide = totalSlides - 1;
        else currentSlide = index;
    
        const slideWidth = slides.children[0].clientWidth;
        slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    }
    
    function moveSlide(step) {
        showSlide(currentSlide + step);
    }

    setInterval(() => moveSlide(1), 3000); // Automatic slide change every 3 seconds

    // Counter Logic
    const counters = [
        { element: document.getElementById('cowCount'), target: 600 },
        { element: document.getElementById('donorCount'), target: 200 },
        { element: document.getElementById('workerCount'), target: 10 }
    ];

    counters.forEach(counter => {
        let currentCount = 0;
        const updateCounter = setInterval(() => {
            if (currentCount < counter.target) {
                currentCount++;
                counter.element.textContent = currentCount + '+';
            } else {
                clearInterval(updateCounter);
            }
        }, 1); // Speed of counting
    });
});
function openNewPageHome() {
    // Specify the path to the new HTML file you want to open
    window.location.href = "abt.html";
}
function openNewPage() {
    // Specify the path to the new HTML file you want to open
    window.location.href = "sv.html";
}
document.getElementById('menu-icon').addEventListener('click', function() {
    var menuList = document.getElementById("menu-list");
    menuList.classList.toggle("open");
});

