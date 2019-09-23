const btn = document.getElementById('submit');
const output = document.getElementById('output');

btn.addEventListener('click', function(e) {
  'use strict';
  let html= '';
  const fizz = parseInt(document.getElementById('fizz').value, 10);
  const buzz = parseInt(document.getElementById('buzz').value, 10);

  if(Number.isInteger(fizz) && Number.isInteger(buzz) ) {
    for(let i = 1; i < 100; i++) {
      if (i % fizz === 0 && i % buzz === 0) {
        html += `FizzBuzz ${i}<br>`;
      } else if(i % fizz === 0) {
        html += `Fizz ${i}<br>`;
      } else if(i % buzz === 0) {
        html += `Buzz ${i}<br>`;
      }
    }
  } else {
    html = '整数値を入力してください';
  }

  output.innerHTML = html;

  e.preventDefault();
})
