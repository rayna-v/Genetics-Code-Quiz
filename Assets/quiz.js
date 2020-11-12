var divEl = document.querySelectorAll("div");
var startCard = divEl[3];
startCard.setAttribute("id", "start-card");

var btnStart = document.querySelector('a');
btnStart.setAttribute("id", "start-button");
btnStart.addEventListener("click", startFunction)

var highScore = document.body.children[2].children[2]
localStorage.setItem("score", 0)
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
let secondsLeft = 20
var questionsArr = [
    {
        questionID: 1,
        number: "Question 1",
        question: "question1 text",
        answerA: {
            text: "answerA text",
            correct: false,
        },
        answerB: {
            text: "answerB text",
            correct: false,
        },
        answerC: {
            text: "answerC text",
            correct: true,
        },
        answerD: {
            text: "answerD text",
            correct: false,
        }
    },
    {
        questionID: 2,
        number: "Question 2",
        question: "question2 text",
        answerA: {
            text: "answerA text2",
            correct: true,
        },
        answerB: {
            text: "answerB text2",
            correct: false,
        },
        answerC: {
            text: "answerC text2",
            correct: false,
        },
        answerD: {
            text: "answerD text2",
            correct: false,
        }
    },
    {
        questionID: 3,
        number: "Question 3",
        question: "question3 text",
        answerA: {
            text: "answerA text3",
            correct: true,
        },
        answerB: {
            text: "answerB text3",
            correct: false,
        },
        answerC: {
            text: "answerC text3",
            correct: false,
        },
        answerD: {
            text: "answerD text3",
            correct: false,
        }
    },
    {
        questionID: 4,
        number: "Question 4",
        question: "question4 text",
        answerA: {
            text: "answerA text4",
            correct: true,
        },
        answerB: {
            text: "answerB text4",
            correct: false,
        },
        answerC: {
            text: "answerC text4",
            correct: false,
        },
        answerD: {
            text: "answerD text4",
            correct: false,
        }
    },
    {
        questionID: 5,
        number: "Question 5",
        question: "question5 text",
        answerA: {
            text: "answerA text5",
            correct: true,
        },
        answerB: {
            text: "answerB text5",
            correct: false,
        },
        answerC: {
            text: "answerC text5",
            correct: false,
        },
        answerD: {
            text: "answerD text5",
            correct: false,
        }
    }
]
// document.onload =
//     startFunction()

function startFunction() {
    console.log(startCard)
    startCard.removeChild(startCard.children[1])
    startCard.removeChild(startCard.children[1])
    startCard.append(qDiv)
    questionCycle()
    var timer = setInterval(() => {
        secondsLeft--;
        divEl[4].textContent = "Time Remaining: " + secondsLeft
        if (secondsLeft === 0 || currentIndex === 4) {

            alert("Time's Up! Your score is " + secondsLeft)

            if (localStorage.getItem("score") < secondsLeft) {
                localStorage.set("score", secondsLeft)
                alert("You have acheived a new highscore!")
            }
            clearInterval(timer)
            var playAgain = confirm("Do you want to play again?")
            if (playAgain === true) {
                location.reload()
            }

        }
    }, 1000);
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

}
qButtonA.addEventListener("click", function () {
    if (qButtonA.id === "correct") {
        nextQuestion()
    } else {
        secondsLeft -= 5
        // setInterval
        // alert("incorrect")
    }
})

qButtonB.addEventListener("click", function () {
    if (qButtonB.id === "correct") {
        nextQuestion()
    } else {
        //subtract time
        secondsLeft -= 5
    }
})
qButtonC.addEventListener("click", function () {
    if (qButtonC.id === "correct") {
        nextQuestion()
    } else {
        //subtract time
        secondsLeft -= 5
    }
})
qButtonD.addEventListener("click", function () {
    if (qButtonD.id === "correct") {
        nextQuestion()
    } else {
        //subtract time
        secondsLeft -= 5
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

    if (secondsLeft === 0 || currentIndex === 4) {

        alert("Time's Up! Your score is " + secondsLeft)
        console.log(localStorage.getItem("score"))
        if (localStorage.getItem("score") < secondsLeft) {
            localStorage.set("score", secondsLeft)
            alert("You have acheived a new highscore!")
            clearInterval(timer)
        }
        clearInterval(timer)
        var playAgain = confirm("Do you want to play again?")
        if (playAgain === true) {
            location.reload()
        }

    }
}