
let score = 0;
let answer = 0; 
let problemNum = 1;



/**
 * Utility function to generate a random number based on max
 * @param {number} max
 */
function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
* Utility function to shuffle the items in an array
* @param {object} arr
*/
function shuffleArray(arr) {
  return arr.sort(function (a, b) { return Math.random() - 0.5 });
}


function createMathProblem() {
  let leftElement = getRandomNumber(10);
  let rightElement = getRandomNumber(10);
  answer = leftElement * rightElement;
  let solution = leftElement * rightElement;
  let answerArray = [solution, getRandomNumber(82), getRandomNumber(82), getRandomNumber(82)];
  mapAnswerToPage(answerArray);
  mapQuestionToPage(leftElement, rightElement);
}

function mapQuestionToPage(leftElement, rightElement) {
  let mathProblem = leftElement + "*" + rightElement;
  const problemElement = document.getElementById('problem').children[0];
  // let problemElement = mainElement.querySelector('.expression show-hide'); -why didn't this work
  problemElement.innerText = mathProblem;
}

function mapAnswerToPage(answerArray) {
  let shuffledAnswers = shuffleArray(answerArray);
  let ulElement = document.getElementById('answers').children[0];
  shuffledAnswers.forEach((element, index) => {
    let liElement = ulElement.children[index];
    liElement.innerText = element;
  });
}

createMathProblem(); 

function resetToStart() {
  problemNum = 1;
  score = 0;
 

  let list = document.querySelector("#answers");
  let currentQuestion = document.querySelector('#problem .expression');
  let directions = document.querySelector('.show-hide');
  list.classList.remove('hidden');
  currentQuestion.classList.remove('hidden');
  directions.classList.remove('hidden');

  createMathProblem();
  updateProblemAndScore();

} 
//why did this need to be here in this exact spot
function updateProblemAndScore() {
  let currentProblem = document.querySelector('.currentProblem');
  currentProblem.innerText=problemNum;

  let currentScore = document.querySelector('.currentScore');
  currentScore.innerText=score;
}

document.addEventListener('DOMContentLoaded', ()=>{
  answers.addEventListener('click',(event)=>{handleAnswerSelection(event)});
  btnStartOver.addEventListener('click',(event)=>{resetToStart(event)});
});



function handleAnswerSelection(event) {
  console.log(event);
  if (event.target.tagName=='LI') {
      console.log(score);
      if (answer == event.target.innerText) {
          score++;
          console.log(score);
      }
      problemNum++;
      if(problemNum > 10) {   
        problemNum = 10;
          updateProblemAndScore();
          let listOfAnswers = document.querySelector("#answers");
          let currentQuestion = document.querySelector('#problem .expression');
          let directionElement = document.querySelector('.show-hide');
          listOfAnswers.classList.add('hidden');
          currentQuestion.classList.add('hidden');
          directionElement.classList.add('hidden');
      } else {
        createMathProblem();
        updateProblemAndScore();

      }
  } 

} 
