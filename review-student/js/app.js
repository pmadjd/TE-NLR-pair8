
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

