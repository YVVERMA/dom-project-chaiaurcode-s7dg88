const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const wight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (wight === '' || wight < 0 || isNaN(wight)) {
    results.innerHTML = `Please give a valid wight ${wight}`;
  }
  const BMI = (wight / ((height * height) / 10000)).toFixed(2);
  results.innerHTML = BMI;

  // if (BMI < 18.9) {
  //   lessthan.innerHTML = `Your are very week ${BMI}`;
  // } else if (BMI > 18.9 && BMI < 24.9) {
  //   normal.innerHTML = 'Your BMI is normal';
  // } else {
  //   Overweight.innerHTML = 'Your ar not helthi';
  // }
});
