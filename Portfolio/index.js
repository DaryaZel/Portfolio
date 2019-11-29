let displayButton=document.querySelector('#display-button')
let backButton=document.querySelector('#back-button')
let body=document.querySelector('body')
let headerСontainer=document.querySelector('.header-container')
let carouselControlPrev=document.querySelector('.carousel-control-prev')
let carouselControlNext=document.querySelector('.carousel-control-next')
let portfolioList=document.querySelectorAll('.portfolio-slider-container-list')
let portfolioButton=document.querySelectorAll('.portfolio-slider-container-button')
let portfolioSlider=document.querySelectorAll('.portfolio-slider-container')
let portfolioImg=document.querySelectorAll('.portfolio-slider-container-img')
displayButton.addEventListener('click',(e)=>{
  body.classList.toggle('mobile-body');
  headerСontainer.classList.toggle('mobile-header-container');
  portfolioSlider.forEach(element => element.classList.toggle('mobile-carousel'));
  carouselControlPrev.classList.toggle('mobile-carousel-items');
  carouselControlNext.classList.toggle('mobile-carousel-items');
  portfolioList.forEach(element => element.classList.toggle('mobile-carousel-items'));
  portfolioButton.forEach(element => element.classList.toggle('mobile-carousel-items'));
  portfolioImg.forEach(element => element.classList.toggle('mobile-portfolio-slider-container-img'));
})
backButton.addEventListener('click',(e)=>{
})