'use strict';
let num;
let score;
function again() {
  document.querySelector('.again').textContent = 'Again!';
  document.querySelector('.score').textContent = 20;
  document
    .querySelector('.message')
    .setAttribute('style', 'background-color: none;');
  document.querySelector('.message').textContent = 'Start guessing...';
  num = Math.floor(Math.random() * 20) + 1;
  score = 20;
  return num;
}

function checkNum() {
  // document.querySelector('.message');

  let check = document.querySelector('.guess').value;
  console.log(num);
  score--;
  document.querySelector('.score').textContent = score;
  if (check == num) {
    document.querySelector('.message').textContent = 'CONGRATS🙌';
    if (document.querySelector('.highscore').textContent < score) {
      document.querySelector('.highscore').textContent = score;
    }
    document
      .querySelector('.message')
      .setAttribute('style', 'background-color: green;');
    console.log('success');
  } else if (check < num) {
    document.querySelector('.message').textContent = 'LOW';

    console.log('low');
  } else if (check > num) {
    document.querySelector('.message').textContent = 'HIGH';

    console.log('high');
  } else {
    document.querySelector('.message').textContent = 'You Need to Start';
  }
}
