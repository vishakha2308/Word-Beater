window.addEventListener('load', init);

let time = 5;
let score = 0;
let isPlaying;
let highScore = localStorage.getItem("highScore") || 0;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highScoreDisplay = document.querySelector('#high-score')

const words = [
  'next',
  'movie',
  'cold',
  'prevail',
  'relax',
  'comit',
  'courage',
  'cute',
  'apple',
  'bike',
  'react',
  'battle',
  'court',
  'exciting',
  'there',
  'eyes',
  'bottle',
  'laptop',
  'camera',
  'lotus',
  'well',
  'mobile',
  'sing'
];

function init() {
 showWords(words);
 wordInput.addEventListener('input',startMatch);
 setInterval(countdown,1000);
 setInterval(checkStatus,50);
setInterval(setHighScore, 1000);

}

function startMatch(){
  if(matchWords()){
    isPlaying = true;
    time =6;
    showWords(words);
    wordInput.value ='';
    score++

  }

  if(score === -1){
    scoreDisplay.innerHTML = 0;
  }else{
    scoreDisplay.innerHTML = score;
  }


}



function matchWords(){
  if(wordInput.value === currentWord.innerHTML){
    message.innerHTML = 'Correct';
    return true;
  }
  else{
    message.innerHTML = '';
    return false;
  }
setHighScore();
}


function showWords(words) {

const randomIndex = Math.floor(Math.random() * words.length);
currentWord.innerHTML = words[randomIndex];
}

function countdown(){
  if(time> 0){
    time--;
  }else if(time === 0) {
    isPlaying = false;
  }
 timeDisplay.innerHTML = time;
}

function checkStatus(){
  if(!isPlaying && time === 0){
    message.innerHTML = 'Game Over';
    setHighScore();
    score = -1;
}
  }


function setHighScore(){
  if(score > highScore){
   localStorage.setItem("highScore",score);

  }
  highScoreDisplay.innerHTML = localStorage.getItem("highScore");

}
