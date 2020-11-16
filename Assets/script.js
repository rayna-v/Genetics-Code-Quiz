// selecting, creating and/or declaring variables in global memory and setting attributes
// main card
var divEl = document.querySelectorAll("div");
var startCard = divEl[5];
startCard.setAttribute("id", "start-card");
// start button with event handler
var btnStart = document.querySelector('a');
btnStart.setAttribute("id", "start-button");
btnStart.addEventListener("click", startFunction)
// high score footer
var highScore = document.body.children[2].children[1].children[2]
if (!localStorage.getItem("score")) {
    highScore.textContent = "Current High Score: 0"
} else {
    highScore.textContent = "Current High Score: " + localStorage.getItem("score")
}
// creating buttons with attributes to be appended after start
var qDiv = document.createElement("div");
qDiv.setAttribute("class", "btn-group-vertical")
qDiv.setAttribute("style", "width: 100%")
var qButtonA = document.createElement("button");
qButtonA.setAttribute("class", "qButtons btn btn-primary btn-lg btn-block");
var qButtonB = document.createElement("button");
qButtonB.setAttribute("class", "qButtons btn btn-primary btn-lg btn-block");
var qButtonC = document.createElement("button");
qButtonC.setAttribute("class", "qButtons btn btn-primary btn-lg btn-block");
var qButtonD = document.createElement("button");
qButtonD.setAttribute("class", "qButtons btn btn-primary btn-lg btn-block");
var qButtons = document.getElementsByClassName("qButtons")
// question # index and time remaining for timer
let currentIndex = 0
let secondsLeft = 180

