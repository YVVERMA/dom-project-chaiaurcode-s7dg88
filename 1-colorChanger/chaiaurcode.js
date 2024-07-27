const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(e);
  });
});
