'use strict';

alert(
  'instructions: \n you need to find the hidden number \n (between 1-100 inclusive)'
);

let num;
let score;

// select the button you want to simulate the click event on
const myButton = document.querySelector('.check');

// select the input you want to listen to
const myInput = document.querySelector('.guess');

// add the event listener
myInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    // create a new click event
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    // dispatch the click event on the button
    myButton.dispatchEvent(clickEvent);
  }
});

function mistake() {
  document
    .querySelector('body')
    .setAttribute('style', 'background-color: red;');
}

function regular() {
  document
    .querySelector('body')
    .setAttribute('style', 'background-color: none;');
}

function correct() {
  document
    .querySelector('body')
    .setAttribute('style', 'background-color: green;');
}

function again() {
  document.querySelector('.again').textContent = 'Again!';
  document.querySelector('.score').textContent = 10;
  document
    .querySelector('body')
    .setAttribute('style', 'background-color: none;');
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').setAttribute('style', 'width:15rem;');
  num = Math.floor(Math.random() * 100) + 1;
  score = 10;
  return num;
}

function checkNum() {
  // document.querySelector('.message');

  let check = document.querySelector('.guess').value;
  

  if (check == num) {
    document.querySelector('.message').textContent = 'CONGRATS🙌';
    if (document.querySelector('.highscore').textContent < score) {
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('.number').setAttribute('style', 'width:25rem;');
    document.querySelector('.number').textContent = num;
    setTimeout(correct, 0);
    setTimeout(regular, 250);
    setTimeout(correct, 500);
    setTimeout(regular, 700);
    setTimeout(correct, 900);
    return;
  } else if (check < num) {
    document.querySelector('.message').textContent = 'TOO LOW';
    setTimeout(mistake, 0);
    setTimeout(regular, 250);
    setTimeout(mistake, 500);
    setTimeout(regular, 700);
  } else if (check > num) {
    document.querySelector('.message').textContent = 'TOO HIGH';
    setTimeout(mistake, 0);
    setTimeout(regular, 250);
    setTimeout(mistake, 500);
    setTimeout(regular, 700);
  } else {
    document.querySelector('.message').textContent = 'You Need to Start';
  }
  if (!(check == num)) {
    score--;
  }
  document.querySelector('.score').textContent = score;
  if (score <= 0) {
    document.querySelector('.message').textContent =
      "you're a loser and you need to die💩";
    return;
  }
}