// array of objects with questions, answers, question number, and correct/incorrect value
var questionsArr = [
    {
        questionID: 1,
        number: "Question 1",
        question: "What is the function of the Reproductive System?",
        answerA: {
            text: "To support and move the body",
            correct: false,
        },
        answerB: {
            text: "To regulate body functions using hormones",
            correct: false,
        },
        answerC: {
            text: "To produce offspring to continue the species",
            correct: true,
        },
        answerD: {
            text: "To process food and absorb nutrients",
            correct: false,
        }
    },
    {
        questionID: 2,
        number: "Question 2",
        question: "Which of the following is NOT part of the female reproductive system?",
        answerA: {
            text: "testes",
            correct: true,
        },
        answerB: {
            text: "ovaries",
            correct: false,
        },
        answerC: {
            text: "estrogen",
            correct: false,
        },
        answerD: {
            text: "egg",
            correct: false,
        }
    },
    {
        questionID: 3,
        number: "Question 3",
        question: "Which of the following is NOT part of the male reproductive system?",
        answerA: {
            text: "sperm cell",
            correct: false,
        },
        answerB: {
            text: "uterus",
            correct: true,
        },
        answerC: {
            text: "testes",
            correct: false,
        },
        answerD: {
            text: "testosterone",
            correct: false,
        }
    },
    {
        questionID: 4,
        number: "Question 4",
        question: "Which is an advantage of SEXUAL reproduction?",
        answerA: {
            text: "requires 2 parents",
            correct: false,
        },
        answerB: {
            text: "offspring are different (genetic variation)",
            correct: true,
        },
        answerC: {
            text: "faster",
            correct: false,
        },
        answerD: {
            text: "no mate needed",
            correct: false,
        }
    },
    {
        questionID: 5,
        number: "Question 5",
        question: "Which is a disadvantage of SEXUAL reproduction?",
        answerA: {
            text: "faster",
            correct: false,
        },
        answerB: {
            text: "offspring are different (genetic variation)",
            correct: false,
        },
        answerC: {
            text: "increased survival rate",
            correct: false,
        },
        answerD: {
            text: "requires 2 parents",
            correct: true,
        }
    },
    {
        questionID: 6,
        number: "Question 6",
        question: "Which is an advantage of ASEXUAL reproduction?",
        answerA: {
            text: "identical to parents",
            correct: false,
        },
        answerB: {
            text: "can produce a large number ",
            correct: true,
        },
        answerC: {
            text: "takes longer",
            correct: false,
        },
        answerD: {
            text: "decreased survival rate",
            correct: false,
        }
    },
    {
        questionID: 7,
        number: "Question 7",
        question: "Which is a disadvantage of ASEXUAL reproduction?",
        answerA: {
            text: "requires 2 parents",
            correct: false,
        },
        answerB: {
            text: "increased survival rate",
            correct: false,
        },
        answerC: {
            text: "no mate needed",
            correct: false,
        },
        answerD: {
            text: "genetically identical",
            correct: true,
        }
    }, {
        questionID: 8,
        number: "Question 8",
        question: "Which form of reproduction experiences natural selection? ",
        answerA: {
            text: "sexual reproduction",
            correct: true,
        },
        answerB: {
            text: "asexual reproduction",
            correct: false,
        },
        answerC: {
            text: "both sexual reproduction and asexual reproduction",
            correct: false,
        },
        answerD: {
            text: "neither sexual reproduction nor asexual reproduction",
            correct: false,
        }
    }, {
        questionID: 9,
        number: "Question 9",
        question: "Which form of reproduction is able to adapt to a changing environment? ",
        answerA: {
            text: "sexual reproduction",
            correct: true,
        },
        answerB: {
            text: "asexual reproduction",
            correct: false,
        },
        answerC: {
            text: "both sexual reproduction and asexual reproduction",
            correct: false,
        },
        answerD: {
            text: "neither sexual reproduction nor asexual reproduction",
            correct: false,
        }
    }, {
        questionID: 10,
        number: "Question 10",
        question: "Which form of reproduction is able to produce more offspring at a faster rate? ",
        answerA: {
            text: "sexual reproduction",
            correct: false,
        },
        answerB: {
            text: "asexual reproduction",
            correct: true,
        },
        answerC: {
            text: "both sexual reproduction and asexual reproduction",
            correct: false,
        },
        answerD: {
            text: "neither sexual reproduction nor asexual reproduction",
            correct: false,
        }
    }, {
        questionID: 11,
        number: "Question 11",
        question: "How do genetic differences occur in a population that reproduces asexually?",
        answerA: {
            text: "genetic material from two parents",
            correct: false,
        },
        answerB: {
            text: "genetic material from a single parent",
            correct: false,
        },
        answerC: {
            text: "genetic differences cannot occur in these populations",
            correct: false,
        },
        answerD: {
            text: "genetic mutations",
            correct: true,
        }
    }, {
        questionID: 12,
        number: "Question 12",
        question: "Which form of reproduction requires reproductive organs in order to produce offspring? ",
        answerA: {
            text: "asexual reproduction",
            correct: false,
        },
        answerB: {
            text: "sexual reproduction",
            correct: true,
        },
        answerC: {
            text: "both types of reproduction",
            correct: false,
        },
        answerD: {
            text: "neither type of reproduction",
            correct: false,
        }
    }, {
        questionID: 13,
        number: "Question 13",
        question: "To produce offspring, planarians exchange sperm that fertilizes eggs which develop inside the body. Planarians also have the unique ability to detach their tails and grow into two new identical individuals.  What type of reproduction do Planarians use?",
        answerA: {
            text: "asexual reproduction",
            correct: false,
        },
        answerB: {
            text: "sexual reproduction",
            correct: false,
        },
        answerC: {
            text: "both sexual reproduction and asexual reproduction",
            correct: true,
        },
        answerD: {
            text: "neither sexual reproduction nor asexual reproduction",
            correct: false,
        }
    }, {
        questionID: 14,
        number: "Question 14",
        question: "If an arm is cut off a starfish with part of the center, the arm can grow into a whole new starfish. The original starfish will grow back the lost arm. Which type of reproduction does this describe?",
        answerA: {
            text: "asexual reproduction",
            correct: true,
        },
        answerB: {
            text: "sexual reproduction",
            correct: false,
        },
        answerC: {
            text: "both sexual reproduction and asexual reproduction",
            correct: false,
        },
        answerD: {
            text: "neither sexual reproduction nor asexual reproduction",
            correct: false,
        }
    }, {
        questionID: 15,
        number: "Question 15",
        question: "Flowers can reproduce through cross pollination or self pollination. What type of reproduction do flowers use?",
        answerA: {
            text: "asexual reproduction",
            correct: false,
        },
        answerB: {
            text: "sexual reproduction",
            correct: true,
        },
        answerC: {
            text: "both sexual reproduction and asexual reproduction",
            correct: false,
        },
        answerD: {
            text: "neither sexual reproduction nor asexual reproduction",
            correct: false,
        }
    }
]
// timer function that runs 'secondsLeft' amount of time or until the 'currentIndex' is 15
function timerInterval() {
    var timer = setInterval(() => {
        if (secondsLeft > 0 && currentIndex !== 16 && currentIndex !== 99) {
            secondsLeft--;
            document.body.children[2].children[1].children[2].textContent = "Time Remaining: " + secondsLeft
        } else if (currentIndex === 99) {
            clearInterval(timer)
            startCard.removeChild(startCard.children[1]);
            document.querySelector("h5").textContent = "You win! Your score is: " + secondsLeft;
            let playAgain = document.createElement("button");
            playAgain.setAttribute("class", "btn btn-danger btn-lg btn-block")
            playAgain.textContent = "Play Again"
            startCard.append(playAgain)
            playAgain.addEventListener("click", function () {
                location.reload()
            })
            if (parseInt(localStorage.getItem("score")) < secondsLeft && localStorage.getItem("score")) {
                localStorage.setItem("score", secondsLeft)
                document.querySelector("h5").textContent = "You have acheived a new highscore! Your score is: " + secondsLeft;
            }
            if (!localStorage.getItem("score")) {
                localStorage.setItem("score", secondsLeft)
                document.querySelector("h5").textContent = "Thanks for playing the first time! Your score is: " + secondsLeft;
            }
        } else {
            clearInterval(timer)
            startCard.removeChild(startCard.children[1]);
            document.querySelector("h5").textContent = "Time is up! Play again for another chance to win!"
            document.body.children[2].children[1].children[2].textContent = "Time Remaining: 0"
            let playAgain = document.createElement("button");
            playAgain.setAttribute("class", "btn btn-danger btn-lg btn-block")
            playAgain.textContent = "Play Again"
            startCard.append(playAgain)
            playAgain.addEventListener("click", function () {
                location.reload()
            })


        }
    }, 1000);
};
// removes instructions and start button, adds qDiv and calls questionCycle function and begins timerInterval
// called with event handler on 'start button'
function startFunction() {
    startCard.removeChild(startCard.children[1])
    startCard.removeChild(startCard.children[1])
    startCard.append(qDiv)
    nextQuestion()
    timerInterval()
}
// adds event handlers to buttons according to id
// correct choices call nextQuestion function, incorrect answers subtract time from secondsLeft and call incorrectAnswer function
qButtonA.addEventListener("click", function () {
    if (qButtonA.id === "correct") {
        if (currentIndex === 15) {
            currentIndex = 99
        } else {
            nextQuestion()
        }
    } else {
        //subtract time
        secondsLeft -= 9
        incorrectAnswer()
    }
})
qButtonB.addEventListener("click", function () {
    if (qButtonB.id === "correct") {
        if (currentIndex === 15) {
            currentIndex = 99
        } else {
            nextQuestion()
        }
    } else {
        //subtract time
        secondsLeft -= 9
        incorrectAnswer()
    }
})
qButtonC.addEventListener("click", function () {
    if (qButtonC.id === "correct") {
        if (currentIndex === 15) {
            currentIndex = 99
        } else {
            nextQuestion()
        }
    } else {
        //subtract time
        secondsLeft -= 9
        incorrectAnswer()
    }
})
qButtonD.addEventListener("click", function () {
    if (qButtonD.id === "correct") {
        if (currentIndex === 15) {
            currentIndex = 99
        } else {
            nextQuestion()
        }
    } else {
        //subtract time
        secondsLeft -= 9
        incorrectAnswer()
    }
})
// begins question cycle
function nextQuestion() {

    if (currentIndex === 15) {
        return;
    }
    currentIndex++
    divEl[4].textContent = questionsArr[currentIndex - 1].number // writes question # to card-header
    document.querySelector("h5").textContent = questionsArr[currentIndex - 1].question // writes question to h5 
    // writes answer choices to 4 buttons and aligns text to the left
    qButtonA.textContent = questionsArr[currentIndex - 1].answerA.text
    qButtonA.setAttribute("style", "text-align: left")
    qButtonB.textContent = questionsArr[currentIndex - 1].answerB.text
    qButtonB.setAttribute("style", "text-align: left")
    qButtonC.textContent = questionsArr[currentIndex - 1].answerC.text
    qButtonC.setAttribute("style", "text-align: left")
    qButtonD.textContent = questionsArr[currentIndex - 1].answerD.text
    qButtonD.setAttribute("style", "text-align: left")

    // adds IDs of 'correct' or 'incorrect' to buttons
    if (questionsArr[currentIndex - 1].answerA.correct === true) {
        qButtonA.setAttribute("id", "correct")
    } else {
        qButtonA.setAttribute("id", "incorrect")
    }

    if (questionsArr[currentIndex - 1].answerB.correct === true) {
        qButtonB.setAttribute("id", "correct")
    } else {
        qButtonB.setAttribute("id", "incorrect")
    }

    if (questionsArr[currentIndex - 1].answerC.correct === true) {
        qButtonC.setAttribute("id", "correct")
    } else {
        qButtonC.setAttribute("id", "incorrect")
    }

    if (questionsArr[currentIndex - 1].answerD.correct === true) {
        qButtonD.setAttribute("id", "correct")
    } else {
        qButtonD.setAttribute("id", "incorrect")
    }
    // appends buttons to qDiv
    qDiv.append(qButtonA)
    qDiv.append(qButtonB)
    qDiv.append(qButtonC)
    qDiv.append(qButtonD)
    // increments the currentIndex-1 by 1
}
// flashes the timer 'red' when incorrect answer is pressed
function incorrectAnswer() {
    highScore.setAttribute("style", "background-color: red")
    setTimeout(function () {
        highScore.setAttribute("style", "background-color: transparent")
    }, 500)
}