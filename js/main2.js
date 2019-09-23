'use strict';

let fizz_element = document.getElementById('fizz');
let buzz_element = document.getElementById('buzz');
const btn = document.getElementById('submit');
const output = document.getElementById('output');

btn.addEventListener('click', function(e) {
  let html = '';
  let fizz = parseInt(fizz_element.value, 10);
  let buzz = parseInt(buzz_element.value, 10);

  if(Number.isInteger(fizz) && Number.isInteger(buzz) ) {
    let fizzSum = fizz;
    let buzzSum = buzz;

    for(let i = 0; i < 100; i++) {
      i = Math.min(fizzSum, buzzSum);
      if (i % fizz === 0 && i % buzz === 0) {
        html += `FizzBuzz ${i}<br>`;
      } else if(i % fizz === 0) {
        html += `Fizz ${i}<br>`;
      } else {
        html += `Buzz ${i}<br>`;
      }

      if(fizzSum < buzzSum) {
        fizzSum += fizz;
      } else if(fizzSum > buzzSum) {
        buzzSum += buzz;
      } else {
        fizzSum += fizz;
        buzzSum += buzz;
      }
    }
  } else {
    html = '整数値を入力してください';
  }

  output.innerHTML = html;

  e.preventDefault();
})
