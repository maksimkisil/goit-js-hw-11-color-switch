const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;
let isActive = false;

const btnStartRef = document.querySelector("[data-action='start']");
const btnStopRef = document.querySelector("[data-action='stop']");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartBtn() {
  // btnStartRef.disabled = true;

  // если изменение темы запущено, то просто return из функции
  // если изменение темы не запущено, то запускаем - ставим буль и setInterval
  if (isActive) {
    console.log('изменение темы запущено, кнопка старт не активна');
    return;
  }

  isActive = true;

  intervalId = setInterval(() => {
    // рандомная смена темы из интернета
    // document.body.style.backgroundColor =
    // colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
    // getRandomColor();

    console.log('изменяю цвет фона');
    // }, 5000); //если 5 сек, то будет видно, что кнопка старт повторно не нажимается, когда изменение темы запущено
  }, 1000);
}
btnStartRef.addEventListener('click', onStartBtn);

function onStopBtn() {
  // if (!btnStartRef.disabled) {
  //   return;
  // }
  // btnStartRef.disabled = false;

  clearInterval(intervalId, console.log('останавливаю изменения цвета фона'));
  isActive = false;
}
btnStopRef.addEventListener('click', onStopBtn);

