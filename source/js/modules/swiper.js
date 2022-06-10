const initSwiper = function () {

  const swiper = new Swiper('.trainers__swiper', {

    navigation: {
      nextEl: '.trainers__button-next',
      prevEl: '.trainers__button-prev',
    },

    // отключение скролла
    simulateTouch: false,

    // Бесконечная прокрутка
    loop: true,

    breakpoints: {
      320: {
        // Количество слайдов на странице
        slidesPerView: 1,
        // С какого слайда начинать
        initialSlide: 2,
      },
      768: {
        slidesPerView: 2,
        // Отступ между слайдами
        spaceBetween: 30,
        // С какого слайда начинать
        initialSlide: 2,
      },
      1200: {
        // Колличество слайдов на странице
        slidesPerView: 3,
        // Отступ между слайдами
        spaceBetween: 40,
        // С какого слайда начинать
        initialSlide: 0,
      },
      1366: {
        // Колличество слайдов на странице
        slidesPerView: 4,
        // Отступ между слайдами
        spaceBetween: 40,
        // С какого слайда начинать
        initialSlide: 0,
      },
    },
  });

  const swiperFeedback = new Swiper('.feedback__swiper', {

    navigation: {
      prevEl: '.feedback__button-prev',
      nextEl: '.feedback__button-next',
    },

    loop: false,
    simulateTouch: false,
    slidesPerView: 1,

  });


  const trainersButtonPrev = document.querySelector('.trainers__button-prev');

  trainersButtonPrev.addEventListener('keydown', function (evt) {
    if (evt.shiftKey && evt.key === 'Tab') {
      evt.preventDefault();
      trainersButtonPrev.focus();
    }
  });

};

export default initSwiper;
