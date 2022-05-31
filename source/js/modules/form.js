const initForma = function () {
  const videoBtn = document.querySelector('.video__button');
  const videoFrame = document.querySelector('.video__frame');


  videoBtn.addEventListener('click', function () {
    videoFrame.src = videoFrame.src + '?autoplay=1';
    // console.log(videoFrame);

  });
};

export default initForma;
