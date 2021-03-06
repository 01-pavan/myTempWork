'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct=secretNumber!';
// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 23;
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//function for message out-put
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//function for displaying score
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
console.log(`secretNumber  IS ${number}`);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When there is no input
  if (!guess) {
    displayMessage('πNo number');
    // document.querySelector('.message').textContent = 'πNo number';
    //when user gives correct answer
  } else if (guess === number) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    displayScore(score);
    // document.querySelector('.score').textContent = score;
    displayMessage('Hurray!! ππcorrect Answer');
    // document.querySelector('.message').textContent =
    // 'Hurray!! ππcorrect Answer';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guess != number) {
    if (score > 1) {
      score--;
      displayMessage(
        guess > number ? 'Too High...π€¨π€¨π€¨π€¨' : 'Too Low....πππ'
      );
      displayScore(score);
      // document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent =
      //   guess > number ? 'Too High...π€¨π€¨π€¨π€¨' : 'Too Low....πππ';
    } else {
      displayMessage('YOU LOSTπ­π­');
      // document.querySelector('.message').textContent = 'YOU LOSTπ­π­';
      document.querySelector('body').style.backgroundColor = '#D22B2B';
      displayScore(0);
      // document.querySelector('.score').textContent = 0;
    }
  }
  //   } else if (guess > number) {
  //     if (score > 1) {
  //       score--;
  //       document.querySelector('.message').textContent = 'Too High....π€¨π€¨';
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'YOU LOSTπ­π­';
  //       document.querySelector('body').style.backgroundColor = '#D22B2B';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < number) {
  //     if (score > 1) {
  //       score--;
  //       document.querySelector('.message').textContent = 'too LOW....π€¨π€¨';
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'YOU LOSTπ­π­';
  //       document.querySelector('body').style.backgroundColor = '#D22B2B';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

// logic for again button

document.querySelector('.again').addEventListener('click', function () {
  highScore = 0;
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  displayMessage('start guessing...');
  // document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.guess').value = '';
  displayScore(20);
  // document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.highscore').textContent = highScore;
});
