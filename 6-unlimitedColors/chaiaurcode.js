// const start = document.getElementById('start');
// const stop = document.getElementById('stop');

// start.addEventListener('click', function () {
//   const strrandomCol = function () {
//     const random = Math.floor(Math.random() * (number + 1));
//     const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
//   };
//   const startColors = setInterval(strrandomCol, 1000);

//   stop.addEventListener('click', function () {
//     clearInterval(startColors);
//   });
// });

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

start.addEventListener('click', function () {
  const randomCol = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  console.log(randomCol());

  const setInvalid = setInterval(function () {
    document.body.style.backgroundColor = randomCol();
  }, 1000);

  stop.addEventListener('click', function () {
    clearInterval(setInvalid);
    document.body.style.backgroundColor = randomCol();
  });
});
