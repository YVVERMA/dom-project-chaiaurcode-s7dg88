// const banner = document.getElementById('banner');
// const clock = document.getElementById('clock');
// banner.addEventListener('click', function () {
//   const startTime = setInterval(function () {
//     const date = new Date();
//     const s = date.getSeconds()
//     clock.innerHTML = s
//   }, 1000);
//  clock.addEventListener('click', function () {
//     // banner.innerHTML = 'Stop';
//     clearInterval(startTime);
//   });
// });

const banner = document.getElementById('banner');
const clock = document.getElementById('clock');
banner.addEventListener('click', function () {
  const startTime = setInterval(function () {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
  }, 1000);
  clock.addEventListener('click', function () {
    // banner.innerHTML = 'Stop';
    clearInterval(startTime);
  });
});
