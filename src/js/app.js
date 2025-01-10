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
})();

const calculateTotal = (data) => {
  let subtotal = 0;
  let total = 0;
  data.forEach(score => subtotal += score.score);
  return total = parseInt(subtotal / data.length);
}

const showScore = (place, data) => {
  let counter = 0;
  setInterval(() => {
    counter++;
    if (counter < data) {
      place.innerHTML = counter;
    } else {
      place.innerHTML = data;
      return
    }
  }, 50);
}

const urlOrigin = window.location.origin;
const scoreTotal = document.querySelector('[data-score="total"]');
const itemScores = [...document.querySelectorAll('[data-score="score"]')];

fetch(`${urlOrigin}/src/data/data.json`)
  .then(response => response.json())
  .then(data => {
    const total = calculateTotal(data);
    showScore(scoreTotal, total);
    itemScores.forEach((score, i) => {
      let item = score.querySelector('strong');
      let titleScore = score.querySelector('[data-score="title-score"]');
      let urlIcon = data[i].icon.replace('./assets/images', '../img');
      titleScore.innerText = data[i].category;
      showScore(item, data[i].score);
      score.classList.add(`before:content-[url('${urlIcon}')]`)
    })
  })