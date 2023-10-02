const container = document.querySelector('.imagelayout-container');
const scrollBox = document.querySelector('.imgl-scrollbox');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

console.log(container)
let scrollPosition = 0;

prevButton.addEventListener('click', () => {
    scrollPosition -= 100; // Adjust the scrolling distance as needed
    if (scrollPosition < 0) {
        scrollPosition = 0;
    }
    scrollBox.style.transform = `translateX(-${scrollPosition}px)`;
});

nextButton.addEventListener('click', () => {
    scrollPosition += 100; // Adjust the scrolling distance as needed
    const maxScroll = scrollBox.scrollWidth - container.clientWidth;
    if (scrollPosition > maxScroll) {
        scrollPosition = maxScroll;
    }
    scrollBox.style.transform = `translateX(-${scrollPosition}px)`;
});