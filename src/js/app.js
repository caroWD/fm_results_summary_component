(function () {
  const textHeader = Array.from(document.querySelectorAll('header [data-animate="delay"]'));
  textHeader.forEach(text => text.style.setProperty('--animate-delay', '0.5s'));
})();

(function () {
  const textMain = Array.from(document.querySelectorAll('main [data-animate="delay"]'));
  let amount = 0;
  textMain.forEach(text => {
    amount += 0.2;
    let time = amount + 's';
    text.classList.add('animate__delay-2s');
    text.style.setProperty('--animate-delay', time)
  })
})();

(function () {
  const header = document.querySelector('header');
  const width = window.innerWidth;
  if (width > 1223) {
    header.classList.remove('animate__fadeInDown');
    header.classList.add('animate__fadeInLeft');
  }
  window.onresize = resize;
})();