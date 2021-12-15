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
    displayMessage('😒No number');
    // document.querySelector('.message').textContent = '😒No number';
    //when user gives correct answer
  } else if (guess === number) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    displayScore(score);
    // document.querySelector('.score').textContent = score;
    displayMessage('Hurray!! 🎉🎉correct Answer');
    // document.querySelector('.message').textContent =
    // 'Hurray!! 🎉🎉correct Answer';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guess != number) {
    if (score > 1) {
      score--;
      displayMessage(
        guess > number ? 'Too High...🤨🤨🤨🤨' : 'Too Low....😒😒😒'
      );
      displayScore(score);
      // document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent =
      //   guess > number ? 'Too High...🤨🤨🤨🤨' : 'Too Low....😒😒😒';
    } else {
      displayMessage('YOU LOST😭😭');
      // document.querySelector('.message').textContent = 'YOU LOST😭😭';
      document.querySelector('body').style.backgroundColor = '#D22B2B';
      displayScore(0);
      // document.querySelector('.score').textContent = 0;
    }
  }
  //   } else if (guess > number) {
  //     if (score > 1) {
  //       score--;
  //       document.querySelector('.message').textContent = 'Too High....🤨🤨';
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'YOU LOST😭😭';
  //       document.querySelector('body').style.backgroundColor = '#D22B2B';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < number) {
  //     if (score > 1) {
  //       score--;
  //       document.querySelector('.message').textContent = 'too LOW....🤨🤨';
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'YOU LOST😭😭';
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
