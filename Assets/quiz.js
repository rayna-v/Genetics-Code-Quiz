var divEl = document.querySelectorAll("div");
var startCard = divEl[3];
startCard.setAttribute("id", "start-card");

var btnStart = document.querySelector('a');
btnStart.setAttribute("id", "start-button");
btnStart.addEventListener("click", startFunction)

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
    divEl[4].textContent = "Time Remaining: "
    questionCycle()
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
qButtonA.addEventListener("click", function () {
    if (qButtonA.id === "correct") {
        nextQuestion()
    } else {
        //subtract time
        alert("incorrect")
    }
})

qButtonB.addEventListener("click", function () {
    if (qButtonB.id === "correct") {
        nextQuestion()
    } else {
        //subtract time
        alert("incorrect")
    }
})
qButtonC.addEventListener("click", function () {
    if (qButtonC.id === "correct") {
        nextQuestion()
    } else {
        //subtract time
        alert("incorrect")
    }
})
qButtonD.addEventListener("click", function () {
    if (qButtonD.id === "correct") {
        nextQuestion()
    } else {
        //subtract time
        alert("incorrect")
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

    // }
    // for (var i = 0; i < questionsArr.length; i++) {
    //     console.log(questionsArr[i].questionID)
    //     console.log(document.getElementsByClassName("qButtons"))
    //     qButtons[i].addEventListener("click", function (event) {
    //         if (event.target.id == "correct") {

    //             divEl[2].textContent = questionsArr[i + 1].number
    //             document.querySelector("h5").textContent = questionsArr[i].question
    //             qButtonA.textContent = questionsArr[i + 1].answerA.text
    //             qButtonB.textContent = questionsArr[i + 1].answerB.text
    //             qButtonC.textContent = questionsArr[i + 1].answerC.text
    //             qButtonD.textContent = questionsArr[i + 1].answerD.text
    //             // for (var i = i; i < questionsArr; i++) {
    //             if (questionsArr[i].answerA.correct == true) {
    //                 qButtonA.setAttribute("id", "correct")
    //             } else {
    //                 qButtonA.setAttribute("id", "incorrect")
    //             }

    //             if (questionsArr[i].answerB.correct == true) {
    //                 qButtonB.setAttribute("id", "correct")
    //             } else {
    //                 qButtonB.setAttribute("id", "incorrect")
    //             }
    //             if (questionsArr[i].answerC.correct == true) {
    //                 qButtonC.setAttribute("id", "correct")
    //             } else {
    //                 qButtonC.setAttribute("id", "incorrect")
    //             }

    //             if (questionsArr[i].answerD.correct == true) {
    //                 qButtonD.setAttribute("id", "correct")
    //             } else {
    //                 qButtonD.setAttribute("id", "incorrect")
    //             }
    //         }
    //     })

    // }

}