let displayButton = document.querySelector('#display-button'),
backButton = document.querySelector('#back-button'),
body = document.querySelector('body'),
headerСontainer = document.querySelector('.header-container'),
carouselControlPrev = document.querySelector('.carousel-control-prev'),
carouselControlNext = document.querySelector('.carousel-control-next'),
portfolioList = document.querySelectorAll('.portfolio-slider-container-list'),
portfolioButton = document.querySelectorAll('.portfolio-slider-container-button'),
portfolioSlider = document.querySelectorAll('.portfolio-slider-container'),
portfolioImg = document.querySelectorAll('.portfolio-slider-container-img'),
portfolioBtn = document.querySelectorAll('.portfolio-slider-container-title_btl')
displayButton.addEventListener('click', (e) => {
  if (e.target.innerHTML === 'Mobile') {
    e.target.innerHTML = "Desktop"
  }
  else if (e.target.innerHTML === 'Desktop') {
    e.target.innerHTML = "Mobile"
    portfolioList.forEach(element => element.classList.remove('mobile-portfolio-slider-container-list'));
    portfolioImg.forEach(element => element.classList.remove('mobile-carousel-items'));
  }
  body.classList.toggle('mobile-body');
  headerСontainer.classList.toggle('mobile-header-container');
  portfolioSlider.forEach(element => element.classList.toggle('mobile-carousel'));
  carouselControlPrev.classList.toggle('mobile-carousel-items');
  carouselControlNext.classList.toggle('mobile-carousel-items');
  portfolioList.forEach(element => element.classList.toggle('mobile-carousel-items'));
  portfolioButton.forEach(element => element.classList.toggle('mobile-carousel-items'));
  portfolioImg.forEach(element => element.classList.toggle('mobile-portfolio-slider-container-img'));
  portfolioBtn.forEach(element => element.classList.toggle('mobile-carousel'));
})
backButton.addEventListener('click', (e) => {
  e.target.previousElementSibling.innerHTML = "Mobile"
  body.classList.remove('mobile-body');
  headerСontainer.classList.remove('mobile-header-container');
  portfolioSlider.forEach(element => element.classList.remove('mobile-carousel'));
  carouselControlPrev.classList.remove('mobile-carousel-items');
  carouselControlNext.classList.remove('mobile-carousel-items');
  portfolioList.forEach(element => element.classList.remove('mobile-carousel-items'));
  portfolioButton.forEach(element => element.classList.remove('mobile-carousel-items'));
  portfolioImg.forEach(element => element.classList.remove('mobile-portfolio-slider-container-img'));
  portfolioBtn.forEach(element => element.classList.remove('mobile-carousel'));
  portfolioList.forEach(element => element.classList.remove('mobile-portfolio-slider-container-list'));
  portfolioImg.forEach(element => element.classList.remove('mobile-carousel-items'));
})
portfolioBtn.forEach(element => element.addEventListener('click', (e) => {
  portfolioList.forEach(element => element.classList.toggle('mobile-portfolio-slider-container-list'));
  portfolioImg.forEach(element => element.classList.toggle('mobile-carousel-items'));
}));