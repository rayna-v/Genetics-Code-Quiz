var divEl = document.querySelectorAll("div");
var startCard = divEl[3];
startCard.setAttribute("id", "start-card");

var btnStart = document.querySelector('a');
btnStart.setAttribute("id", "start-button");
btnStart.addEventListener("click", startFunction)

var highScore = document.body.children[2].children[2]
// localStorage.setItem("score", 0)
console.log(highScore)
highScore.textContent = "Current High Score: " + localStorage.getItem("score")

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

// console.log(qButtons)
let currentIndex = 0
let secondsLeft = 180
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
            text: "uterus",
            correct: true,
        },
        answerB: {
            text: "sperm cell",
            correct: false,
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
        question: "To produce offspring, planarians exchange sperm that fertilizes eggs which develop inside the body. Planarians also have the unique ability to detach their tails and grow into two new identical individuals.  What type of reprodction do Planarians use?",
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
        question: "If an arm is cut off a starfish with part of the center, the arm can grow into a whole new starfish. The original starfish will grow back the lost arm. Which type of reproduction does that describe?",
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
        question: "Flowers can reproduce through cross polloination or self pollination? What type of reporduction do flowers use?",
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
// document.onload =
//     startFunction()
function timerInterval() {
    var timer = setInterval(() => {
        if (secondsLeft > 0 && currentIndex !== 15) {
            secondsLeft--;
            divEl[4].textContent = "Time Remaining: " + secondsLeft
        } else {
            clearInterval(timer)
            alert("Time's Up! Your score is " + secondsLeft)
            if (parseInt(localStorage.getItem("score")) < secondsLeft && localStorage.getItem("score")) {
                localStorage.setItem("score", secondsLeft)
                alert("You have acheived a new highscore!")
            } else if (!localStorage.getItem("score")) {
                localStorage.setItem("score", secondsLeft)
                alert("Thanks for playing the first time!")
            }
            var playAgain = confirm("Do you want to play again?")
            if (playAgain === true) {
                location.reload()
            }
        }
    }, 1000);
}
function startFunction() {
    console.log(startCard)
    startCard.removeChild(startCard.children[1])
    startCard.removeChild(startCard.children[1])
    startCard.append(qDiv)
    questionCycle()
    timerInterval()
}

function questionCycle() {

    divEl[2].textContent = questionsArr[0].number // writes question # to card-header
    document.querySelector("h5").textContent = questionsArr[0].question // writes question to h5 
    // writes answer choices to 4 buttons
    qButtonA.textContent = questionsArr[0].answerA.text
    qButtonB.textContent = questionsArr[0].answerB.text
    qButtonC.textContent = questionsArr[0].answerC.text
    qButtonD.textContent = questionsArr[0].answerD.text

    // adds IDs of 'correct' or 'incorrect' to buttons
    if (questionsArr[0].answerA.correct === true) {
        qButtonA.setAttribute("id", "correct")
    } else {
        qButtonA.setAttribute("id", "incorrect")
    }

    if (questionsArr[0].answerB.correct === true) {
        qButtonB.setAttribute("id", "correct")
    } else {
        qButtonB.setAttribute("id", "incorrect")
    }

    if (questionsArr[0].answerC.correct === true) {
        qButtonC.setAttribute("id", "correct")
    } else {
        qButtonC.setAttribute("id", "incorrect")
    }

    if (questionsArr[0].answerD.correct === true) {
        qButtonD.setAttribute("id", "correct")
    } else {
        qButtonD.setAttribute("id", "incorrect")
    }
    // appends buttons to qDiv
    qDiv.append(qButtonA)
    qDiv.append(qButtonB)
    qDiv.append(qButtonC)
    qDiv.append(qButtonD)
}
function incorrectAnswer() {
    highScore.setAttribute("style", "background-color: red")
    setTimeout(function () {
        highScore.setAttribute("style", "background-color: transparent")
    }, 500)
}
qButtonA.addEventListener("click", function () {
    if (qButtonA.id === "correct") {
        nextQuestion()
    } else {
        secondsLeft -= 4
        incorrectAnswer()
    }
})

qButtonB.addEventListener("click", function () {
    if (qButtonB.id === "correct") {
        nextQuestion()
    } else {
        //subtract time
        secondsLeft -= 4
        incorrectAnswer()
    }
})
qButtonC.addEventListener("click", function () {
    if (qButtonC.id === "correct") {
        nextQuestion()
    } else {
        //subtract time
        secondsLeft -= 4
        incorrectAnswer()
    }
})
qButtonD.addEventListener("click", function () {
    if (qButtonD.id === "correct") {
        nextQuestion()
    } else {
        //subtract time
        secondsLeft -= 4
        incorrectAnswer()
    }
})
function nextQuestion() {
    currentIndex++
    console.log(currentIndex)

    // for (let i = currentIndex; i < 5; i++) {

    divEl[2].textContent = questionsArr[currentIndex].number // writes question # to card-header
    document.querySelector("h5").textContent = questionsArr[currentIndex].question // writes question to h5 
    qButtonA.textContent = questionsArr[currentIndex].answerA.text
    qButtonB.textContent = questionsArr[currentIndex].answerB.text
    qButtonC.textContent = questionsArr[currentIndex].answerC.text
    qButtonD.textContent = questionsArr[currentIndex].answerD.text
    // for (var i = 0; i < questionsArr; i++) {
    // adds IDs of 'correct' or 'incorrect' to buttons
    if (questionsArr[currentIndex].answerA.correct === true) {
        qButtonA.setAttribute("id", "correct")
    } else {
        qButtonA.setAttribute("id", "incorrect")
    }

    if (questionsArr[currentIndex].answerB.correct === true) {
        qButtonB.setAttribute("id", "correct")
    } else {
        qButtonB.setAttribute("id", "incorrect")
    }

    if (questionsArr[currentIndex].answerC.correct === true) {
        qButtonC.setAttribute("id", "correct")
    } else {
        qButtonC.setAttribute("id", "incorrect")
    }

    if (questionsArr[currentIndex].answerD.correct === true) {
        qButtonD.setAttribute("id", "correct")
    } else {
        qButtonD.setAttribute("id", "incorrect")
    }
    // appends buttons to qDiv
    qDiv.append(qButtonA)
    qDiv.append(qButtonB)
    qDiv.append(qButtonC)
    qDiv.append(qButtonD)

}