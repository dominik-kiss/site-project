// Select all pictures in the carousel
const slides = document.querySelectorAll(".slide");

// loop through carousel pictures and set each picture's translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});


const moveCarousel = (images, timer, current = 0) => {
    const maxSlides = images.length - 1;
    images.forEach((image, index) => {
        image.style.transform = `translateX(${100 * (index - current)}%)`;
    });
    current = (current !== maxSlides) ? current + 1 : 0;
    setTimeout(moveCarousel, timer, images, timer, current);
};

moveCarousel(slides, 7000);
