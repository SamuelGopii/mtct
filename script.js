const donate_button_parent = document.querySelector('.menu');
const donate_button =  donate_button_parent.lastElementChild;

donate_button.style.cssText = 'color:white;padding:1vw';

// header logo redirction to home page functionality
const header_logo = document.querySelector('.logo');

header_logo.addEventListener('click', ()=>{
  window.location.assign('http://127.0.0.1:5500/index.html');
})

// Swiper js functionality
var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000, // milliseconds
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

 
//   donate slider functionality start
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.start-donate-box-container-slider');
    const slides = document.querySelectorAll('.start-donate-box');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slideWidth = slides[0].offsetWidth;
    const slideCount = slides.length;
    let currentIndex = 0;
  
    // Set container width based on slide count and width
    slider.style.width = slideCount * slideWidth + 'px';
  
    // Function to move slides
    function moveSlides(index) {
      const offset = -index * slideWidth;
      slider.style.transform = `translateX(${offset}px)`;
    }
  
    // Function to handle next button click
    nextBtn.addEventListener('click', function() {
      if (currentIndex < slideCount - 3) {
        currentIndex++;
        moveSlides(currentIndex);
      }
    });
  
    // Function to handle prev button click
    prevBtn.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        moveSlides(currentIndex);
      }
    });
  
    // Auto sliding
    setInterval(function() {
      if (currentIndex < slideCount - 3) {
        currentIndex++;
        moveSlides(currentIndex);
      } else {
        currentIndex = 0;
        moveSlides(currentIndex);
      }
    }, 3000); // Change slide every 3 seconds
  });
  
// feedbacks slide show functionality start
document.addEventListener("DOMContentLoaded", function() {
  const feedback_slides = document.querySelector('.feedback-section-testimonials-slide-container');
  const feedback_slideWidth = document.querySelector('.feedback-section-testimonials-slide').offsetWidth;
  const interval = 4000; // Change slide every 3 seconds
  let currentIndex = 0;

  function moveToNextSlide() {
    currentIndex++;
    if (currentIndex >= feedback_slides.children.length) {
      currentIndex = 0;
    }
    feedback_slides.style.transform = `translateX(-${currentIndex * feedback_slideWidth}px)`;
  }

  setInterval(moveToNextSlide, interval);
});


// latest news sliding functionality
document.addEventListener("DOMContentLoaded", function() {
  const slidesContainer = document.querySelector('.latest-news-boxes');
  const slideWidth = document.querySelector('.latest-news-boxes-slide').offsetWidth;
  const slideCount = document.querySelectorAll('.latest-news-boxes-slide').length;
  const slidesToShow = 4;
  let currentIndex = 0;

  function moveToNextSlide() {
    currentIndex++;
    if (currentIndex >= slideCount - slidesToShow + 1) {
      currentIndex = 0;
    }
    const offset = -currentIndex * slideWidth;
    slidesContainer.style.transform = `translateX(${offset}px)`;
  }

  setInterval(moveToNextSlide, 3000); // Auto-slide every 3 seconds
});

// drop downs functionalities
// about drop down menu

const about_drop_trigger = document.querySelector('.about-drop-trigger');
const about_drop_down_menu = document.querySelector('.about-drop-down-menu');

document.addEventListener('mouseover', (e)=>{
  if(e.target == about_drop_trigger){
    about_drop_down_menu.style.opacity = '1';
  }
})

document.addEventListener('click', (e)=>{
  if(e.target == about_drop_trigger || e.target == about_drop_down_menu){
    about_drop_down_menu.style.opacity = '1';
  }else{
    about_drop_down_menu.style.opacity = '0';
  }

  console.log(e.target);
})


// activity drop down menu

const activity_drop_trigger = document.querySelector('.activity-drop-trigger');
const activity_drop_down_menu = document.querySelector('.activity-drop-down-menu');

document.addEventListener('mouseover', (e)=>{
  if(e.target == activity_drop_trigger){
    activity_drop_down_menu.style.opacity = '1';
  }
})

document.addEventListener('click', (e)=>{
  if(e.target == activity_drop_trigger || e.target == activity_drop_down_menu){
    activity_drop_down_menu.style.opacity = '1';
  }else{
    activity_drop_down_menu.style.opacity = '0';
  }

  console.log(e.target);
})



// Home Page Animations

